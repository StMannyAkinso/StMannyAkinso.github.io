document.addEventListener("DOMContentLoaded", function () {
  fetch("components/header.html")
    .then((response) => response.text())
    .then((data) => {
      const headerContainer = document.getElementById("header");
      headerContainer.innerHTML = data;

      const menuToggle = document.getElementById("menu-toggle");
      const menu = document.getElementById("menu");

      if (menuToggle && menu) {
        menuToggle.addEventListener("click", function () {
          menu.classList.toggle("hidden");
        });
      } else {
        console.error("Menu elements not found");
      }
    });
});
