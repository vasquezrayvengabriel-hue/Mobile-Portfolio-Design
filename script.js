/* =========================================================
   MOBILE PORTFOLIO WEBSITE
   RAYVEN GABRIEL VASQUEZ
   SCRIPT.JS
   ========================================================= */


/* =========================================================
   WAIT UNTIL PAGE IS LOADED
   ========================================================= */

document.addEventListener("DOMContentLoaded", function () {


    /* =====================================================
       MOBILE HAMBURGER MENU
       ===================================================== */

    const menuToggle = document.getElementById("menuToggle");
    const navMenu = document.getElementById("navMenu");

    if (menuToggle && navMenu) {

        menuToggle.addEventListener("click", function () {

            navMenu.classList.toggle("open");

            const isOpen = navMenu.classList.contains("open");

            menuToggle.setAttribute(
                "aria-expanded",
                isOpen ? "true" : "false"
            );

            /* Change hamburger icon */

            const icon = menuToggle.querySelector("i");

            if (icon) {

                if (isOpen) {
                    icon.classList.remove("fa-bars");
                    icon.classList.add("fa-xmark");
                } else {
                    icon.classList.remove("fa-xmark");
                    icon.classList.add("fa-bars");
                }

            }

        });


        /* =================================================
           CLOSE MOBILE MENU AFTER CLICKING A LINK
           ================================================= */

        const navLinks = navMenu.querySelectorAll("a");

        navLinks.forEach(function (link) {

            link.addEventListener("click", function () {

                navMenu.classList.remove("open");

                menuToggle.setAttribute(
                    "aria-expanded",
                    "false"
                );

                const icon = menuToggle.querySelector("i");

                if (icon) {
                    icon.classList.remove("fa-xmark");
                    icon.classList.add("fa-bars");
                }

            });

        });

    }


    /* =====================================================
       CURRENT YEAR
       ===================================================== */

    const currentYear = document.getElementById("currentYear");

    if (currentYear) {
        currentYear.textContent = new Date().getFullYear();
    }


    /* =====================================================
       SCROLL TO TOP BUTTON
       ===================================================== */

    const scrollTop = document.getElementById("scrollTop");

    if (scrollTop) {

        window.addEventListener("scroll", function () {

            if (window.scrollY > 350) {

                scrollTop.classList.add("show");

            } else {

                scrollTop.classList.remove("show");

            }

        });


        scrollTop.addEventListener("click", function () {

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });

        });

    }


    /* =====================================================
       MESSAGE FORM
       ===================================================== */

    const messageForm = document.getElementById("messageForm");
    const formStatus = document.getElementById("formStatus");

    if (messageForm) {

        messageForm.addEventListener("submit", function (event) {

            event.preventDefault();


            /* ---------------------------------------------
               GET FORM VALUES
               --------------------------------------------- */

            const nameField = document.getElementById("name");
            const emailField = document.getElementById("email");
            const subjectField = document.getElementById("subject");
            const messageField = document.getElementById("message");


            const name = nameField
                ? nameField.value.trim()
                : "";

            const email = emailField
                ? emailField.value.trim()
                : "";

            const subject = subjectField
                ? subjectField.value.trim()
                : "";

            const message = messageField
                ? messageField.value.trim()
                : "";


            /* ---------------------------------------------
               CHECK REQUIRED FIELDS
               --------------------------------------------- */

            if (
                name === "" ||
                email === "" ||
                subject === "" ||
                message === ""
            ) {

                if (formStatus) {

                    formStatus.textContent =
                        "Please complete all fields before sending.";

                    formStatus.classList.remove("success");
                    formStatus.classList.add("error");

                }

                return;
            }


            /* ---------------------------------------------
               BASIC EMAIL VALIDATION
               --------------------------------------------- */

            const emailPattern =
                /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

            if (!emailPattern.test(email)) {

                if (formStatus) {

                    formStatus.textContent =
                        "Please enter a valid email address.";

                    formStatus.classList.remove("success");
                    formStatus.classList.add("error");

                }

                return;
            }


            /* ---------------------------------------------
               SUCCESS MESSAGE
               --------------------------------------------- */

            if (formStatus) {

                formStatus.textContent =
                    "Thank you! Your message has been prepared successfully.";

                formStatus.classList.remove("error");
                formStatus.classList.add("success");

            }


            /* ---------------------------------------------
               CREATE EMAIL MESSAGE
               --------------------------------------------- */

            const recipient =
                "rayvengabrielvasquez@gmail.com";


            const emailSubject =
                encodeURIComponent(subject);


            const emailBody =
                encodeURIComponent(
                    "Name: " + name +
                    "\nEmail: " + email +
                    "\n\nMessage:\n" + message
                );


            /*
             * Open the user's email application.
             */

            const mailtoLink =
                "mailto:" +
                recipient +
                "?subject=" +
                emailSubject +
                "&body=" +
                emailBody;


            window.location.href = mailtoLink;


            /* ---------------------------------------------
               RESET FORM
               --------------------------------------------- */

            setTimeout(function () {

                messageForm.reset();

            }, 500);

        });

    }


    /* =====================================================
       SET ACTIVE NAVIGATION LINK
       ===================================================== */

    const currentPage =
        window.location.pathname
            .split("/")
            .pop();


    const navigationLinks =
        document.querySelectorAll(".main-nav a");


    navigationLinks.forEach(function (link) {

        const linkPage =
            link.getAttribute("href");


        if (
            linkPage === currentPage ||
            (
                currentPage === "" &&
                linkPage === "index.html"
            )
        ) {

            link.classList.add("active");

        } else {

            link.classList.remove("active");

        }

    });


    /* =====================================================
       IMAGE ERROR HANDLING
       ===================================================== */

    const profileImages =
        document.querySelectorAll(
            ".profile-image-box img, .about-image-wrapper img"
        );


    profileImages.forEach(function (image) {

        image.addEventListener("error", function () {

            image.style.display = "none";

        });

    });


    /* =====================================================
       SMOOTH INTERNAL LINKS
       ===================================================== */

    const internalLinks =
        document.querySelectorAll('a[href^="#"]');


    internalLinks.forEach(function (link) {

        link.addEventListener("click", function (event) {

            const targetID =
                link.getAttribute("href");


            if (
                !targetID ||
                targetID === "#"
            ) {
                return;
            }


            const target =
                document.querySelector(targetID);


            if (target) {

                event.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

            }

        });

    });


    /* =====================================================
       SIMPLE CARD REVEAL
       ===================================================== */

    const revealElements =
        document.querySelectorAll(
            ".portal-card, " +
            ".quick-info-card, " +
            ".vision-card, " +
            ".value-card, " +
            ".education-card, " +
            ".skill-card, " +
            ".learning-card, " +
            ".project-card, " +
            ".social-card"
        );


    if ("IntersectionObserver" in window) {

        const revealObserver =
            new IntersectionObserver(
                function (entries, observer) {

                    entries.forEach(function (entry) {

                        if (entry.isIntersecting) {

                            entry.target.classList.add(
                                "visible"
                            );

                            observer.unobserve(
                                entry.target
                            );

                        }

                    });

                },
                {
                    threshold: 0.12
                }
            );


        revealElements.forEach(function (element) {

            revealObserver.observe(element);

        });

    }


});
