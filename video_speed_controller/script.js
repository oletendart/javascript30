"use strict";

const speed = document.querySelector(".speed");
const bar = speed.querySelector(".speed-bar");
const video = document.querySelector(".flex");

speed.addEventListener("mousemove", function(e) {
  const y = e.pageY - this.offsetTop;
  console.log(y);
});
