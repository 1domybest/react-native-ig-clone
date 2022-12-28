package com.example.backend.common.aop;

import org.aspectj.lang.ProceedingJoinPoint;
import org.aspectj.lang.annotation.Around;
import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Pointcut;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.context.annotation.Bean;
import org.springframework.stereotype.Component;
import org.springframework.web.context.request.RequestContextHolder;
import org.springframework.web.context.request.RequestContextListener;
import org.springframework.web.context.request.ServletRequestAttributes;

import javax.servlet.http.HttpServletRequest;

@Component
@Aspect
public class ValidationAdvice {

    private static final Logger logger = LoggerFactory.getLogger(ValidationAdvice.class);

    @Bean
    public RequestContextListener requestContextListener(){    return new RequestContextListener();}

    @Pointcut("within(com.example.backend.controller..*)")
    public void onRequest() {
    }

    @Around("com.example.backend.common.aop.ValidationAdvice.onRequest()")
    public Object requestLogging(ProceedingJoinPoint proceedingJoinPoint) throws Throwable {
        HttpServletRequest request = null;
        try {
            request = ((ServletRequestAttributes) RequestContextHolder.currentRequestAttributes()).getRequest();
        } catch (IllegalStateException e) {
            return proceedingJoinPoint.proceed(proceedingJoinPoint.getArgs());
        }
        long start = System.currentTimeMillis();
        try {
            return proceedingJoinPoint.proceed(proceedingJoinPoint.getArgs());
        } finally {
            long end = System.currentTimeMillis();
            logger.info("Request: {} {}: ({}ms)", request.getMethod(), request.getRequestURL(), end - start);
        }
    }


}
