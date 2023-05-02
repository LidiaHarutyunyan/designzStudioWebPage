"use strict";

const home = document.querySelector(".home");
const portfolio = document.querySelector(".portfolio");
const services = document.querySelector(".services");
const about = document.querySelector(".about");
const contact = document.querySelector(".contact");

// THE TRANSITION OF THE PAGE

const transitionhome = function () {
  window.location.href = "index.html";
};

const transitionportfolio = function () {
  window.location.href = "portfolio.html";
};
const transitionservices = function () {
  window.location.href = "services.html";
};
const transitionabout = function () {
  window.location.href = "about.html";
};
const transitioncontact = function () {
  window.location.href = "contact.html";
};

home.addEventListener("click", transitionhome);
portfolio.addEventListener("click", transitionportfolio);
services.addEventListener("click", transitionservices);
about.addEventListener("click", transitionabout);
contact.addEventListener("click", transitioncontact);
