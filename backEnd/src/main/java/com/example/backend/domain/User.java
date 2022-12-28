package com.example.backend.domain;

import com.sun.istack.NotNull;
import lombok.*;

import javax.persistence.*;
import java.time.LocalDate;
import java.time.LocalDateTime;

@Entity
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@AllArgsConstructor
@Data
@Builder
@Table(name = "user")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "userNo")
    private Long no; // pk

    private String userName; // 이름

    private String nickName;

    private String email; // 이메일

    private String provider; // 로그인한 sns 브랜드명 예) google

    private String providerId; // 로그인한 sns의 회원 고유번호 예)asdAKSDJjwndjicIAI2314

    private String phone;

    private LocalDateTime regDate;


    @PrePersist
    public void regDate() {
        this.regDate = LocalDateTime.now();
        this.nickName = this.userName;
    }
}