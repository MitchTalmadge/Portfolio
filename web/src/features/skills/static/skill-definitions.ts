/**
 * This array contains the titles and images for each skill.
 * The description is extracted from the xml file,
 * using the title here as the tag (in lowercase).
 */
const skills: [{ title: string, image: string, description?: string }] = [
    {
        title: "Java",
        image: require("./images/Java.svg")
    },
    {
        title: "Android",
        image: require("./images/Android.svg")
    },
    {
        title: "Linux",
        image: require("./images/Linux.svg")
    },
    {
        title: "PHP",
        image: require("./images/PHP.svg")
    },
    {
        title: "MySQL",
        image: require("./images/MySQL.svg")
    },
    {
        title: "WordPress",
        image: require("./images/WordPress.svg")
    },
    {
        title: "Autodesk",
        image: require("./images/Autodesk.svg")
    },
    {
        title: "Adobe",
        image: require("./images/Adobe.svg")
    }
];

/**
 * This xml file contains descriptions of skills.
 */
const descriptions: string = require('./skill-descriptions.html');

/**
 * Compiles and returns an array of skills,
 * each containing their titles, images, and descriptions.
 */
export const getSkills = () => {
    let descriptionsElement = document.createElement("div");
    descriptionsElement.innerHTML = descriptions;

    // Populate skills variable with descriptions from file.
    for (let skill of skills) {
        console.log(descriptions);
        skill.description = descriptionsElement.getElementsByClassName(skill.title.toLowerCase())[0].innerHTML;
    }

    return skills;
};