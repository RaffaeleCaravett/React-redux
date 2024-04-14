package com.example.blogs.exceptions;

import org.springframework.validation.ObjectError;

import java.util.List;

public class UnauthorizedException extends RuntimeException{
    private List<ObjectError> messages;

    public UnauthorizedException(String message){
        super(message);
    }

    public UnauthorizedException(List<ObjectError> message){
        this.messages=message;
    }
}
