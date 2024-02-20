

window.addEventListener("load", (event) => {

    let phoneNumber = "+1 256 222 487";
    let emailAddress = "herodev@gmail.com";
    let phone = document.querySelector("#phone-number");
    let email = document.querySelector("#email-address");
    let menu = document.querySelector("header nav ul.menu");
    let menuIcon = document.querySelector("header nav .menu-icon");
    let closeMenu = document.querySelector("header nav .close-icon");
    let showContact = document.querySelector("button#show-contact");
    let contactDetails = document.querySelector("div.contact-details ul");

    menuIcon.addEventListener("click", () => {
        menu.classList.add("open");
    });

    closeMenu.addEventListener("click", () => {
        menu.classList.remove("open");
    });

    showContact.addEventListener("click", () => {
        showContact.remove();
        phone.setAttribute("href", `tel:${phoneNumber}`);
        phone.innerText = `${phoneNumber}`;
        email.setAttribute("href", `mailto:${emailAddress}`);
        email.innerText = `${emailAddress}`;
        contactDetails.classList.add("show");
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


