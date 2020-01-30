"use strict";

const addItems = document.querySelector(".add-items");
const itemsList = document.querySelector(".plates");
const items = JSON.parse(localStorage.getItem("items")) || [];

function addItem(e) {
  e.preventDefault();
  const text = this.querySelector("[name=item]").value;
  const item = {
    text,
    done: false
  };
  items.push(item);
  populateList(items, itemsList);
  localStorage.setItem("items", JSON.stringify(items));
  this.reset();
}

function populateList(plates = [], platesList) {
  platesList.innerHTML = plates
    .map((plate, i) => {
      return `
      <li>
        <input type="checkbox" data-index=${i} id="items${i}" ${
        plate.done ? "checked" : ""
      } />
        <label for="items${i}">${plate.text}</label>
      </li>
    `;
    })
    .join("");
}

function toggleDone(e) {}

addItems.addEventListener("submit", addItem);
populateList(items, itemsList);
