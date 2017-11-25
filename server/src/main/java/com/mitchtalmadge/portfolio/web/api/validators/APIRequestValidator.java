/*
 * Copyright (C) 2016 - 2017 AptiTekk, LLC. (https://AptiTekk.com/) - All Rights Reserved
 * Unauthorized copying of any part of AptiLink, via any medium, is strictly prohibited.
 * Proprietary and confidential.
 */

package com.mitchtalmadge.portfolio.web.api.validators;

import com.mitchtalmadge.portfolio.web.api.APIResponse;

import java.util.regex.Pattern;

@SuppressWarnings("SpringAutowiredFieldsWarningInspection")
public abstract class APIRequestValidator {

    static final String USER_INPUT_INVALID_CHARACTERS = "< > ; =";
    private static final Pattern USER_INPUT_VALIDITY_PATTERN = Pattern.compile("[^<>;=]*");

    /**
     * Determines if the User Input is valid and does not contain bad characters.
     *
     * @param input The User Input to test.
     * @return True if the input is valid (OK).
     */
    static boolean isUserInputValid(String input) {
        return USER_INPUT_VALIDITY_PATTERN.matcher(input).matches();
    }

    /**
     * Determines if the input is not too long.
     *
     * @param input     The input.
     * @param maxLength The maximum length of the input.
     * @return True if input's length is <= maxLength.
     */
    static boolean isLengthValid(String input, int maxLength) {
        return input.length() <= maxLength;
    }

    public static class ValidationException extends RuntimeException {

        private final APIResponse apiResponse;

        ValidationException(APIResponse apiResponse) {
            super(apiResponse.toString());
            this.apiResponse = apiResponse;
        }

        public APIResponse getApiResponse() {
            return apiResponse;
        }

    }
}
