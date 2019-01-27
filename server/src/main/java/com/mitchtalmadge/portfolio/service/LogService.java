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

package com.mitchtalmadge.portfolio.service;

import com.mindscapehq.raygun4java.core.RaygunClient;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
@Scope("prototype")
public class LogService {

    /**
     * The logger being used for this application.
     */
    private Logger LOGGER = LoggerFactory.getLogger(LogService.class);

    /**
     * The Raygun API Key, for reporting exceptions to Raygun.
     */
    private static final String RAYGUN_API_KEY = System.getenv("RAYGUN_APIKEY");

    /**
     * The Raygun client, generated using the RAYGUN_API_KEY.
     */
    private static final RaygunClient RAYGUN_CLIENT = RAYGUN_API_KEY != null ? new RaygunClient(RAYGUN_API_KEY) : null;

    private final SpringProfileService springProfileService;

    @Autowired
    public LogService(SpringProfileService springProfileService) {
        this.springProfileService = springProfileService;
    }

    /**
     * Logs an info message to the console.
     *
     * @param clazz   The class that invoked the info message, for logging purposes.
     * @param message The message to log.
     */
    public void logInfo(Class clazz, String message) {
        LOGGER.info("[" + clazz.getSimpleName() + "] " + message);
    }

    /**
     * Logs an error message to the console.
     *
     * @param clazz   The class that invoked the error message, for logging purposes.
     * @param message The message to log.
     */
    public void logError(Class clazz, String message) {
        LOGGER.error("[" + clazz.getSimpleName() + "] " + message);
    }

    /**
     * Logs an exception and message to the console, and sends the exception to Raygun.
     *
     * @param clazz   The class that is reporting the exception, for logging purposes.
     * @param t       The throwable that is being reported.
     * @param message The message to log.
     */
    public void logException(Class clazz, Throwable t, String message) {
        // Remove trailing periods.
        if (message.endsWith("."))
            message = message.substring(0, message.length() - 2);

        // Log message.
        LOGGER.error("[" + clazz.getSimpleName() + "] " + message, t);
        if (RAYGUN_CLIENT != null && springProfileService.isProfileActive(SpringProfileService.Profile.PRODUCTION)) {
            List<String> tags = new ArrayList<>();

            // TODO: Add the version number.

            // Add the class name.
            tags.add(clazz.getSimpleName());

            // Add the message as data.
            Map<String, String> data = new HashMap<>();
            data.put("message", message);

            // Send the error to Raygun.
            RAYGUN_CLIENT.Send(t, tags, data);
        }
    }

    /**
     * Logs a debug message to the console.
     *
     * @param clazz   The class that invoked the debug message, for logging purposes.
     * @param message The message to log.
     */
    public void logDebug(Class clazz, String message) {
        LOGGER.debug("[" + clazz.getSimpleName() + "] " + message);
    }

}
