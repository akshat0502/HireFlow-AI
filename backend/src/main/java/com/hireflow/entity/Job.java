package com.hireflow.entity;

import jakarta.persistence.*;
import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Entity
@Table(name = "jobs")
public class Job extends BaseEntity {

    @Column(nullable = false)
    private String title;

    @Column(nullable = false)
    private String company;

    private String location;

    private Double salary;

    @Column(length = 5000)
    private String description;

    private String skills;

    private String employmentType;

    private Integer experience;

    @Enumerated(EnumType.STRING)
    private JobStatus status;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "created_by")
    private User recruiter;

}