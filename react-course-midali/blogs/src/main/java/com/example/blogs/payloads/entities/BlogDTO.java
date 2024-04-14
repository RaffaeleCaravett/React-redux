package com.example.blogs.payloads.entities;

import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.NotNull;

public record BlogDTO(
        @NotEmpty(message = "Text is empty")
        String testo,
        @NotEmpty(message = "Categoria is empty")
        String categoria,
         @NotEmpty(message = "Missing author")
        String autore,
        @NotEmpty(message = "Title is empty")
        String titolo,
        @NotNull(message = "Reading time is empty")
        int tempoLettura,
        @NotNull(message = "User id is empty")
        long user_id
) {
}
