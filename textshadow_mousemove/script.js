"use strict";

const hero = document.querySelector(".hero");
const text = hero.querySelector("h1");
const walk = 100; // 100px

function shadow(e) {
  const { offsetWidth: width, offsetHeight: height } = hero;
  let { offsetX: x, offsetY: y } = e;

  if (this !== e.target) {
    x = x + e.target.offsetLeft;
    y = y + e.target.offsetTop;
  }

  const xWalk = Match.round((x / width) * walk - walk / 2);
  const yWalk = Match.round((y / width) * walk - walk / 2);
}

hero.addEventListener("mousemove", shadow);
