"use strict";

const nav = document.querySelector(".main");
const topOfNav = nav.offsetTop;

function fixNav(e) {
  console.log(topOfNav);
}
window.addEventListener("scroll", fixNav);
