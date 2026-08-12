document.addEventListener("DOMContentLoaded", function () {

  const loader = document.getElementById("page-loader");

  // Keep page from scrolling during intro
  document.body.style.overflow = "hidden";


  // Opening animation
  if (loader) {

    setTimeout(function () {

      loader.style.opacity = "0";

      setTimeout(function () {

        loader.style.display = "none";

        document.body.style.overflow = "auto";

      }, 1000);

    }, 3500);

  } else {

    document.body.style.overflow = "auto";

  }


  // Current year
  const year = document.getElementById("year");

  if (year) {
    year.textContent = new Date().getFullYear();
  }


  // Mobile menu
  const menuBtn = document.querySelector(".menu-btn");
  const nav = document.querySelector(".nav");

  if (menuBtn && nav) {

    menuBtn.addEventListener("click", function () {

      nav.classList.toggle("active");

      const opened = nav.classList.contains("active");

      menuBtn.setAttribute(
        "aria-expanded",
        opened ? "true" : "false"
      );

    });


    // Close menu after clicking a link
    const navLinks = nav.querySelectorAll("a");

    navLinks.forEach(function (link) {

      link.addEventListener("click", function () {

        nav.classList.remove("active");

        menuBtn.setAttribute(
          "aria-expanded",
          "false"
        );

      });

    });

  }


  // Smooth scrolling
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
          behavior: "smooth"
        });

      }

    });

  });

});
