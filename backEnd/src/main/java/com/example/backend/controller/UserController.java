package com.example.backend.controller;

import com.example.backend.dto.CMRespDto;
import com.example.backend.dto.user.request.RequestUserRegisterDto;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@RestController
@RequiredArgsConstructor
@CrossOrigin(origins = {"*"})
@RequestMapping("/api/user")
public class UserController {

    @PostMapping("/register")
    public CMRespDto<?> register (@Valid @RequestBody RequestUserRegisterDto requestUserRegisterDto) {
        System.out.printf("들어옴");
        return new CMRespDto<>(200, "정상처리", null);
    }
}
