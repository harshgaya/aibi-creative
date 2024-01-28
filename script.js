"use strict";

const buttonSubmit = document.querySelector(".submit-button");
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const closeModal = document.querySelector(".close-modal");
const menuOpen = document.querySelector(".hemburger-menu");
const menuClose = document.querySelector(".close-button");
const backdropMenus = document.querySelector(".backdrop-for-menu ");
const mobileMenus = document.querySelector(".mobile-menus");

buttonSubmit.addEventListener("click", function (e) {
  e.preventDefault();
  const name = document.querySelector(".name-input");
  const mobile = document.querySelector(".mobile-input");
  const message = document.querySelector(".message-input");

  if (
    name.value.length !== 0 ||
    mobile.value.length !== 0 ||
    message.value.length !== 0
  ) {
    modal.classList.remove("hidden");
    overlay.classList.remove("hidden");
    name.value = "";
    mobile.value = "";
    message.value = "";
  }
});
closeModal.addEventListener("click", function () {
  if (!modal.classList.contains("hidden")) {
    modal.classList.add("hidden");
    overlay.classList.add("hidden");
  }
});
overlay.addEventListener("click", function () {
  if (!overlay.classList.contains("hidden")) {
    modal.classList.add("hidden");
    overlay.classList.add("hidden");
  }
});
menuOpen.addEventListener("click", function () {
  if (backdropMenus.classList.contains("close-mobile-menu")) {
    backdropMenus.classList.remove("close-mobile-menu");
  }
});
menuClose.addEventListener("click", function () {
  if (!backdropMenus.classList.contains("close-mobile-menu")) {
    backdropMenus.classList.add("close-mobile-menu");
  }
});
backdropMenus.addEventListener("click", function () {
  if (!backdropMenus.classList.contains("close-mobile-menu")) {
    backdropMenus.classList.add("close-mobile-menu");
  }
});
