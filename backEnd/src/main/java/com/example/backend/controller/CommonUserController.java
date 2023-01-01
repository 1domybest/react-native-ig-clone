package com.example.backend.controller;

import com.example.backend.dto.CMRespDto;
import com.example.backend.dto.ResponseMap;
import com.example.backend.dto.user.request.RequestUserEmailDoubleCheckDto;
import com.example.backend.dto.user.request.RequestUserRegisterDto;
import com.example.backend.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.validation.Valid;

@RestController
@RequiredArgsConstructor
@CrossOrigin(origins = {"*"})
@RequestMapping("/api/common/user")
public class CommonUserController {

    private final UserService userService;

    /**
     * 일반 회원가입
     * @param requestUserRegisterDto
     * @return
     */
    @PostMapping("/register")
    public CMRespDto<?> register (@Valid @RequestBody RequestUserRegisterDto requestUserRegisterDto, HttpServletRequest request, HttpServletResponse response) {
        return new CMRespDto<>(200, "회원가입이 완료되었습니다.", userService.register(requestUserRegisterDto, request, response));
    }

    /**
     * 아이디 중복체크
     * @param requestUserRegisterDto
     * @return
     */
    @PostMapping("/userEmailDoubleCheck")
    public CMRespDto<?> userEmailDoubleCheck (@Valid @RequestBody RequestUserEmailDoubleCheckDto requestUserRegisterDto) {
        return new CMRespDto<>(200, "사용 가능한 이메일 입니다.", userService.userEmailDoubleCheck(requestUserRegisterDto));
    }

    /**
     * 소셜 로그인
     * @param requestUserRegisterDto
     * @return
     */
    @PostMapping("/snsLogin")
    public CMRespDto<?> snsLogin (@Valid @RequestBody RequestUserRegisterDto requestUserRegisterDto, HttpServletRequest request, HttpServletResponse response) {
        ResponseMap responseMap = userService.snsLogin(requestUserRegisterDto, request, response);
        return new CMRespDto<>(responseMap.getHttpStatus().value(), responseMap.getMessage(), null);
    }

    /**
     * 소셜 로그인 연동
     * @param requestUserRegisterDto
     * @return
     */
    @PostMapping("/updateProvider")
    public CMRespDto<?> updateProvider (@Valid @RequestBody RequestUserRegisterDto requestUserRegisterDto) {
        ResponseMap responseMap = userService.updateProvider(requestUserRegisterDto);
        return new CMRespDto<>(responseMap.getHttpStatus().value(), responseMap.getMessage(), null);
    }
}
