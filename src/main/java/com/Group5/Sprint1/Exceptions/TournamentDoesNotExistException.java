package com.Group5.Sprint1.Exceptions;

public class TournamentDoesNotExistException extends RuntimeException{
    public TournamentDoesNotExistException(String message)
    {
        super(message);
    }
}