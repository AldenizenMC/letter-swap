const lightToggle = document.getElementById("light-toggle");
const themeIcon = document.getElementById("theme-icon");

setTheme(localStorage.lightMode || false, true);

document.addEventListener("DOMContentLoaded", () => {
    lightToggle.addEventListener("change", () => {
        setTheme(lightToggle.checked ?? false);
    });
});

/**
 *
 * @param {boolean|string} light Light theme?
 * @param {boolean} light
 */
function setTheme(light, initialCall = false) {
    console.log(light);
    if (light === true || light === "true") {
        // document.body.classList.add("light-mode");
        if (initialCall) lightToggle.checked = true;
        localStorage.lightMode = "true";
        themeIcon.setAttribute("class", "fa-solid fa-sun fa-lg");
        document.body.style.setProperty(
            "--background-color",
            "var(--l-bg-color)"
        );
        document.body.style.setProperty(
            "--background-color-input",
            "var(--l-bg-color-input)"
        );
        document.body.style.setProperty(
            "--foreground-color",
            "var(--l-fg-color)"
        );
        document.body.style.setProperty("--primary-color", "var(--l-p-color)");
    } else {
        // document.body.classList.remove("light-mode");
        if (initialCall) lightToggle.checked = false;
        localStorage.lightMode = "false";
        themeIcon.setAttribute("class", "fa-solid fa-moon fa-lg");
        document.body.style.setProperty(
            "--background-color",
            "var(--bg-color)"
        );
        document.body.style.setProperty(
            "--background-color-input",
            "var(--bg-color-input)"
        );
        document.body.style.setProperty(
            "--foreground-color",
            "var(--fg-color)"
        );
        document.body.style.setProperty("--primary-color", "var(--p-color)");
    }
}

export { setTheme };
