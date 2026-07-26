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
        SecurityFilterChain securityFilterChain(HttpSecurity http)
                        throws Exception {

                http
                                .csrf(csrf -> csrf.disable())

                                .sessionManagement(session -> session.sessionCreationPolicy(
                                                SessionCreationPolicy.STATELESS))

                                .authorizeHttpRequests(auth -> auth

                                                // Public APIs
                                                .requestMatchers("/api/auth/**").permitAll()

                                                // Anyone can view jobs
                                                .requestMatchers(HttpMethod.GET, "/api/jobs/**").permitAll()

                                                // Logged-in users can create/update/delete
                                                .requestMatchers(HttpMethod.POST, "/api/jobs/**").authenticated()
                                                .requestMatchers(HttpMethod.PUT, "/api/jobs/**").authenticated()
                                                .requestMatchers(HttpMethod.DELETE, "/api/jobs/**").authenticated()

                                                .anyRequest().authenticated()

                                )

                                .authenticationProvider(authenticationProvider())

                                .addFilterBefore(
                                                jwtAuthenticationFilter,
                                                UsernamePasswordAuthenticationFilter.class)

                                .httpBasic(Customizer.withDefaults());

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