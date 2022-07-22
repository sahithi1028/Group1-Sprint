package com.Group5.Sprint1.Models;

public class JWTresponse {
    String Token;

    public String getToken() {
        return Token;
    }

    public void setToken(String token) {
        Token = token;
    }

    public JWTresponse(String token) {
        Token = token;
    }

    public JWTresponse() {
    }

}
