package com.Group5.Sprint1.Exceptions;

public class BidderExistsException extends RuntimeException{
    public BidderExistsException(String message)
    {
        super(message);
    }
}
