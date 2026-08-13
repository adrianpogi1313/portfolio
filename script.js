const reveals = document.querySelectorAll(".reveal");

function revealOnScroll() {

    reveals.forEach(section => {

        const top = section.getBoundingClientRect().top;

        if (top < window.innerHeight - 120) {

            section.classList.add("active");

        }

    });

}

window.addEventListener("scroll", revealOnScroll);

revealOnScroll();
const navbar = document.querySelector(".navbar");

let lastScroll = 0;

window.addEventListener("scroll", () => {

    const currentScroll = window.pageYOffset;

    // Hide / Show Navbar
    if (currentScroll > lastScroll && currentScroll > 100) {

        navbar.classList.add("hide");

    } else {

        navbar.classList.remove("hide");
        lastScroll = currentScroll;

    }
        

    // Glass Effect
    if (currentScroll > 50) {

        navbar.classList.add("scrolled");

    } else {

        navbar.classList.remove("scrolled");

    }

    lastScroll = currentScroll;

});
window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    setTimeout(() => {

        loader.classList.add("loader-hidden");

        setTimeout(() => {

            loader.style.display = "none";

            document.body.classList.add("page-loaded");

        }, 800);

    }, 2600);

});
const revealElements = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("active");
        }
    });
}, {
    threshold: 0.15
});

revealElements.forEach((element) => {
    observer.observe(element);
});