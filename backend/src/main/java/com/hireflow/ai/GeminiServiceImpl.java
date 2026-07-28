package com.hireflow.ai;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.hireflow.constant.GeminiPrompt;
import com.hireflow.dto.response.AIAnalysisResponse;
import com.hireflow.dto.response.JobMatchResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestClient;

@Service
@RequiredArgsConstructor
public class GeminiServiceImpl implements GeminiService {

        private final RestClient restClient;
        private final ObjectMapper objectMapper;

        @Value("${gemini.api.key}")
        private String apiKey;

        @Value("${gemini.model}")
        private String model;

        @Override
        public AIAnalysisResponse analyzeResume(String resumeText) {

                try {

                        String prompt = String.format(
                                        GeminiPrompt.RESUME_ANALYSIS_PROMPT,
                                        resumeText);

                        String requestBody = buildRequest(prompt);

                        String response = callGemini(requestBody);

                        System.out.println("========== GEMINI RESPONSE ==========");
                        System.out.println(response);
                        System.out.println("=====================================");

                        String json = extractJson(response);

                        return objectMapper.readValue(
                                        json,
                                        AIAnalysisResponse.class);

                } catch (Exception e) {

                        e.printStackTrace();

                        throw new RuntimeException(
                                        "Resume analysis failed: " + e.getMessage(),
                                        e);

                }

        }

        @Override
        public JobMatchResponse analyzeJobMatch(
                        String resumeText,
                        String jobDescription) {

                try {

                        String prompt = String.format(
                                        GeminiPrompt.JOB_MATCH_PROMPT,
                                        resumeText,
                                        jobDescription);

                        String requestBody = buildRequest(prompt);

                        String response = callGemini(requestBody);

                        System.out.println("========== GEMINI RESPONSE ==========");
                        System.out.println(response);
                        System.out.println("=====================================");

                        String json = extractJson(response);

                        return objectMapper.readValue(
                                        json,
                                        JobMatchResponse.class);

                } catch (Exception e) {

                        e.printStackTrace();

                        throw new RuntimeException(
                                        "Resume analysis failed: " + e.getMessage(),
                                        e);

                }

        }

        /**
         * Builds Gemini request JSON.
         */
        private String buildRequest(String prompt) throws Exception {

                JsonNode request = objectMapper.readTree("""
                                {
                                  "contents": [
                                    {
                                      "parts": [
                                        {
                                          "text": ""
                                        }
                                      ]
                                    }
                                  ]
                                }
                                """);

                ((com.fasterxml.jackson.databind.node.ObjectNode) request.get("contents")
                                .get(0)
                                .get("parts")
                                .get(0))
                                .put("text", prompt);

                return objectMapper.writeValueAsString(request);

        }

        /**
         * Calls the Gemini Developer API.
         */
        private String callGemini(String requestBody) {

                return restClient.post()

                                .uri(
                                                "https://generativelanguage.googleapis.com/v1/models/"
                                                                + model
                                                                + ":generateContent?key="
                                                                + apiKey)

                                .contentType(MediaType.APPLICATION_JSON)

                                .accept(MediaType.APPLICATION_JSON)

                                .body(requestBody)

                                .retrieve()

                                .body(String.class);

        }

        /**
         * Extracts JSON returned by Gemini.
         */
        private String extractJson(String response) throws Exception {

                JsonNode root = objectMapper.readTree(response);

                // Check if Gemini returned any candidates
                if (!root.has("candidates")
                                || root.get("candidates").isEmpty()) {

                        throw new RuntimeException(
                                        "No response received from Gemini AI.");

                }

                String text = root.path("candidates")
                                .get(0)
                                .path("content")
                                .path("parts")
                                .get(0)
                                .path("text")
                                .asText();

                // Remove Markdown code fences if Gemini wraps JSON
                text = text.replace("```json", "")
                                .replace("```", "")
                                .trim();

                return text;

        }
}