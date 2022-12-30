package com.example.backend.dto;

import lombok.Data;
import org.springframework.http.HttpStatus;

@Data
public class ResponseMap {

    private String message;

    private HttpStatus httpStatus;

    private Class<?> data;
}
