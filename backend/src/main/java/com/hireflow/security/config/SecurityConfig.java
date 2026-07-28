package com.hireflow.security.config;

import com.hireflow.security.filter.JwtAuthenticationFilter;
import com.hireflow.security.service.CustomUserDetailsService;
import lombok.RequiredArgsConstructor;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.authentication.dao.DaoAuthenticationProvider;
import org.springframework.security.config.Customizer;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.http.HttpMethod;

@Configuration
@RequiredArgsConstructor
public class SecurityConfig {

        private final JwtAuthenticationFilter jwtAuthenticationFilter;

        private final CustomUserDetailsService userDetailsService;

        private final PasswordEncoder passwordEncoder;

        @Bean
        SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {

                http
                                .csrf(csrf -> csrf.disable())

                                .sessionManagement(session -> session
                                                .sessionCreationPolicy(SessionCreationPolicy.STATELESS))

                                .authorizeHttpRequests(auth -> auth

                                                // Swagger
                                                .requestMatchers(
                                                                "/swagger-ui/**",
                                                                "/swagger-ui.html",
                                                                "/v3/api-docs/**")
                                                .permitAll()

                                                // Public APIs
                                                .requestMatchers("/api/auth/**").permitAll()
                                                .requestMatchers("/api/health/**").permitAll()

                                                // Public Job APIs
                                                .requestMatchers(HttpMethod.GET, "/api/jobs/**").permitAll()

                                                // Protected APIs
                                                .requestMatchers(HttpMethod.POST, "/api/jobs/**").authenticated()
                                                .requestMatchers(HttpMethod.PUT, "/api/jobs/**").authenticated()
                                                .requestMatchers(HttpMethod.DELETE, "/api/jobs/**").authenticated()

                                                .requestMatchers("/api/resume/**").authenticated()
                                                .requestMatchers("/api/ai/**").authenticated()
                                                .requestMatchers("/api/job-match/**").authenticated()

                                                .anyRequest().authenticated())

                                .authenticationProvider(authenticationProvider())

                                .addFilterBefore(
                                                jwtAuthenticationFilter,
                                                UsernamePasswordAuthenticationFilter.class);

                return http.build();
        }

        @Bean
        AuthenticationProvider authenticationProvider() {

                DaoAuthenticationProvider provider = new DaoAuthenticationProvider();

                provider.setUserDetailsService(userDetailsService);

                provider.setPasswordEncoder(passwordEncoder);

                return provider;

        }

        @Bean
        AuthenticationManager authenticationManager(
                        AuthenticationConfiguration configuration)
                        throws Exception {

                return configuration.getAuthenticationManager();

        }

}