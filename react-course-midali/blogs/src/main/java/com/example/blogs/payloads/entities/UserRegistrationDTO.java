package com.example.blogs.payloads.entities;

import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.Pattern;

public record UserRegistrationDTO(
        @NotEmpty(message = "Email required")
        @Pattern(regexp = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")
        String email,
        @NotEmpty(message = "Password required")
        String password,
        @NotEmpty(message = "Name required")
        String nome,
        @NotEmpty(message = "Surname required")
        String cognome
) {
}
