

window.addEventListener("load", (event) => {

    let menu = document.querySelector("header nav ul.menu");
    let menuIcon = document.querySelector("header nav .menu-icon");
    let closeMenu = document.querySelector("header nav .close-icon");

    menuIcon.addEventListener("click", () => {
        menu.classList.add("open");
    });

    closeMenu.addEventListener("click", () => {
        menu.classList.remove("open");
    });

    document.querySelectorAll('.menu a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
    
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

});


