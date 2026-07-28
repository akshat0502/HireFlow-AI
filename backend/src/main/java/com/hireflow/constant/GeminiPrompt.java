package com.hireflow.constant;

public final class GeminiPrompt {

    private GeminiPrompt() {
    }

    /**
     * Resume Analysis Prompt
     */
    public static final String RESUME_ANALYSIS_PROMPT = """
You are an expert Technical Recruiter, ATS Scanner, and Career Coach.

Analyze the following resume carefully.

Return ONLY valid JSON.

Do not include markdown.
Do not include explanation.
Do not include ```json.

Return exactly in this format:

{
  "atsScore": 0,
  "jobMatch": 0,
  "strengths": [],
  "missingSkills": [],
  "suggestions": [],
  "interviewQuestions": [],
  "summary": ""
}

Rules:

1. ATS Score must be between 0 and 100.
2. Job Match should be an estimated percentage for a Java Backend Developer role.
3. Strengths should contain 5-8 points.
4. Missing Skills should contain only technical skills.
5. Suggestions should contain practical improvements.
6. Generate 10 interview questions.
7. Summary should be within 100 words.

Resume:

%s
""";

    /**
     * Resume vs Job Matching Prompt
     */
    public static final String JOB_MATCH_PROMPT = """
You are an experienced HR Manager and Technical Recruiter.

Compare the following Resume with the given Job Description.

Return ONLY valid JSON.

Do not use markdown.
Do not include explanation.
Do not include ```json.

Return exactly in this format:

{
  "jobTitle":"",
  "company":"",
  "atsScore":0,
  "matchPercentage":0,
  "strengths":[],
  "missingSkills":[],
  "suggestions":[],
  "interviewQuestions":[]
}

Rules:

1. ATS Score should be between 0 and 100.
2. Match Percentage should be between 0 and 100.
3. Mention only technical strengths.
4. Mention only missing technical skills.
5. Suggestions should improve the resume for this specific job.
6. Generate 10 interview questions based on the Job Description.

Resume:

%s

--------------------------------------------------------

Job Description:

%s
""";

    /**
     * Interview Question Generator
     */
    public static final String INTERVIEW_PROMPT = """
You are a Senior Java Technical Interviewer.

Generate 15 interview questions based on the following resume.

Mix:

- Core Java
- OOP
- Collections
- Exception Handling
- Multithreading
- Spring Boot
- Spring Security
- Hibernate
- SQL
- REST APIs
- JWT
- PostgreSQL

Return ONLY a JSON array.

Example:

[
 "Question 1",
 "Question 2"
]

Resume:

%s
""";

}