"use strict";
// Sey varible for elements
const inputCardNameEl = document.querySelector(".form-card-name");
const inputCardNumberEl = document.querySelector(".form-card-number");
const inputCardMonthEl = document.querySelector(".form-card-month");
const inputCardYearEl = document.querySelector(".form-card-yea");
const confirmBtnEl = document.querySelector(".btn-confirm");
const cardFrontNameEl = document.querySelector(".cards-front-name");
const cardFrontNumberEl = document.querySelector(".cards-front-number");

//events listenner
inputCardNameEl.addEventListener("change", function () {
  cardFrontNameEl.textContent = inputCardNameEl.value.toUpperCase();
}); // Put input Name to Name Cards
inputCardNumberEl.addEventListener("change", function () {
  cardFrontNumberEl.textContent = inputCardNumberEl.value;
});
