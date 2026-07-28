package com.hireflow.controller;

import com.hireflow.dto.response.AIAnalysisResponse;
import com.hireflow.service.ResumeAIService;
import io.swagger.v3.oas.annotations.security.SecurityRequirement;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/ai")
@RequiredArgsConstructor
@SecurityRequirement(name = "bearerAuth")
public class AIController {

    private final ResumeAIService resumeAIService;

    @PostMapping("/analyze/{resumeId}")
    public ResponseEntity<AIAnalysisResponse> analyzeResume(
            @PathVariable Long resumeId) {

        return ResponseEntity.ok(
                resumeAIService.analyzeResume(resumeId)
        );
    }

}