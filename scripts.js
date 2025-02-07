const headerLinks = document.querySelector(".header-links");
const links = document.querySelectorAll(".links");
const menuToggle = document.querySelector(".menu-toggle");
const menuOpen = document.querySelector(".menu-icon-open")
const menuClose = document.querySelector(".menu-icon-close")

menuToggle.addEventListener("click", () => {
    if (headerLinks.style.height !== "1000px") {
        headerLinks.style.height = "1000px"
        headerLinks.style.width = "400px"
        headerLinks.style.zIndex = "1"
        headerLinks.style.backgroundColor = "hsl(36, 100%, 99%)"
        menuOpen.style.display = "none"
        menuClose.style.display = "block"
        links.forEach((link) => {
            link.style.display = "flex"
        })
    } else {
        headerLinks.style.height = ""
        headerLinks.style.width = ""
        headerLinks.style.zIndex = ""
        menuClose.style.display = "none"
        menuOpen.style.display = "block"
        links.forEach((link) => {
            link.style.display = "none"
        })
    }
})