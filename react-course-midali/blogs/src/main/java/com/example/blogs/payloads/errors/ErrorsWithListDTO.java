package com.example.blogs.payloads.errors;

import jakarta.validation.constraints.NotEmpty;

import java.util.Date;
import java.util.List;

public record ErrorsWithListDTO(
        @NotEmpty(message = "Message empty")
        String message,
        Date date,
        @NotEmpty(message = "List empty")
        List<String> messages
) {
}
