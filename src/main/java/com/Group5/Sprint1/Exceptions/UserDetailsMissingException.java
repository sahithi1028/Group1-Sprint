package com.Group5.Sprint1.Exceptions;

public class UserDetailsMissingException extends RuntimeException{
    public UserDetailsMissingException(String message)
    {
        super(message);
    }
}
