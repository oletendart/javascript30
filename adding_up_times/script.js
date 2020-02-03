"use strict";

const timeNodes = Array.from(document.querySelector("[data-time]"));

const seconds = timeNodes.map(node => node.dataset.time);
