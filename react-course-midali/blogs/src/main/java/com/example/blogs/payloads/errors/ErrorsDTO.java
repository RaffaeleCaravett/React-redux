package com.example.blogs.payloads.errors;

import jakarta.validation.constraints.NotEmpty;

import java.util.Date;

public record ErrorsDTO(
        @NotEmpty(message = "Message empty")
        String message,
        Date date
) {
}
