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
public class JobMatchResponse {

    private String jobTitle;

    private String company;

    private Integer atsScore;

    private Integer matchPercentage;

    private List<String> strengths;

    private List<String> missingSkills;

    private List<String> suggestions;

    private List<String> interviewQuestions;

}