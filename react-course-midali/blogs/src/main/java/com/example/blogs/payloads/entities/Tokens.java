package com.example.blogs.payloads.entities;

import jakarta.validation.constraints.NotEmpty;

public record Tokens(
        @NotEmpty(message = "Access Token required")
        String accessToken,
        String refreshToken
) {
}
