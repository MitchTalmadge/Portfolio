/*
 * Copyright (C) 2016 - 2017 AptiTekk, LLC. (https://AptiTekk.com/) - All Rights Reserved
 * Unauthorized copying of any part of AptiLink, via any medium, is strictly prohibited.
 * Proprietary and confidential.
 */

package com.mitchtalmadge.portfolio.web.api;

import org.modelmapper.ModelMapper;

public abstract class APIControllerAbstract {

    protected ModelMapper modelMapper = new ModelMapper();

    public APIControllerAbstract() {
        modelMapper.getConfiguration().setFieldMatchingEnabled(true);
    }

}
