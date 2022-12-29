package com.example.backend.service;

import com.example.backend.common.exception.CustomApiException;
import com.example.backend.domain.User;
import com.example.backend.dto.user.request.RequestUserEmailDoubleCheckDto;
import com.example.backend.dto.user.request.RequestUserRegisterDto;
import com.example.backend.repository.user.UserRepository;
import com.example.backend.repository.user.UserRepositorySupport;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
public class UserService {

    private final UserRepository userRepository;
    private final UserRepositorySupport userRepositorySupport;

    @Transactional(readOnly = false)
    public boolean register (RequestUserRegisterDto requestUserRegisterDto) {
        User user = requestUserRegisterDto.toEntity();
        User newUser = userRepository.save(user);
        if (newUser != null) {
            return true;
        } else {
            throw new CustomApiException("회원가입에 실패하였습니다.\n고객 센터에 문의해주세요.", HttpStatus.BAD_REQUEST);
        }
    }


    @Transactional(readOnly = true)
    public Boolean userEmailDoubleCheck (RequestUserEmailDoubleCheckDto requestUserRegisterDto) {
        User user = userRepositorySupport.userEmailDoubleCheck(requestUserRegisterDto.getEmail());
        if (user != null) {
            throw new CustomApiException("이미 사용중인 아이디 입니다.", HttpStatus.BAD_REQUEST);
        } else {
            return true;
        }
    }
}
