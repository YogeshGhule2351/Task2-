const themeButton =
    document.getElementById("theme-toggle");

const html =
    document.documentElement;


themeButton.addEventListener("click", function () {

    const currentTheme =
        html.getAttribute("data-theme");

    if (currentTheme === "dark") {

        html.removeAttribute("data-theme");

        themeButton.textContent =
            "🌙 Dark Mode";

    } else {

        html.setAttribute(
            "data-theme",
            "dark"
        );

        themeButton.textContent =
            "☀️ Light Mode";
    }

});