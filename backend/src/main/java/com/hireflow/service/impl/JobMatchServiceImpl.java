package com.hireflow.service.impl;

import com.hireflow.ai.GeminiService;
import com.hireflow.ai.PdfExtractor;
import com.hireflow.dto.response.JobMatchResponse;
import com.hireflow.entity.Job;
import com.hireflow.entity.Resume;
import com.hireflow.exception.ResourceNotFoundException;
import com.hireflow.repository.JobRepository;
import com.hireflow.repository.ResumeRepository;
import com.hireflow.service.JobMatchService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;

@Service
@RequiredArgsConstructor
public class JobMatchServiceImpl implements JobMatchService {

    private final ResumeRepository resumeRepository;

    private final JobRepository jobRepository;

    private final GeminiService geminiService;

    private final PdfExtractor pdfExtractor;

    @Override
    public JobMatchResponse match(
            Long resumeId,
            Long jobId) {

        Resume resume = resumeRepository.findById(resumeId)
                .orElseThrow(() ->
                        new ResourceNotFoundException("Resume not found"));

        Job job = jobRepository.findById(jobId)
                .orElseThrow(() ->
                        new ResourceNotFoundException("Job not found"));

        try {

            byte[] pdf = Files.readAllBytes(
                    Path.of(resume.getFilePath())
            );

            String resumeText =
                    pdfExtractor.extractText(pdf);

            StringBuilder jobDescription =
                    new StringBuilder();

            jobDescription.append("Title : ")
                    .append(job.getTitle())
                    .append("\n");

            jobDescription.append("Company : ")
                    .append(job.getCompany())
                    .append("\n");

            jobDescription.append("Location : ")
                    .append(job.getLocation())
                    .append("\n");

            jobDescription.append("Skills : ")
                    .append(job.getSkills())
                    .append("\n");

            jobDescription.append("Experience : ")
                    .append(job.getExperience())
                    .append("\n");

            jobDescription.append("Description : ")
                    .append(job.getDescription());

            return geminiService.analyzeJobMatch(
                    resumeText,
                    jobDescription.toString()
            );

        }

        catch (IOException e) {

            throw new RuntimeException(
                    "Unable to process resume",
                    e
            );

        }

    }

}