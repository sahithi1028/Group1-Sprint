package com.Group5.Sprint1.Exceptions;

public class TournamentAlreadyExistsException extends RuntimeException{
    public TournamentAlreadyExistsException(String message)
    {
        super(message);
    }
}
