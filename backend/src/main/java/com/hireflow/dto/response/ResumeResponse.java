package com.hireflow.dto.response;

import lombok.*;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class ResumeResponse {

    private Long id;

    private String fileName;

    private String fileType;

    private String downloadUrl;

}