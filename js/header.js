/** @format */

const navbar = document.getElementById("navbar");
const head_dropdown = document.getElementById("head_dropdown");
const main_content = document.getElementById("main_content");
const xmark = document.getElementById("xmark");

function navbar_toggle() {
  navbar.classList.toggle("navbar-toggle");
  main_content.classList.toggle("main_content_margin");
}

function dropdown_head() {
  if (head_dropdown.style.display == "none") {
    head_dropdown.style.display = "inherit";
    xmark.classList.add("fa-xmark");
  } else {
    head_dropdown.style.display = "none";
    xmark.classList.remove("fa-xmark");
  }
}

const toggleSwitch = document.querySelector(
  ".theme-switch input[type=checkbox]"
);
const currentTheme = localStorage.getItem("theme");
const appearance = document.getElementById("appearance");
const sun_moon = document.getElementById("sun_moon");

if (currentTheme) {
  document.documentElement.setAttribute("data-theme", currentTheme);
  if (currentTheme === "dark") {
    toggleSwitch.checked = true;
  }
}

function switchTheme(e) {
  if (e.target.checked) {
    document.documentElement.setAttribute("data-theme", "dark");
    localStorage.setItem("theme", "dark");
    appearance.innerHTML = "Dark theme";
    sun_moon.classList.remove("fa-sun");
  } else {
    document.documentElement.setAttribute("data-theme", "light");
    localStorage.setItem("theme", "light");
    appearance.innerHTML = "Light theme";
    sun_moon.classList.add("fa-sun");
  }
}
toggleSwitch.addEventListener("change", switchTheme, false);
