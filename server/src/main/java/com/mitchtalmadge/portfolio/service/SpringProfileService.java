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

import org.springframework.beans.factory.annotation.Value;
import org.springframework.beans.factory.config.BeanDefinition;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Service;

import javax.annotation.PostConstruct;
import java.util.ArrayList;
import java.util.List;

@Service
@Scope(BeanDefinition.SCOPE_SINGLETON)
public class SpringProfileService {

    @Value("${spring.profiles.active:production}")
    private String activeProfilesString;

    private List<Profile> activeProfiles;

    public enum Profile {
        PRODUCTION("production"),
        DEV("development"),
        STAGING("staging"),
        TESTING("testing");

        private String profileName;

        Profile(String profileName) {
            this.profileName = profileName;
        }

        public String getProfileName() {
            return this.profileName;
        }

        public static Profile getProfileByName(String name) {
            for (Profile profile : values()) {
                if (profile.profileName.equals(name))
                    return profile;
            }
            return null;
        }
    }

    @PostConstruct
    private void init() {
        String[] springProfilesSplit = activeProfilesString.split(" ");
        activeProfiles = new ArrayList<>();

        for (String profileName : springProfilesSplit) {
            Profile profile = Profile.getProfileByName(profileName);
            if (profile != null)
                activeProfiles.add(profile);
        }
    }

    public boolean isProfileActive(Profile profile) {
        return profile != null && activeProfiles.contains(profile);
    }

}
