package com.example.backend.service;

import com.example.backend.common.exception.CustomApiException;
import com.example.backend.domain.User;
import com.example.backend.dto.DataMap;
import com.example.backend.dto.ResponseMap;
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

    @Transactional(readOnly = false) // 로그인뿐만 아니라 회원가입일수도 있기때문 false
    public ResponseMap snsLogin (RequestUserRegisterDto requestUserRegisterDto) {
        ResponseMap responseMap = new ResponseMap();
        User user = userRepositorySupport.userEmailDoubleCheck(requestUserRegisterDto.getEmail());
        if (user == null) { // 같은 이메일로 가입한 회원이 없다면 (= sns로 첫 로그인 이라는 뜻)
            user = userRepository.save(requestUserRegisterDto.toEntity()); // 가입 진행
            responseMap.setHttpStatus(HttpStatus.OK);
            responseMap.setMessage("회원가입이 완료되었습니다");
            return responseMap;
        } else {
            if (user.getProvider().isBlank()) { // sns 로 가입한 이력이 없다면
                throw new CustomApiException("일반 이메일회원입니다.\n연동하시겠습니까?.", HttpStatus.SEE_OTHER); // 일반회원으로 가입한 경로가 존재함
            } else {
                user.setProvider(requestUserRegisterDto.getProvider()); // sns의 가입경로를 바꿔준다
                user.setProviderId(requestUserRegisterDto.getProviderId()); // sns의 고유 번호를 바꿔준다.

                responseMap.setHttpStatus(HttpStatus.OK);
                responseMap.setMessage("로그인 완료");
                return responseMap;
            }
        }
    }

    @Transactional(readOnly = false) // 로그인뿐만 아니라 회원가입일수도 있기때문 false
    public ResponseMap updateProvider (RequestUserRegisterDto requestUserRegisterDto) {
        User user = userRepositorySupport.userEmailDoubleCheck(requestUserRegisterDto.getEmail());
        user.setProvider(requestUserRegisterDto.getProvider());
        user.setProviderId(requestUserRegisterDto.getProviderId());
        ResponseMap responseMap = new ResponseMap();
        responseMap.setHttpStatus(HttpStatus.OK);
        responseMap.setMessage("연동되었습니다.");
        return responseMap;
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
