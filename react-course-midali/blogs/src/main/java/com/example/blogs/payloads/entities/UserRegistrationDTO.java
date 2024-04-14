package com.example.blogs.payloads.entities;

import jakarta.validation.constraints.NotEmpty;

public record UserRegistrationDTO(
        @NotEmpty(message = "Email required")
        String email,
        @NotEmpty(message = "Password required")
        String password,
        @NotEmpty(message = "Name required")
        String nome,
        @NotEmpty(message = "Surname required")
        String cognome
) {
}
