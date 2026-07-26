package com.hireflow.service.impl;

import com.hireflow.dto.response.ResumeResponse;
import com.hireflow.entity.Resume;
import com.hireflow.entity.User;
import com.hireflow.repository.ResumeRepository;
import com.hireflow.repository.UserRepository;
import com.hireflow.service.ResumeService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.io.Resource;
import org.springframework.core.io.UrlResource;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.net.MalformedURLException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;
import java.util.UUID;

@Service
@RequiredArgsConstructor
public class ResumeServiceImpl implements ResumeService {

    @Value("${file.upload-dir}")
    private String uploadDir;

    private final ResumeRepository resumeRepository;

    private final UserRepository userRepository;

    @Override
    public ResumeResponse uploadResume(MultipartFile file) {

        try {

            Authentication authentication =
                    SecurityContextHolder.getContext().getAuthentication();

            String email = authentication.getName();

            User candidate = userRepository.findByEmail(email)
                    .orElseThrow(() ->
                            new RuntimeException("Candidate not found"));

            // Delete old resume if present
            resumeRepository.findByCandidate(candidate).ifPresent(oldResume -> {

                try {

                    Files.deleteIfExists(Paths.get(oldResume.getFilePath()));

                } catch (IOException ignored) {
                }

                resumeRepository.delete(oldResume);

            });

            String uniqueFileName =
                    UUID.randomUUID() + "_" + file.getOriginalFilename();

            Path uploadPath = Paths.get(uploadDir);

            if (!Files.exists(uploadPath)) {

                Files.createDirectories(uploadPath);

            }

            Path destination =
                    uploadPath.resolve(uniqueFileName);

            Files.copy(
                    file.getInputStream(),
                    destination,
                    StandardCopyOption.REPLACE_EXISTING
            );

            Resume resume = Resume.builder()
                    .fileName(uniqueFileName)
                    .fileType(file.getContentType())
                    .filePath(destination.toString())
                    .candidate(candidate)
                    .build();

            resume = resumeRepository.save(resume);

            return ResumeResponse.builder()
                    .id(resume.getId())
                    .fileName(resume.getFileName())
                    .fileType(resume.getFileType())
                    .downloadUrl("/api/resume/" + resume.getId())
                    .build();

        } catch (IOException e) {

            throw new RuntimeException("Resume upload failed", e);

        }

    }

    @Override
    public ResumeResponse getMyResume() {

        Authentication authentication =
                SecurityContextHolder.getContext().getAuthentication();

        String email = authentication.getName();

        User candidate = userRepository.findByEmail(email)
                .orElseThrow(() ->
                        new RuntimeException("Candidate not found"));

        Resume resume = resumeRepository.findByCandidate(candidate)
                .orElseThrow(() ->
                        new RuntimeException("Resume not found"));

        return ResumeResponse.builder()
                .id(resume.getId())
                .fileName(resume.getFileName())
                .fileType(resume.getFileType())
                .downloadUrl("/api/resume/" + resume.getId())
                .build();

    }

    @Override
    public Resource downloadResume(Long id) {

        Resume resume = resumeRepository.findById(id)
                .orElseThrow(() ->
                        new RuntimeException("Resume not found"));

        try {

            Path path = Paths.get(resume.getFilePath());

            Resource resource =
                    new UrlResource(path.toUri());

            if (resource.exists() && resource.isReadable()) {

                return resource;

            }

            throw new RuntimeException("File not found");

        } catch (MalformedURLException e) {

            throw new RuntimeException("Unable to download file", e);

        }

    }

}