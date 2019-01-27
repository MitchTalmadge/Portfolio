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
