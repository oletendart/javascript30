"use strict";

const divs = document.querySelectorAll("div");

function logText(e) {
  console.log(this.classList.value);
}

document.body.addEventListener("click", logText);

divs.forEach(div => div.addEventListener("click", logText));
