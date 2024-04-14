package com.example.blogs.payloads.entities;

import jakarta.validation.constraints.NotEmpty;

public record UserLoginSuccessDTO(
        @NotEmpty(message = "Token List vuota")
        Tokens token
) {
}
