/*
 * Copyright (C) 2016 AptiTekk, LLC. (https://AptiTekk.com/) - All Rights Reserved
 * Unauthorized copying of any part of AptiBook, via any medium, is strictly prohibited.
 * Proprietary and confidential.
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
