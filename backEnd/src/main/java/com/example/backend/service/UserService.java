package com.example.backend.service;

import com.example.backend.common.exception.CustomApiException;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    public void register () {
        throw new CustomApiException("에러발생", HttpStatus.BAD_REQUEST);
    }
}
