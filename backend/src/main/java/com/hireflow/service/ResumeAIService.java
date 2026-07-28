package com.hireflow.service;

import com.hireflow.dto.response.AIAnalysisResponse;

public interface ResumeAIService {

    AIAnalysisResponse analyzeResume(Long resumeId);

}