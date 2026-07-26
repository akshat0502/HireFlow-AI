package com.hireflow.exception;

import com.hireflow.dto.ApiResponse;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@RestControllerAdvice
public class GlobalExceptionHandler {

    @ExceptionHandler(ResourceNotFoundException.class)
    public ResponseEntity<ApiResponse<?>> handleNotFound(
            ResourceNotFoundException ex){

        ApiResponse<?> response =
                new ApiResponse<>(false,ex.getMessage(),null);

        return new ResponseEntity<>(response,HttpStatus.NOT_FOUND);

    }

}
