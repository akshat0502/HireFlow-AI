package com.hireflow.controller;

import com.hireflow.dto.request.JobRequest;
import com.hireflow.dto.response.JobResponse;
import com.hireflow.service.JobService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import io.swagger.v3.oas.annotations.security.SecurityRequirement;

import java.util.List;

@RestController
@RequestMapping("/api/jobs")
@RequiredArgsConstructor
@SecurityRequirement(name = "bearerAuth")
public class JobController {

    private final JobService jobService;

    /**
     * Create Job
     */
    @PostMapping
    public ResponseEntity<JobResponse> createJob(
            @Valid @RequestBody JobRequest request) {

        JobResponse response = jobService.createJob(request);

        return ResponseEntity.status(HttpStatus.CREATED)
                .body(response);
    }

    /**
     * Get All Jobs
     */
    @GetMapping
    public ResponseEntity<List<JobResponse>> getAllJobs() {

        return ResponseEntity.ok(
                jobService.getAllJobs()
        );

    }

    /**
     * Get Job By Id
     */
    @GetMapping("/{id}")
    public ResponseEntity<JobResponse> getJobById(
            @PathVariable Long id) {

        return ResponseEntity.ok(
                jobService.getJobById(id)
        );

    }

    /**
     * Update Job
     */
    @PutMapping("/{id}")
    public ResponseEntity<JobResponse> updateJob(
            @PathVariable Long id,
            @Valid @RequestBody JobRequest request) {

        return ResponseEntity.ok(
                jobService.updateJob(id, request)
        );

    }

    /**
     * Delete Job
     */
    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteJob(
            @PathVariable Long id) {

        jobService.deleteJob(id);

        return ResponseEntity.ok(
                "Job deleted successfully."
        );

    }

}