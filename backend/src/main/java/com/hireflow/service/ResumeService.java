package com.hireflow.service;

import com.hireflow.dto.response.ResumeResponse;
import org.springframework.core.io.Resource;
import org.springframework.web.multipart.MultipartFile;

public interface ResumeService {

    ResumeResponse uploadResume(MultipartFile file);

    ResumeResponse getMyResume();

    Resource downloadResume(Long id);

}