package com.hireflow.service.impl;

import com.hireflow.ai.GeminiService;
import com.hireflow.ai.PdfExtractor;
import com.hireflow.dto.response.AIAnalysisResponse;
import com.hireflow.entity.Resume;
import com.hireflow.exception.ResourceNotFoundException;
import com.hireflow.repository.ResumeRepository;
import com.hireflow.service.ResumeAIService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;

@Service
@RequiredArgsConstructor
public class ResumeAIServiceImpl implements ResumeAIService {

    private final ResumeRepository resumeRepository;

    private final GeminiService geminiService;

    private final PdfExtractor pdfExtractor;

    @Override
    public AIAnalysisResponse analyzeResume(Long resumeId) {

        Resume resume = resumeRepository.findById(resumeId)
                .orElseThrow(() ->
                        new ResourceNotFoundException("Resume not found"));

        try {

            byte[] bytes = Files.readAllBytes(
                    Path.of(resume.getFilePath())
            );

            String resumeText =
                    pdfExtractor.extractText(bytes);

            return geminiService.analyzeResume(resumeText);

        } catch (IOException e) {

            throw new RuntimeException(
                    "Unable to read resume",
                    e
            );

        }

    }

}