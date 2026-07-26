package com.hireflow.repository;

import com.hireflow.entity.Resume;
import com.hireflow.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface ResumeRepository extends JpaRepository<Resume, Long> {

    Optional<Resume> findByCandidate(User candidate);

}