package com.example.backend.controller;

import com.example.backend.common.exception.CustomApiException;
import com.example.backend.dto.CMRespDto;
import com.example.backend.dto.ResponseMap;
import com.example.backend.dto.user.request.RequestUserEmailDoubleCheckDto;
import com.example.backend.dto.user.request.RequestUserRegisterDto;
import com.example.backend.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import javax.validation.constraints.Email;

@RestController
@RequiredArgsConstructor
@CrossOrigin(origins = {"*"})
@RequestMapping("/api/user")
public class UserController {

    private final UserService userService;
    @PostMapping("/register")
    public CMRespDto<?> register (@Valid @RequestBody RequestUserRegisterDto requestUserRegisterDto) {
        return new CMRespDto<>(200, "회원가입이 완료되었습니다.", userService.register(requestUserRegisterDto));
    }

    @PostMapping("/userEmailDoubleCheck")
    public CMRespDto<?> userEmailDoubleCheck (@Valid @RequestBody RequestUserEmailDoubleCheckDto requestUserRegisterDto) {
        return new CMRespDto<>(200, "사용 가능한 이메일 입니다.", userService.userEmailDoubleCheck(requestUserRegisterDto));
    }

    @PostMapping("/snsLogin")
    public CMRespDto<?> snsLogin (@Valid @RequestBody RequestUserRegisterDto requestUserRegisterDto) {
        ResponseMap responseMap = userService.snsLogin(requestUserRegisterDto);
        return new CMRespDto<>(responseMap.getHttpStatus().value(), responseMap.getMessage(), null);
    }

    @PostMapping("/updateProvider")
    public CMRespDto<?> updateProvider (@Valid @RequestBody RequestUserRegisterDto requestUserRegisterDto) {
        ResponseMap responseMap = userService.updateProvider(requestUserRegisterDto);
        return new CMRespDto<>(responseMap.getHttpStatus().value(), responseMap.getMessage(), null);
    }
}
