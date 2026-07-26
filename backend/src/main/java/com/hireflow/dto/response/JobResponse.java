package com.hireflow.dto.response;

import com.hireflow.entity.JobStatus;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class JobResponse {

    private Long id;

    private String title;

    private String company;

    private String location;

    private Double salary;

    private String description;

    private String skills;

    private String employmentType;

    private Integer experience;

    private JobStatus status;

    private String recruiterName;

}