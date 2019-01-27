/*
 * Mitch Talmadge's Web Portfolio
 * Copyright (C) 2019 Mitch Talmadge
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <https://www.gnu.org/licenses/>.
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
