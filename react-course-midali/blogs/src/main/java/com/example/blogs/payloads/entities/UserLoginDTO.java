package com.example.blogs.payloads.entities;

import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.Pattern;

public record UserLoginDTO(
        @NotEmpty(message = "Email required")
        @Pattern(regexp = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$",
                message = "Inserisci una email tipo : a@a.com")
        String email,
        @NotEmpty(message = "Password required")
        String password
) {
}
