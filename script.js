document.addEventListener("DOMContentLoaded", () => {

  /* ==================================================
     OPENING LOADER
  ================================================== */

  const loader = document.getElementById("page-loader");

  // Prevent scrolling while opening animation is playing
  document.body.classList.add("loader-active");


  if (loader) {

    window.addEventListener("load", () => {

      // Keep intro visible for a few seconds
      setTimeout(() => {

        loader.classList.add("loaded");

        document.body.classList.remove("loader-active");

      }, 4000);

    });

  } else {

    // If loader doesn't exist, allow scrolling
    document.body.classList.remove("loader-active");

  }


  /* ==================================================
     CURRENT YEAR
  ================================================== */

  const year = document.getElementById("year");

  if (year) {
    year.textContent = new Date().getFullYear();
  }


  /* ==================================================
     MOBILE NAVIGATION
  ================================================== */

  const menuBtn = document.querySelector(".menu-btn");
  const nav = document.querySelector(".nav");

  if (menuBtn && nav) {

    menuBtn.addEventListener("click", () => {

      nav.classList.toggle("active");

      const isOpen = nav.classList.contains("active");

      menuBtn.setAttribute(
        "aria-expanded",
        isOpen ? "true" : "false"
      );

    });


    /* Close menu when a navigation link is clicked */

    const navLinks = nav.querySelectorAll("a");

    navLinks.forEach((link) => {

      link.addEventListener("click", () => {

        nav.classList.remove("active");

        menuBtn.setAttribute(
          "aria-expanded",
          "false"
        );

      });

    });

  }


  /* ==================================================
     SMOOTH SCROLL
  ================================================== */

  const links = document.querySelectorAll('a[href^="#"]');

  links.forEach((link) => {

    link.addEventListener("click", (event) => {

      const targetId = link.getAttribute("href");

      if (!targetId || targetId === "#") {
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


  /* ==================================================
     SCROLL REVEAL ANIMATION
  ================================================== */

  const revealElements = document.querySelectorAll(
    ".section-heading, .about-text, .feature-card, .card, .contact-box, .contact-buttons"
  );


  revealElements.forEach((element) => {

    element.classList.add("reveal");

  });


  if ("IntersectionObserver" in window) {

    const observer = new IntersectionObserver(
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


    revealElements.forEach((element) => {

      observer.observe(element);

    });

  } else {

    revealElements.forEach((element) => {

      element.classList.add("show");

    });

  }


  /* ==================================================
     HERO ENTRANCE
  ================================================== */

  const heroPhoto = document.querySelector(".hero-photo-wrapper");
  const heroContent = document.querySelector(".hero-content");

  if (heroPhoto) {
    heroPhoto.classList.add("hero-reveal");
  }

  if (heroContent) {
    heroContent.classList.add("hero-reveal");
  }


  /* ==================================================
     HEADER SCROLL EFFECT
  ================================================== */

  const header = document.querySelector(".header");


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


  /* ==================================================
     ACTIVE NAVIGATION LINK
  ================================================== */

  const sections = document.querySelectorAll("main section[id]");
  const navigationLinks = document.querySelectorAll(".nav a");


  if ("IntersectionObserver" in window) {

    const sectionObserver = new IntersectionObserver(
      (entries) => {

        entries.forEach((entry) => {

          if (entry.isIntersecting) {

            const id = entry.target.getAttribute("id");

            navigationLinks.forEach((link) => {

              link.classList.remove("active");

              if (
                link.getAttribute("href") === `#${id}`
              ) {

                link.classList.add("active");

              }

            });

          }

        });

      },
      {
        threshold: 0.35
      }
    );


    sections.forEach((section) => {

      sectionObserver.observe(section);

    });

  }


  /* ==================================================
     IMAGE LOAD EFFECT
  ================================================== */

  const profilePhoto =
    document.querySelector(".profile-photo");


  if (profilePhoto) {

    if (profilePhoto.complete) {

      profilePhoto.classList.add("image-loaded");

    } else {

      profilePhoto.addEventListener("load", () => {

        profilePhoto.classList.add("image-loaded");

      });

    }

  }


  /* ==================================================
     EXTERNAL LINKS
  ================================================== */

  const externalLinks =
    document.querySelectorAll('a[target="_blank"]');


  externalLinks.forEach((link) => {

    link.setAttribute(
      "rel",
      "noopener noreferrer"
    );

  });


  /* ==================================================
     PREVENT LOADER GETTING STUCK
  ================================================== */

  setTimeout(() => {

    document.body.classList.remove("loader-active");

    if (loader) {
      loader.classList.add("loaded");
    }

  }, 7000);


});
