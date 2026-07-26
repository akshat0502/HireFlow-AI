package com.hireflow.controller;

import com.hireflow.dto.response.ResumeResponse;
import com.hireflow.service.ResumeService;
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
public class ResumeController {

    private final ResumeService resumeService;

    @PostMapping("/upload")
    public ResponseEntity<ResumeResponse> uploadResume(
            @RequestParam("file") MultipartFile file) {

        return ResponseEntity.ok(
                resumeService.uploadResume(file));

    }

    @GetMapping("/me")
    public ResponseEntity<ResumeResponse> myResume() {

        return ResponseEntity.ok(
                resumeService.getMyResume());

    }

    @GetMapping("/{id}")
    public ResponseEntity<Resource> downloadResume(
            @PathVariable Long id) {

        Resource resource =
                resumeService.downloadResume(id);

        return ResponseEntity.ok()

                .header(
                        HttpHeaders.CONTENT_DISPOSITION,
                        "attachment; filename=\""
                                + resource.getFilename()
                                + "\"")

                .contentType(MediaType.APPLICATION_PDF)

                .body(resource);

    }

}