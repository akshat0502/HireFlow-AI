package com.hireflow.service.impl;

import com.hireflow.dto.request.JobRequest;
import com.hireflow.dto.response.JobResponse;
import com.hireflow.entity.Job;
import com.hireflow.entity.JobStatus;
import com.hireflow.entity.User;
import com.hireflow.exception.ResourceNotFoundException;
import com.hireflow.repository.JobRepository;
import com.hireflow.repository.UserRepository;
import com.hireflow.service.JobService;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class JobServiceImpl implements JobService {

    private final JobRepository jobRepository;
    private final UserRepository userRepository;

    @Override
    public JobResponse createJob(JobRequest request) {

        Authentication authentication =
                SecurityContextHolder.getContext().getAuthentication();

        String email = authentication.getName();

        User recruiter = userRepository.findByEmail(email)
                .orElseThrow(() -> new ResourceNotFoundException("Recruiter not found"));

        Job job = Job.builder()
                .title(request.getTitle())
                .company(request.getCompany())
                .location(request.getLocation())
                .salary(request.getSalary())
                .description(request.getDescription())
                .skills(request.getSkills())
                .employmentType(request.getEmploymentType())
                .experience(request.getExperience())
                .status(JobStatus.OPEN)
                .recruiter(recruiter)
                .build();

        return mapToResponse(jobRepository.save(job));
    }

    @Override
    public List<JobResponse> getAllJobs() {

        return jobRepository.findAll()
                .stream()
                .map(this::mapToResponse)
                .toList();
    }

    @Override
    public JobResponse getJobById(Long id) {

        Job job = jobRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Job not found"));

        return mapToResponse(job);
    }

    @Override
    public JobResponse updateJob(Long id, JobRequest request) {

        Job job = jobRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Job not found"));

        job.setTitle(request.getTitle());
        job.setCompany(request.getCompany());
        job.setLocation(request.getLocation());
        job.setSalary(request.getSalary());
        job.setDescription(request.getDescription());
        job.setSkills(request.getSkills());
        job.setEmploymentType(request.getEmploymentType());
        job.setExperience(request.getExperience());

        return mapToResponse(jobRepository.save(job));
    }

    @Override
    public void deleteJob(Long id) {

        Job job = jobRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Job not found"));

        jobRepository.delete(job);
    }

    private JobResponse mapToResponse(Job job) {

        return JobResponse.builder()
                .id(job.getId())
                .title(job.getTitle())
                .company(job.getCompany())
                .location(job.getLocation())
                .salary(job.getSalary())
                .description(job.getDescription())
                .skills(job.getSkills())
                .employmentType(job.getEmploymentType())
                .experience(job.getExperience())
                .status(job.getStatus())
                .recruiterName(job.getRecruiter().getName())
                .build();
    }
}