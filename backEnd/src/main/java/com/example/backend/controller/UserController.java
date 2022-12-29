package com.example.backend.controller;

import com.example.backend.common.exception.CustomApiException;
import com.example.backend.dto.CMRespDto;
import com.example.backend.dto.user.request.RequestUserRegisterDto;
import com.example.backend.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@RestController
@RequiredArgsConstructor
@CrossOrigin(origins = {"*"})
@RequestMapping("/api/user")
public class UserController {

    private final UserService userService;
    @PostMapping("/register")
    public CMRespDto<?> register (@Valid @RequestBody RequestUserRegisterDto requestUserRegisterDto) {
        return new CMRespDto<>(200, "회원 가입", requestUserRegisterDto);
    }
}
