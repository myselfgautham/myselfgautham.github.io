let isDarkMode = false;
function toggleTheme() {
    let themeToggle = document.getElementById("themeSwitch");
    if (themeToggle.classList.toggle("theme-toggle--toggled")) {
        themeToggle.setAttribute("title", "Dark Mode")
        isDarkMode = false;
    } else {
        themeToggle.setAttribute("title", "Light Mode")
        isDarkMode = true;
    }
    document.documentElement.style.setProperty(
        "--backgroundBody",
        isDarkMode ? "#121212" : 'white'
    )
    document.documentElement.style.setProperty(
        "--textColor",
        isDarkMode ? "white" : 'black'
    )
}