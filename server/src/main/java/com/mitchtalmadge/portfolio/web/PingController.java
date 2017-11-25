/*
 * Copyright (C) 2016 - 2017 AptiTekk, LLC. (https://AptiTekk.com/) - All Rights Reserved
 * Unauthorized copying of any part of AptiLink, via any medium, is strictly prohibited.
 * Proprietary and confidential.
 */

package com.mitchtalmadge.portfolio.web;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class PingController {

    @RequestMapping("ping")
    public String onPing() {
        return "pong";
    }

}
