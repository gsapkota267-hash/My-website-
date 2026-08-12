/* =================================
   CINEMATIC PAGE LOADER
================================= */

const loader = document.getElementById("page-loader");

if (loader) {

  window.addEventListener("load", function () {

    setTimeout(function () {
      loader.classList.add("hide");
    }, 1800);

  });

}


/* =================================
   MOBILE MENU
================================= */

const menuBtn = document.querySelector(".menu-btn");
const nav = document.querySelector(".nav");

if (menuBtn && nav) {

  menuBtn.addEventListener("click", function () {

    nav.classList.toggle("open");

    const isOpen = nav.classList.contains("open");

    menuBtn.setAttribute(
      "aria-expanded",
      isOpen ? "true" : "false"
    );

    menuBtn.textContent = isOpen ? "✕" : "☰";

  });


  /* Close menu after clicking a link */

  const navLinks = nav.querySelectorAll("a");

  navLinks.forEach(function (link) {

    link.addEventListener("click", function () {

      nav.classList.remove("open");

      menuBtn.setAttribute(
        "aria-expanded",
        "false"
      );

      menuBtn.textContent = "☰";

    });

  });

}


/* =================================
   SCROLL REVEAL ANIMATION
================================= */

const revealElements = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver(
  function (entries, observer) {

    entries.forEach(function (entry) {

      if (entry.isIntersecting) {

        entry.target.classList.add("show");

        observer.unobserve(entry.target);

      }

    });

  },
  {
    threshold: 0.15
  }
);


revealElements.forEach(function (element) {

  revealObserver.observe(element);

});


/* =================================
   FOOTER YEAR
================================= */

const yearElement = document.getElementById("year");

if (yearElement) {

  yearElement.textContent = new Date().getFullYear();

}


/* =================================
   SMOOTH NAVIGATION
================================= */

document.querySelectorAll('a[href^="#"]').forEach(function (link) {

  link.addEventListener("click", function (event) {

    const targetId = this.getAttribute("href");

    if (targetId === "#") {
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
