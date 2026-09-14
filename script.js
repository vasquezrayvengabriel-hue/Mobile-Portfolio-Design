/* =========================================
   RAYVEN GABRIEL VASQUEZ
   MOBILE PORTFOLIO - JAVASCRIPT
   ========================================= */


/* =========================================
   HAMBURGER NAVIGATION
   ========================================= */

const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

if (menuToggle && navMenu) {

    menuToggle.addEventListener("click", function () {

        navMenu.classList.toggle("active");

        menuToggle.classList.toggle("active");

    });

}


/* =========================================
   CLOSE MOBILE MENU WHEN LINK IS CLICKED
   ========================================= */

const navLinks = document.querySelectorAll("#navMenu a");

navLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        if (navMenu) {
            navMenu.classList.remove("active");
        }

        if (menuToggle) {
            menuToggle.classList.remove("active");
        }

    });

});


/* =========================================
   SMOOTH SCROLLING
   ========================================= */

document.querySelectorAll('a[href^="#"]').forEach(function (link) {

    link.addEventListener("click", function (event) {

        const targetId = this.getAttribute("href");

        if (targetId === "#" || targetId === "") {
            return;
        }

        const target = document.querySelector(targetId);

        if (target) {

            event.preventDefault();

            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        }

    });

});


/* =========================================
   ACTIVE NAVIGATION LINK
   ========================================= */

const sections = document.querySelectorAll("section[id]");

window.addEventListener("scroll", function () {

    let currentSection = "";

    sections.forEach(function (section) {

        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {
            currentSection = section.getAttribute("id");
        }

    });

    navLinks.forEach(function (link) {

        link.classList.remove("active");

        if (
            link.getAttribute("href") === "#" + currentSection
        ) {
            link.classList.add("active");
        }

    });

});


/* =========================================
   CONTACT / MESSAGE FORM
   ========================================= */

const messageForm = document.getElementById("messageForm");

if (messageForm) {

    messageForm.addEventListener("submit", function (event) {

        event.preventDefault();

        const name = document.getElementById("name");
        const email = document.getElementById("email");
        const message = document.getElementById("message");

        if (!name || !email || !message) {
            return;
        }

        const nameValue = name.value.trim();
        const emailValue = email.value.trim();
        const messageValue = message.value.trim();

        if (
            nameValue === "" ||
            emailValue === "" ||
            messageValue === ""
        ) {

            alert("Please complete all fields before sending your message.");

            return;

        }


        /* Basic email validation */

        const emailPattern =
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailPattern.test(emailValue)) {

            alert("Please enter a valid email address.");

            return;

        }


        /*
         * Opens the user's email application.
         * Replace the email address below with
         * your actual email address.
         */

        const receiverEmail = "your-email@example.com";

        const subject =
            encodeURIComponent(
                "Portfolio Message from " + nameValue
            );

        const body =
            encodeURIComponent(
                "Name: " + nameValue +
                "\nEmail: " + emailValue +
                "\n\nMessage:\n" + messageValue
            );

        window.location.href =
            "mailto:" +
            receiverEmail +
            "?subject=" +
            subject +
            "&body=" +
            body;


        /* Clear the form */

        messageForm.reset();

    });

}


/* =========================================
   CURRENT YEAR
   ========================================= */

const currentYear = document.getElementById("currentYear");

if (currentYear) {

    currentYear.textContent =
        new Date().getFullYear();

}


/* =========================================
   SCROLL-TO-TOP BUTTON
   ========================================= */

const scrollTopButton =
    document.getElementById("scrollTop");

if (scrollTopButton) {

    window.addEventListener("scroll", function () {

        if (window.scrollY > 400) {

            scrollTopButton.classList.add("show");

        } else {

            scrollTopButton.classList.remove("show");

        }

    });


    scrollTopButton.addEventListener("click", function () {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });

}


/* =========================================
   FADE-IN ANIMATION
   ========================================= */

const animatedElements =
    document.querySelectorAll(".fade-in");

if (animatedElements.length > 0) {

    const observer =
        new IntersectionObserver(
            function (entries) {

                entries.forEach(function (entry) {

                    if (entry.isIntersecting) {

                        entry.target.classList.add("visible");

                        observer.unobserve(entry.target);

                    }

                });

            },
            {
                threshold: 0.15
            }
        );


    animatedElements.forEach(function (element) {

        observer.observe(element);

    });

}


/* =========================================
   TYPING EFFECT
   ========================================= */

const typingText =
    document.getElementById("typingText");

if (typingText) {

    const words = [
        "Future Software Developer",
        "BS Information Technology Student",
        "Web Developer",
        "Technology Enthusiast"
    ];

    let wordIndex = 0;
    let characterIndex = 0;
    let deleting = false;


    function typeEffect() {

        const currentWord =
            words[wordIndex];


        if (!deleting) {

            typingText.textContent =
                currentWord.substring(
                    0,
                    characterIndex + 1
                );

            characterIndex++;


            if (
                characterIndex ===
                currentWord.length
            ) {

                deleting = true;

                setTimeout(
                    typeEffect,
                    1500
                );

                return;

            }

        } else {

            typingText.textContent =
                currentWord.substring(
                    0,
                    characterIndex - 1
                );

            characterIndex--;


            if (characterIndex === 0) {

                deleting = false;

                wordIndex++;

                if (
                    wordIndex >=
                    words.length
                ) {

                    wordIndex = 0;

                }

            }

        }


        const speed =
            deleting ? 60 : 100;

        setTimeout(
            typeEffect,
            speed
        );

    }


    typeEffect();

}


/* =========================================
   PREVENT EMPTY SOCIAL LINKS
   ========================================= */

const socialLinks =
    document.querySelectorAll(".social-links a");

socialLinks.forEach(function (link) {

    link.addEventListener("click", function (event) {

        const href =
            link.getAttribute("href");

        if (
            !href ||
            href === "#" ||
            href === "javascript:void(0)"
        ) {

            event.preventDefault();

            alert(
                "Social media link will be added soon."
            );

        }

    });

});


/* =========================================
   PAGE LOADED
   ========================================= */

document.addEventListener(
    "DOMContentLoaded",
    function () {

        document.body.classList.add("loaded");

    }
);
