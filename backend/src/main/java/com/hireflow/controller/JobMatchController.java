package com.hireflow.controller;

import com.hireflow.dto.response.JobMatchResponse;
import com.hireflow.service.JobMatchService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/job-match")
@RequiredArgsConstructor
public class JobMatchController {

    private final JobMatchService jobMatchService;

    @PostMapping("/{resumeId}/{jobId}")
    public ResponseEntity<JobMatchResponse> match(
            @PathVariable Long resumeId,
            @PathVariable Long jobId) {

        return ResponseEntity.ok(
                jobMatchService.match(
                        resumeId,
                        jobId
                )
        );

    }

}