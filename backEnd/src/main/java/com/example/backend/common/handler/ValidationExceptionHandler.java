package com.example.backend.common.handler;

import com.example.backend.dto.CMRespDto;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.method.annotation.MethodArgumentConversionNotSupportedException;
import org.springframework.web.method.annotation.MethodArgumentTypeMismatchException;

@ControllerAdvice
@RequiredArgsConstructor
public class ValidationExceptionHandler {

    @ExceptionHandler(MethodArgumentNotValidException.class)
    public ResponseEntity<?> validationApiException(MethodArgumentNotValidException e) {
        return new ResponseEntity<>(
                new CMRespDto<>(
                        HttpStatus.BAD_REQUEST.value(),
                        e.getBindingResult().getAllErrors().get(0).getDefaultMessage(),
                        null),
                HttpStatus.BAD_REQUEST);
    }

}
