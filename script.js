const txt = [
    "Java Developer",
    "SQL Developer",
    "Web Developer",
    "Problem Solver",
    "Network Enthusiast"
];

let i = 0;
let j = 0;
let cur = "";
let deleting = false;

function typeEffect() {

    const typing = document.getElementById("typing");

    if (!typing) return;

    if (!deleting && j <= txt[i].length) {

        cur = txt[i].substring(0, j);
        typing.innerHTML = cur + "<span class='cursor'>|</span>";

        j++;

        setTimeout(typeEffect, 100);

    } else if (deleting && j >= 0) {

        cur = txt[i].substring(0, j);
        typing.innerHTML = cur + "<span class='cursor'>|</span>";

        j--;

        setTimeout(typeEffect, 50);

    } else {

        deleting = !deleting;

        if (!deleting) {
            i = (i + 1) % txt.length;
        }

        setTimeout(typeEffect, 1000);

    }

}

typeEffect();



const sections = document.querySelectorAll(".section");

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

}, {
    threshold: 0.15
});

sections.forEach(section => {

    section.classList.add("hidden");

    observer.observe(section);

});



const navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;

        if (pageYOffset >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href").includes(current)) {

            link.classList.add("active");

        }

    });

});



const cards = document.querySelectorAll(
    ".project-card,.timeline-card,.skill-card,.contact-item"
);

cards.forEach(card => {

    card.addEventListener("mousemove", e => {

        const rect = card.getBoundingClientRect();

        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        card.style.setProperty("--x", x + "px");
        card.style.setProperty("--y", y + "px");

    });

});



const heroImage = document.querySelector(".hero-left img");

window.addEventListener("mousemove", e => {

    if (!heroImage) return;

    const x = (window.innerWidth / 2 - e.pageX) / 40;
    const y = (window.innerHeight / 2 - e.pageY) / 40;

    heroImage.style.transform =
        `translate(${x}px, ${y}px)`;

});



window.addEventListener("scroll", () => {

    const scrolled = window.pageYOffset;

    const particles = document.querySelector(".particles");

    if (particles) {

        particles.style.transform =
            `translateY(${scrolled * 0.3}px)`;

    }

});



const counters = document.querySelectorAll(".stat h3");

let started = false;

window.addEventListener("scroll", () => {

    const stats = document.querySelector(".stats");

    if (!stats) return;

    const top = stats.getBoundingClientRect().top;

    if (top < window.innerHeight && !started) {

        started = true;

        counters.forEach(counter => {

            const target =
                parseFloat(counter.innerText);

            let count = 0;

            const increment = target / 50;

            const update = () => {

                if (count < target) {

                    count += increment;

                    counter.innerText =
                        target % 1 === 0
                            ? Math.ceil(count)
                            : count.toFixed(2);

                    requestAnimationFrame(update);

                } else {

                    counter.innerText = target;

                }

            };

            update();

        });

    }

});



const scrollBtn = document.createElement("button");

scrollBtn.innerHTML = "↑";

scrollBtn.classList.add("scroll-top");

document.body.appendChild(scrollBtn);

scrollBtn.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});

window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {

        scrollBtn.classList.add("show-scroll");

    } else {

        scrollBtn.classList.remove("show-scroll");

    }

});

