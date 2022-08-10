package com.greencommute.jobmicroservice.exception;


public class JobNotFoundException extends RuntimeException {
    public JobNotFoundException(String message) {
        super(message);
    }
}