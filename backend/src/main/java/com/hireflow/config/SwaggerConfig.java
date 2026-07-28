package com.hireflow.config;

import io.swagger.v3.oas.models.Components;
import io.swagger.v3.oas.models.OpenAPI;
import io.swagger.v3.oas.models.info.Contact;
import io.swagger.v3.oas.models.info.Info;
import io.swagger.v3.oas.models.security.SecurityScheme;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class SwaggerConfig {

    @Bean
    public OpenAPI hireFlowOpenAPI() {

        return new OpenAPI()

                .info(new Info()

                        .title("HireFlow AI API")

                        .version("1.0")

                        .description("AI Powered Resume Screening & Job Matching System")

                        .contact(new Contact()

                                .name("Akshat Saxena")

                                .email("akshat0502@gmail.com")
                        )
                )

                .components(
                        new Components()
                                .addSecuritySchemes(
                                        "bearerAuth",
                                        new SecurityScheme()
                                                .type(SecurityScheme.Type.HTTP)
                                                .scheme("bearer")
                                                .bearerFormat("JWT")
                                )
                );

    }
}