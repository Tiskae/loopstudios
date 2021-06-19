"use strict";

const openMobileSidebarBtn = document.querySelector(".header__nav--btn");
const closeMobileSidebarBtn = document.querySelector(".sidedrawer__nav--btn");
const sidedrawer = document.querySelector(".sidedrawer");

const toggleSidedrawer = () => {
    sidedrawer.classList.toggle("open");
};

[openMobileSidebarBtn, closeMobileSidebarBtn].forEach((el) =>
    el.addEventListener("click", toggleSidedrawer)
);
