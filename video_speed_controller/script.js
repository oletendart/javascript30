"use strict";

const speed = document.querySelector(".speed");
const bar = speed.querySelector(".speed-bar");
const video = document.querySelector(".flex");

speed.addEventListener("mousemove", function(e) {
  const y = e.pageY - this.offsetTop;
  const percent = y / this.offsetHeight;
  console.log(y);
  console.log(percent);
});
