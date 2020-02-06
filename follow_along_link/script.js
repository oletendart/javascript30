"use strict";

const triggers = document.querySelector("a");
const highlight = document.createElement("span");

highlight.classList.add("highlight");
document.body.append(highlight);

function highlightLink() {
  console.log("Highlight !!!");
}

triggers.forEach(a => a.addEventListener("mouseenter", highlightLink));
