/*
 * Copyright (C) 2016 - 2017 AptiTekk, LLC. (https://AptiTekk.com/) - All Rights Reserved
 * Unauthorized copying of any part of AptiLink, via any medium, is strictly prohibited.
 * Proprietary and confidential.
 */

package com.mitchtalmadge.portfolio.web.security;

import com.mitchtalmadge.portfolio.web.api.APIResponse;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.web.AuthenticationEntryPoint;
import org.springframework.stereotype.Component;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

/**
 * Defines the behavior when an {@link AuthenticationException} is thrown
 * (usually from one of the Authentication Providers)
 */
@Component
public class APIAuthenticationEntryPoint implements AuthenticationEntryPoint {

    @Override
    public void commence(HttpServletRequest request, HttpServletResponse response, AuthenticationException authException) throws IOException, ServletException {
        String error = "unauthorized";
        if (authException instanceof BadCredentialsException)
            error = "bad_credentials";

        APIResponse.writeToResponse(APIResponse.statusUnauthorized(error, authException.getMessage()), response);
    }

}
