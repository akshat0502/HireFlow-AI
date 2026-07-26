package com.hireflow.dto.request;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.Data;

@Data
public class JobRequest {

    @NotBlank
    private String title;

    @NotBlank
    private String company;

    @NotBlank
    private String location;

    @NotNull
    private Double salary;

    @NotBlank
    private String description;

    @NotBlank
    private String skills;

    @NotBlank
    private String employmentType;

    @NotNull
    private Integer experience;

}