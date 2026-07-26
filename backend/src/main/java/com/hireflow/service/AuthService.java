package com.hireflow.service;

import com.hireflow.dto.request.LoginRequest;
import com.hireflow.dto.request.RegisterRequest;
import com.hireflow.dto.response.ApiResponse;
import com.hireflow.dto.response.JwtResponse;

public interface AuthService {

    ApiResponse register(RegisterRequest request);

    JwtResponse login(LoginRequest request);

}