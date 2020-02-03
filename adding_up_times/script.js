"use strict";

const timeNodes = document.querySelector("[data-time]");

const seconds = timeNodes.map(node => node.dataset.time);
