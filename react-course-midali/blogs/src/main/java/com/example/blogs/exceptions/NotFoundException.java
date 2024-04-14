package com.example.blogs.exceptions;

import org.springframework.validation.ObjectError;

import java.util.List;

public class NotFoundException extends RuntimeException{
    private List<ObjectError> messages;

    public NotFoundException(String message){
        super(message);
    }

    public NotFoundException(List<ObjectError> message){
        this.messages=message;
    }
}
