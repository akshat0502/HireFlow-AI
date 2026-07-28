package com.hireflow.exception;

import com.hireflow.dto.response.ApiResponse;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@RestControllerAdvice
public class GlobalExceptionHandler {

    @ExceptionHandler(ResourceNotFoundException.class)
    public ResponseEntity<ApiResponse> handleResourceNotFound(
            ResourceNotFoundException ex) {

        return ResponseEntity.status(HttpStatus.NOT_FOUND)
                .body(new ApiResponse(false, ex.getMessage(), null));
    }

    @ExceptionHandler(AIException.class)
    public ResponseEntity<ApiResponse> handleAIException(
            AIException ex) {

        return ResponseEntity.badRequest()
                .body(new ApiResponse(false, ex.getMessage()));

    }

    @ExceptionHandler(Exception.class)
    public ResponseEntity<ApiResponse> handleException(
            Exception ex) {

        return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                .body(new ApiResponse(false, ex.getMessage(), null));
    }
}