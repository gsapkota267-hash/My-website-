/* =========================================================
   GAURAV SAPKOTA WEBSITE
   COMPLETE SCRIPT.JS
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

  /* =======================================================
     ENABLE JAVASCRIPT ANIMATIONS
  ======================================================= */

  document.documentElement.classList.add("js-enabled");


  /* =======================================================
     MOBILE MENU
  ======================================================= */

  const menuButton = document.querySelector(".menu-btn");
  const nav = document.querySelector(".nav");
  const navLinks = document.querySelectorAll(".nav a");

  if (menuButton && nav) {

    menuButton.addEventListener("click", () => {

      nav.classList.toggle("open");

      const isOpen = nav.classList.contains("open");

      menuButton.setAttribute(
        "aria-label",
        isOpen ? "Close menu" : "Open menu"
      );

      menuButton.textContent = isOpen ? "✕" : "☰";

    });


    /* Close menu after clicking a link */

    navLinks.forEach(link => {

      link.addEventListener("click", () => {

        nav.classList.remove("open");

        menuButton.textContent = "☰";

        menuButton.setAttribute(
          "aria-label",
          "Open menu"
        );

      });

    });

  }


  /* =======================================================
     ADD SCROLL ANIMATION CLASS
  ======================================================= */

  const elementsToAnimate = [

    ".section-heading",
    ".about-grid > div",
    ".card",
    ".contact-box > div",
    ".contact-buttons .contact-btn"

  ];

  elementsToAnimate.forEach(selector => {

    document.querySelectorAll(selector).forEach(element => {

      element.classList.add("animate-on-scroll");

    });

  });


  /* =======================================================
     SCROLL REVEAL
  ======================================================= */

  const animatedElements =
    document.querySelectorAll(".animate-on-scroll");

  const observer = new IntersectionObserver(
    (entries, observer) => {

      entries.forEach(entry => {

        if (entry.isIntersecting) {

          entry.target.classList.add("show");

          observer.unobserve(entry.target);

        }

      });

    },
    {
      threshold: 0.12
    }
  );


  animatedElements.forEach(element => {

    observer.observe(element);

  });


  /* =======================================================
     OPENING ANIMATION
  ======================================================= */

  const loader = document.createElement("div");

  loader.className = "page-loader";

  loader.innerHTML = `
    <div class="loader-logo">
      GAURAV<span> SAPKOTA</span>
    </div>

    <div class="loader-line"></div>
  `;

  document.body.classList.add("page-loading");

  document.body.prepend(loader);


  /* Wait for website to load */

  window.addEventListener("load", () => {

    setTimeout(() => {

      loader.classList.add("hide");

      document.body.classList.remove("page-loading");

      /* Start hero animation */

      animateHero();

      /* Remove loader after animation */

      setTimeout(() => {

        loader.remove();

      }, 800);

    }, 700);

  });


  /* =======================================================
     HERO ANIMATION
  ======================================================= */

  function animateHero() {

    const photo = document.querySelector(".profile-photo");
    const heroContent = document.querySelector(".hero-content");

    if (photo) {

      photo.animate(
        [
          {
            opacity: 0,
            transform: "translateY(40px) scale(0.96)"
          },
          {
            opacity: 1,
            transform: "translateY(0) scale(1)"
          }
        ],
        {
          duration: 900,
          easing: "cubic-bezier(0.22, 1, 0.36, 1)",
          fill: "forwards"
        }
      );

    }


    if (heroContent) {

      heroContent.animate(
        [
          {
            opacity: 0,
            transform: "translateY(35px)"
          },
          {
            opacity: 1,
            transform: "translateY(0)"
          }
        ],
        {
          duration: 900,
          delay: 180,
          easing: "cubic-bezier(0.22, 1, 0.36, 1)",
          fill: "forwards"
        }
      );

    }

  }


  /* =======================================================
     BUTTON RIPPLE EFFECT
  ======================================================= */

  const buttons = document.querySelectorAll(
    ".btn, .contact-btn"
  );

  buttons.forEach(button => {

    button.addEventListener("click", function(event) {

      const ripple = document.createElement("span");

      ripple.style.position = "absolute";
      ripple.style.width = "10px";
      ripple.style.height = "10px";
      ripple.style.borderRadius = "50%";
      ripple.style.background = "rgba(255,255,255,0.35)";
      ripple.style.transform = "translate(-50%, -50%)";
      ripple.style.pointerEvents = "none";

      const rect = this.getBoundingClientRect();

      ripple.style.left =
        `${event.clientX - rect.left}px`;

      ripple.style.top =
        `${event.clientY - rect.top}px`;

      this.style.position = "relative";
      this.style.overflow = "hidden";

      this.appendChild(ripple);

      ripple.animate(
        [
          {
            width: "10px",
            height: "10px",
            opacity: 0.7
          },
          {
            width: "400px",
            height: "400px",
            opacity: 0
          }
        ],
        {
          duration: 600,
          easing: "ease-out"
        }
      );

      setTimeout(() => {

        ripple.remove();

      }, 600);

    });

  });


  /* =======================================================
     AUTOMATIC FOOTER YEAR
  ======================================================= */

  const yearElement = document.getElementById("year");

  if (yearElement) {

    yearElement.textContent =
      new Date().getFullYear();

  }


  /* =======================================================
     CLOSE MOBILE MENU WHEN CLICKING OUTSIDE
  ======================================================= */

  document.addEventListener("click", event => {

    if (!nav || !menuButton) return;

    const clickedInsideMenu =
      nav.contains(event.target);

    const clickedButton =
      menuButton.contains(event.target);

    if (
      !clickedInsideMenu &&
      !clickedButton &&
      nav.classList.contains("open")
    ) {

      nav.classList.remove("open");

      menuButton.textContent = "☰";

      menuButton.setAttribute(
        "aria-label",
        "Open menu"
      );

    }

  });

});
