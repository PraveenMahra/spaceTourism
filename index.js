const hamburgerIcon = document.querySelector(".hamburger-icon");
const navEl = document.querySelector(".navbar-list");
const closeIcon = document.querySelector(".close-icon");

if (window.innerWidth <= 609) {
  navEl.classList.add("hidden");
  closeIcon.classList.add("hidden");
}

hamburgerIcon.addEventListener("click", function () {
  navEl.classList.toggle("hidden");
  closeIcon.classList.remove("hidden");
});

closeIcon.addEventListener("click", function () {
  navEl.classList.add("hidden");
  closeIcon.classList.add("hidden");
});
