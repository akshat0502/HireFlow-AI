package com.hireflow.dto.response;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class AIAnalysisResponse {

    // Overall Resume Score (0-100)
    private Integer atsScore;

    // Job Match Percentage
    private Integer jobMatch;

    // Candidate strengths
    private List<String> strengths;

    // Missing skills
    private List<String> missingSkills;

    // Resume improvement suggestions
    private List<String> suggestions;

    // Recommended interview questions
    private List<String> interviewQuestions;

    // Overall AI summary
    private String summary;

}