      let mainNav = document.getElementById("js-menu");
      let navBarToggle = document.getElementById("js-navbar-toggle");
      let icon = document.getElementsByClassName("fa-bars")[0];

      navBarToggle.addEventListener("click", function () {
        mainNav.classList.toggle("active");
        icon.className.replace("fa-bars", "fa-plus");
      });
