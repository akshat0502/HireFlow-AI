package com.hireflow.service;

import com.hireflow.dto.request.JobRequest;
import com.hireflow.dto.response.JobResponse;

import java.util.List;

public interface JobService {

    JobResponse createJob(JobRequest request);

    List<JobResponse> getAllJobs();

    JobResponse getJobById(Long id);

    JobResponse updateJob(Long id, JobRequest request);

    void deleteJob(Long id);

}