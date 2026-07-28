package com.hireflow.controller;

import com.hireflow.dto.response.ResumeResponse;
import com.hireflow.service.ResumeService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.security.SecurityRequirement;
import lombok.RequiredArgsConstructor;
import org.springframework.core.io.Resource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

@RestController
@RequestMapping("/api/resume")
@RequiredArgsConstructor
@SecurityRequirement(name = "bearerAuth")
public class ResumeController {

    private final ResumeService resumeService;

    /**
     * Upload Resume
     */
    @Operation(security = @SecurityRequirement(name = "bearerAuth"))
    @PostMapping(
            value = "/upload",
            consumes = MediaType.MULTIPART_FORM_DATA_VALUE
    )
    public ResponseEntity<ResumeResponse> uploadResume(
            @RequestPart("file") MultipartFile file) {

        return ResponseEntity.ok(
                resumeService.uploadResume(file)
        );

    }

    /**
     * Get Logged-in User Resume
     */
    @GetMapping("/me")
    public ResponseEntity<ResumeResponse> getMyResume() {

        return ResponseEntity.ok(
                resumeService.getMyResume()
        );

    }

    /**
     * Download Resume
     */
    @GetMapping("/{id}")
    public ResponseEntity<Resource> downloadResume(
            @PathVariable Long id) {

        Resource resource =
                resumeService.downloadResume(id);

        return ResponseEntity.ok()
                .header(
                        HttpHeaders.CONTENT_DISPOSITION,
                        "attachment; filename=\"" +
                                resource.getFilename() +
                                "\""
                )
                .body(resource);

    }

}