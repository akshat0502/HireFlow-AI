package com.hireflow.service;

import com.hireflow.dto.response.JobMatchResponse;

public interface JobMatchService {

    JobMatchResponse match(
            Long resumeId,
            Long jobId
    );

}