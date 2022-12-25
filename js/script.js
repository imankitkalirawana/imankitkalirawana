/** @format */

// Nav button action

const popular_posts = document.getElementById("popular_posts");
const latest_posts = document.getElementById("latest_posts");
const editors_posts = document.getElementById("editors_posts");

const Home_navbar_active = document.getElementById("Home_navbar_active");
const Popular_navbar_active = document.getElementById("Popular_navbar_active");
const Latest_navbar_active = document.getElementById("Latest_navbar_active");
const Editor_navbar_active = document.getElementById("Editor_navbar_active");

const Home_nav_active = document.getElementById("Home_nav_active");
const Popular_nav_active = document.getElementById("Popular_nav_active");
const Latest_nav_active = document.getElementById("Latest_nav_active");
const Editor_nav_active = document.getElementById("Editor_nav_active");

function AllAct() {
  popular_posts.style.display = "inherit";
  latest_posts.style.display = "inherit";
  editors_posts.style.display = "inherit";
  Home_navbar_active.classList.add("active");
  Popular_navbar_active.classList.remove("active");
  Latest_navbar_active.classList.remove("active");
  Editor_navbar_active.classList.remove("active");
  Home_nav_active.classList.add("active");
  Popular_nav_active.classList.remove("active");
  Latest_nav_active.classList.remove("active");
  Editor_nav_active.classList.remove("active");
}

function PopularAct() {
  popular_posts.style.display = "inherit";
  latest_posts.style.display = "none";
  editors_posts.style.display = "none";
  Home_navbar_active.classList.remove("active");
  Popular_navbar_active.classList.add("active");
  Latest_navbar_active.classList.remove("active");
  Editor_navbar_active.classList.remove("active");
  Home_nav_active.classList.remove("active");
  Popular_nav_active.classList.add("active");
  Latest_nav_active.classList.remove("active");
  Editor_nav_active.classList.remove("active");
}

function LatestAct() {
  popular_posts.style.display = "none";
  latest_posts.style.display = "inherit";
  editors_posts.style.display = "none";
  Home_navbar_active.classList.remove("active");
  Popular_navbar_active.classList.remove("active");
  Latest_navbar_active.classList.add("active");
  Editor_navbar_active.classList.remove("active");
  Home_nav_active.classList.remove("active");
  Popular_nav_active.classList.remove("active");
  Latest_nav_active.classList.add("active");
  Editor_nav_active.classList.remove("active");
}

function EditorAct() {
  popular_posts.style.display = "none";
  latest_posts.style.display = "none";
  editors_posts.style.display = "inherit";
  Home_navbar_active.classList.remove("active");
  Popular_navbar_active.classList.remove("active");
  Latest_navbar_active.classList.remove("active");
  Editor_navbar_active.classList.add("active");
  Home_nav_active.classList.remove("active");
  Popular_nav_active.classList.remove("active");
  Latest_nav_active.classList.remove("active");
  Editor_nav_active.classList.add("active");
}
