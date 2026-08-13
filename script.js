
/* =========================================================
   GAURAV SAPKOTA WEBSITE
   COMPLETE SCRIPT.JS
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

  /* =======================================================
     MOBILE MENU
  ======================================================= */

  const menuButton = document.querySelector(".menu-btn");
  const nav = document.querySelector(".nav");
  const navLinks = document.querySelectorAll(".nav a");

  if (menuButton && nav) {

    menuButton.addEventListener("click", () => {

      nav.classList.toggle("active");

      const isOpen = nav.classList.contains("active");

      menuButton.setAttribute(
        "aria-expanded",
        isOpen ? "true" : "false"
      );

      menuButton.setAttribute(
        "aria-label",
        isOpen ? "Close navigation menu" : "Open navigation menu"
      );

      menuButton.textContent = isOpen ? "✕" : "☰";

    });


    /* Close menu after clicking a link */

    navLinks.forEach((link) => {

      link.addEventListener("click", () => {

        nav.classList.remove("active");

        menuButton.setAttribute(
          "aria-expanded",
          "false"
        );

        menuButton.setAttribute(
          "aria-label",
          "Open navigation menu"
        );

        menuButton.textContent = "☰";

      });

    });

  }


  /* =======================================================
     CLOSE MOBILE MENU WHEN CLICKING OUTSIDE
  ======================================================= */

  document.addEventListener("click", (event) => {

    if (!nav || !menuButton) {
      return;
    }

    const clickedInsideNav =
      nav.contains(event.target);

    const clickedMenuButton =
      menuButton.contains(event.target);

    if (
      !clickedInsideNav &&
      !clickedMenuButton &&
      nav.classList.contains("active")
    ) {

      nav.classList.remove("active");

      menuButton.setAttribute(
        "aria-expanded",
        "false"
      );

      menuButton.setAttribute(
        "aria-label",
        "Open navigation menu"
      );

      menuButton.textContent = "☰";

    }

  });


  /* =======================================================
     FOOTER YEAR
  ======================================================= */

  const yearElement =
    document.getElementById("year");

  if (yearElement) {

    yearElement.textContent =
      new Date().getFullYear();

  }


  /* =======================================================
     SMOOTH SCROLL
  ======================================================= */

  const anchorLinks =
    document.querySelectorAll('a[href^="#"]');

  anchorLinks.forEach((link) => {

    link.addEventListener("click", (event) => {

      const targetId =
        link.getAttribute("href");

      if (!targetId || targetId === "#") {
        return;
      }

      const target =
        document.querySelector(targetId);

      if (!target) {
        return;
      }

      event.preventDefault();

      target.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });

    });

  });


  /* =======================================================
     HEADER SCROLL EFFECT
  ======================================================= */

  const header =
    document.querySelector(".header");

  function updateHeader() {

    if (!header) {
      return;
    }

    if (window.scrollY > 50) {

      header.classList.add("scrolled");

    } else {

      header.classList.remove("scrolled");

    }

  }

  window.addEventListener(
    "scroll",
    updateHeader,
    { passive: true }
  );

  updateHeader();


  /* =======================================================
     SCROLL REVEAL
  ======================================================= */

  const elementsToReveal = document.querySelectorAll(
    ".section-heading, .about-text, .feature-card, .card, .contact-box, .contact-buttons"
  );


  elementsToReveal.forEach((element) => {

    element.classList.add("reveal");

  });


  if ("IntersectionObserver" in window) {

    const observer =
      new IntersectionObserver(
        (entries, observer) => {

          entries.forEach((entry) => {

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


    elementsToReveal.forEach((element) => {

      observer.observe(element);

    });

  } else {

    elementsToReveal.forEach((element) => {

      element.classList.add("show");

    });

  }


  /* =======================================================
     BUTTON RIPPLE EFFECT
  ======================================================= */

  const buttons =
    document.querySelectorAll(
      ".btn, .contact-btn"
    );


  buttons.forEach((button) => {

    button.addEventListener("click", function (event) {

      const ripple =
        document.createElement("span");

      const rect =
        this.getBoundingClientRect();


      ripple.style.position = "absolute";

      ripple.style.width = "10px";
      ripple.style.height = "10px";

      ripple.style.borderRadius = "50%";

      ripple.style.background =
        "rgba(255,255,255,0.35)";

      ripple.style.transform =
        "translate(-50%, -50%)";

      ripple.style.pointerEvents =
        "none";

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
     OPENING LOADER
  ======================================================= */

  const loader =
    document.getElementById("page-loader");


  if (loader) {

    document.body.style.overflow = "hidden";


    /*
       Wait until the page is loaded,
       then hide the loader.

       The loader will also have a safety
       timeout so it cannot remain stuck.
    */

    let loaderHidden = false;


    function hideLoader() {

      if (loaderHidden) {
        return;
      }

      loaderHidden = true;

      loader.classList.add("hide");

      document.body.style.overflow = "";

    }


    /* Normal loader timing */

    const loaderTimer =
      setTimeout(() => {

        hideLoader();

      }, 3500);


    /* Wait for the page load event */

    window.addEventListener("load", () => {

      setTimeout(() => {

        clearTimeout(loaderTimer);

        hideLoader();

      }, 3500);

    });


    /*
       Emergency fallback.

       If the browser does not fire the
       load event correctly, the loader
       will still disappear.
    */

    setTimeout(() => {

      hideLoader();

    }, 7000);

  }


});
