document.addEventListener("DOMContentLoaded", function () {
    // Smooth scroll to Contact Form
    const contactLink = document.querySelector("a[href='#contact-form']");
    const contactForm = document.getElementById("contact-form");

    if (contactLink && contactForm) {
        contactLink.addEventListener("click", function (e) {
            e.preventDefault();
            contactForm.scrollIntoView({ behavior: "smooth" });
        });
    }

    // Back to Top button behavior
    const backToTop = document.getElementById("backToTop");

    if (backToTop) {
        window.addEventListener("scroll", function () {
            if (window.scrollY > 300) {
                backToTop.style.display = "block";
            } else {
                backToTop.style.display = "none";
            }
        });

        backToTop.addEventListener("click", function () {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        });
    }
});

