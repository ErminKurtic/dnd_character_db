package com.arbetsprov.backend.exception;

public class UserNotFoundException extends RuntimeException{
    public UserNotFoundException(Long id){
        super("Could not find the character with id " + id);
    }
}
