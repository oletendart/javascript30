"use strict";

const triggers = document.querySelector("a");
const highlight = document.createElement("span");

highlight.classList.add("highlight");
document.body.append(highlight);

function highlightLink() {
  const linkCoords = this.getBoudingClientRect();
  console.log(linkCoords);
  highlight.style.width = `${linkCoords.width}px`;
  highlight.style.height = `${linkCoords.height}px`;
  highlight.style.transform = `translate(${linkCoords.left}px, ${linkCoords.top}px)`;
}

triggers.forEach(a => a.addEventListener("mouseenter", highlightLink));
