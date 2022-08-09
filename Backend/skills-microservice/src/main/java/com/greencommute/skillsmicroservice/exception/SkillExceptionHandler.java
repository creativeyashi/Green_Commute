package com.greencommute.skillsmicroservice.exception;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

@ControllerAdvice
public class SkillExceptionHandler {

    @ExceptionHandler
    public ResponseEntity<SkillErrorResponse> skillNotFoundExceptionHandler(SkillNotFoundException skillNotFoundException){
        SkillErrorResponse error = new SkillErrorResponse();

        error.setStatusCode(400);
        error.setMessage(skillNotFoundException.getMessage());
        error.setTimeStamp(System.currentTimeMillis());

        return new ResponseEntity<>(error, HttpStatus.NOT_FOUND);
    }

    @ExceptionHandler
    public ResponseEntity<SkillErrorResponse> allExceptionHandler(Exception exception){
        SkillErrorResponse error = new SkillErrorResponse();

        error.setStatusCode(HttpStatus.BAD_REQUEST.value());
        error.setMessage(exception.getMessage());
        error.setTimeStamp(System.currentTimeMillis());

        return new ResponseEntity<>(error, HttpStatus.BAD_REQUEST);
    }
}
