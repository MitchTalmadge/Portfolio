/*
 * Copyright (C) 2016 - 2017 AptiTekk, LLC. (https://AptiTekk.com/) - All Rights Reserved
 * Unauthorized copying of any part of AptiLink, via any medium, is strictly prohibited.
 * Proprietary and confidential.
 */

package com.mitchtalmadge.portfolio.web.security;

import com.mitchtalmadge.portfolio.web.security.csrf.CSRFCookieFilter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.security.SecurityProperties;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.annotation.Order;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.web.csrf.CsrfFilter;
import org.springframework.security.web.csrf.CsrfTokenRepository;
import org.springframework.security.web.csrf.HttpSessionCsrfTokenRepository;

@Configuration
@Order(SecurityProperties.ACCESS_OVERRIDE_ORDER)
public class SecurityConfiguration extends WebSecurityConfigurerAdapter {

    private final APIAuthenticationEntryPoint apiAuthenticationEntryPoint;
    private final CSRFCookieFilter csrfCookieFilter;

    @Autowired
    public SecurityConfiguration(APIAuthenticationEntryPoint apiAuthenticationEntryPoint,
                                 CSRFCookieFilter csrfCookieFilter) {
        this.apiAuthenticationEntryPoint = apiAuthenticationEntryPoint;
        this.csrfCookieFilter = csrfCookieFilter;
    }

    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http
                // Add the CSRF Cookie Filter
                .addFilterAfter(csrfCookieFilter, CsrfFilter.class)

                // Permit all endpoints.
                .authorizeRequests()
                .anyRequest().permitAll()
                .and()

                // Disable form login.
                .formLogin()
                .disable()

                // Disable logout endpoint.
                .logout()
                .disable()

                // Disable HTTP Basic authentication
                .httpBasic()
                .disable()

                // Enable CSRF (Cross Site Request Forgery).
                .csrf()
                .csrfTokenRepository(generateCSRFTokenRepository())
                .and()

                // Define behavior when an unauthenticated user accesses a secured endpoint.
                .exceptionHandling()
                .authenticationEntryPoint(apiAuthenticationEntryPoint);
    }

    @Bean
    @Override
    public AuthenticationManager authenticationManagerBean() throws Exception {
        return super.authenticationManagerBean();
    }

    /**
     * Generates a CSRF Token Repository with a modified header to fit Angular (and other framework) conventions.
     *
     * @return The CSRF Token Repository.
     */
    private CsrfTokenRepository generateCSRFTokenRepository() {
        HttpSessionCsrfTokenRepository tokenRepository = new HttpSessionCsrfTokenRepository();
        tokenRepository.setHeaderName("X-XSRF-TOKEN");
        return tokenRepository;
    }

}
