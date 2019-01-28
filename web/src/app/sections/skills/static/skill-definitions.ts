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

/**
 * This array contains the titles and images for each skill.
 * The description is extracted from the xml file,
 * using the title here as the tag (in lowercase).
 */
const skills: Array<{ title: string, image: string, description?: string }> = [
    {
        title: "Java",
        image: require("./images/Java.svg"),
    },
    {
        title: "Android",
        image: require("./images/Android.svg"),
    },
    {
        title: "Linux",
        image: require("./images/Linux.svg"),
    },
    {
        title: "PHP",
        image: require("./images/PHP.svg"),
    },
    {
        title: "MySQL",
        image: require("./images/MySQL.svg"),
    },
    {
        title: "WordPress",
        image: require("./images/WordPress.svg"),
    },
    {
        title: "Autodesk",
        image: require("./images/Autodesk.svg"),
    },
    {
        title: "Adobe",
        image: require("./images/Adobe.svg"),
    },
];

/**
 * This xml file contains descriptions of skills.
 */
const descriptions: string = require("./skill-descriptions.html");

/**
 * Compiles and returns an array of skills,
 * each containing their titles, images, and descriptions.
 */
export const getSkills = () => {
    const descriptionsElement = document.createElement("div");
    descriptionsElement.innerHTML = descriptions;

    // Populate skills variable with descriptions from file.
    for (const skill of skills) {
        skill.description = descriptionsElement.getElementsByClassName(skill.title.toLowerCase())[0].innerHTML;
    }

    return skills;
};
