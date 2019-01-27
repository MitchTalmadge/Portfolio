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

package com.mitchtalmadge.portfolio.web;

import com.fasterxml.jackson.databind.exc.InvalidFormatException;
import com.mitchtalmadge.portfolio.service.LogService;
import com.mitchtalmadge.portfolio.service.SpringProfileService;
import com.mitchtalmadge.portfolio.web.api.APIResponse;
import com.mitchtalmadge.portfolio.web.api.validators.APIRequestValidator;
import org.apache.catalina.connector.ClientAbortException;
import org.modelmapper.MappingException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.Resource;
import org.springframework.core.io.ResourceLoader;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.http.converter.HttpMessageNotReadableException;
import org.springframework.web.HttpMediaTypeNotSupportedException;
import org.springframework.web.HttpRequestMethodNotSupportedException;
import org.springframework.web.bind.MissingServletRequestParameterException;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.context.request.WebRequest;
import org.springframework.web.method.annotation.MethodArgumentTypeMismatchException;
import org.springframework.web.servlet.NoHandlerFoundException;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

@ControllerAdvice
public class WebExceptionHandler extends ResponseEntityExceptionHandler {

    private final ResourceLoader resourceLoader;
    private final SpringProfileService springProfileService;
    private final LogService logService;

    @Autowired
    public WebExceptionHandler(ResourceLoader resourceLoader,
                               SpringProfileService springProfileService,
                               LogService logService) {
        this.resourceLoader = resourceLoader;
        this.springProfileService = springProfileService;
        this.logService = logService;
    }

    @Override
    protected ResponseEntity<Object> handleNoHandlerFoundException(NoHandlerFoundException ex, HttpHeaders headers, HttpStatus status, WebRequest request) {
        if (ex.getRequestURL().startsWith("/api"))
            // For API calls, send a not found error.
            return APIResponse.statusNotFound("The resource you have tried to access could not be found.");
        else {
            // Load the requested resource.
            Resource resource = this.resourceLoader.getResource("classpath:static" + ex.getRequestURL());

            // If it doesn't exist, load index.html
            if (!resource.exists() || ex.getRequestURL().equals("/")) {
                resource = this.resourceLoader.getResource("classpath:static/index.html");

                // If index.html doesn't exist, something is wrong internally.
                if (!resource.exists())
                    return APIResponse.statusInternalServerError();
            }

            // Send the resource.
            return new ResponseEntity<>(resource, HttpStatus.OK);
        }
    }

    @Override
    protected ResponseEntity<Object> handleHttpMessageNotReadable(HttpMessageNotReadableException ex, HttpHeaders headers, HttpStatus status, WebRequest request) {
        if (ex.getCause() instanceof InvalidFormatException)
            return handleInvalidFormatException((InvalidFormatException) ex.getCause());

        logService.logException(getClass(), ex, "Could not parse HTTP message");
        return APIResponse.statusBadRequestNotParsable("The request could not be parsed.");
    }

    @ExceptionHandler(InvalidFormatException.class)
    protected APIResponse handleInvalidFormatException(InvalidFormatException ex) {
        return APIResponse.statusBadRequestNotParsable("Could not parse value: " + ex.getValue());
    }

    @ExceptionHandler(MappingException.class)
    protected APIResponse handleModelMappingException(MappingException ex) {
        logService.logException(getClass(), ex, "An error occurred while mapping an object to a DTO");
        return APIResponse.statusInternalServerError();
    }

    @ExceptionHandler(IllegalArgumentException.class)
    protected APIResponse handleIllegalArgumentException(IllegalArgumentException ex) {
        logService.logException(getClass(), ex, "An error occurred while processing an endpoint request");
        return APIResponse.statusInternalServerError();
    }

    @ExceptionHandler(APIRequestValidator.ValidationException.class)
    protected ResponseEntity<?> handleAPIRequestValidationException(APIRequestValidator.ValidationException ex) {
        return ex.getApiResponse();
    }

    @Override
    protected ResponseEntity<Object> handleHttpMediaTypeNotSupported(HttpMediaTypeNotSupportedException ex, HttpHeaders headers, HttpStatus status, WebRequest request) {
        return APIResponse.statusUnsupportedMediaType(ex.getContentType());
    }

    @ExceptionHandler(MethodArgumentTypeMismatchException.class)
    protected APIResponse handleMethodArgumentTypeMismatchException(MethodArgumentTypeMismatchException ex) {
        return APIResponse.statusBadRequest("invalid_path_variable", "The passed in value for the '" + ex.getName() + "' path variable is not valid.");
    }

    @ExceptionHandler(ClientAbortException.class)
    protected void handleClientAbortException(ClientAbortException e) {
        logService.logError(getClass(), "A client connection was aborted: " + e.getMessage());
    }

    @Override
    protected ResponseEntity<Object> handleMissingServletRequestParameter(MissingServletRequestParameterException ex, HttpHeaders headers, HttpStatus status, WebRequest request) {
        return APIResponse.statusBadRequest("missing_parameter", "The request parameter '" + ex.getParameterName() + "' was not supplied.");
    }

    @Override
    protected ResponseEntity<Object> handleExceptionInternal(Exception ex, Object body, HttpHeaders headers, HttpStatus status, WebRequest request) {
        if (ex instanceof HttpRequestMethodNotSupportedException) {
            return APIResponse.statusMethodNotAllowed(((HttpRequestMethodNotSupportedException) ex).getMethod());
        }
        logService.logException(getClass(), ex, "An error occurred while processing an endpoint request");
        return APIResponse.statusInternalServerError();
    }
}
