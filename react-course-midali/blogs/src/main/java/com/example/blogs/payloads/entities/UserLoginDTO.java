package com.example.blogs.payloads.entities;

import jakarta.validation.constraints.NotEmpty;

public record UserLoginDTO(
        @NotEmpty(message = "Email required")
        String email,
        @NotEmpty(message = "Password required")
        String password
) {
}
