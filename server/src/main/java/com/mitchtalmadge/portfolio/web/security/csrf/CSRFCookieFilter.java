/*
 * Copyright (C) 2016 - 2017 AptiTekk, LLC. (https://AptiTekk.com/) - All Rights Reserved
 * Unauthorized copying of any part of AptiLink, via any medium, is strictly prohibited.
 * Proprietary and confidential.
 */

package com.mitchtalmadge.portfolio.web.security.csrf;

import org.springframework.security.web.csrf.CsrfToken;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;
import org.springframework.web.util.WebUtils;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

/**
 * Sends the CSRF Token as a cookie to the client.
 */
@Component
public class CSRFCookieFilter extends OncePerRequestFilter {

    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain) throws ServletException, IOException {
        // Get the CSRF Token that was generated
        CsrfToken csrf = (CsrfToken) request.getAttribute(CsrfToken.class.getName());

        // Make sure the token exists
        if (csrf != null && csrf.getToken() != null) {
            // Get the existing cookie, if it exists
            Cookie cookie = WebUtils.getCookie(request, "XSRF-TOKEN");

            String token = csrf.getToken();

            // Check if the cookie is empty or differs from our token.
            if (cookie == null || !token.equals(cookie.getValue())) {

                // Assign the token to a new cookie.
                cookie = new Cookie("XSRF-TOKEN", token);

                // Set the cookie's path to the base of the application.
                cookie.setPath("/");

                // Send the cookie to the user.
                response.addCookie(cookie);
            }
        }

        filterChain.doFilter(request, response);
    }

}
