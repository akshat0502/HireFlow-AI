package com.hireflow.ai;

import com.hireflow.dto.response.AIAnalysisResponse;
import com.hireflow.dto.response.JobMatchResponse;

public interface GeminiService {

    /**
     * Analyze uploaded resume.
     *
     * @param resumeText Extracted PDF text
     * @return AI Analysis
     */
    AIAnalysisResponse analyzeResume(String resumeText);

    /**
     * Compare Resume with Job Description.
     *
     * @param resumeText Extracted Resume Text
     * @param jobDescription Job Description
     * @return Job Match Analysis
     */
    JobMatchResponse analyzeJobMatch(
            String resumeText,
            String jobDescription
    );

}