const btn = document.getElementById("menu-btn");
const nav = document.getElementById("menu");

function navToggle() {
  btn.classList.toggle("open");
}

btn.addEventListener("click", navToggle);
