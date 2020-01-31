"use strict";

const hero = document.querySelector(".hero");
const text = hero.querySelector("h1");

function shadow(e) {
  const width = hero.offsetWidth;
  const height = hero.offsetHeight;

  const { offsetWidth: width, offsetHeight: height } = hero;
}

hero.addEventListener("mousemove", shadow);
