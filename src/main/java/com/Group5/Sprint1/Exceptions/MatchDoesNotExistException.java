package com.Group5.Sprint1.Exceptions;

public class MatchDoesNotExistException extends RuntimeException{
    public MatchDoesNotExistException(String message)
    {
        super(message);
    }
}