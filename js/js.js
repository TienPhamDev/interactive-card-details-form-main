"use strict";
// Set varible for elements
const inputCardNameEl = document.querySelector(".form-card-name");
const inputCardNumberEl = document.querySelector(".form-card-number");
const inputCardMonthEl = document.querySelector(".form-card-month");
const inputCardYearEl = document.querySelector(".form-card-yea");
const confirmBtnEl = document.querySelector(".btn-confirm");
const cardFrontNameEl = document.querySelector(".cards-front-name");
const cardFrontNumberEl = document.querySelector(".cards-front-number");
const warningEl = document.querySelector(".warning");
//events listenner
inputCardNameEl.addEventListener("change", function () {
  cardFrontNameEl.textContent = inputCardNameEl.value.toUpperCase();
}); // Put input Name to Name Cards
inputCardNumberEl.addEventListener("change", function () {
  if (inputCardNumberEl.value.match(/[0-9]/g)) {
    cardFrontNumberEl.textContent = `${inputCardNumberEl.value.slice(
      0,
      4
    )} ${inputCardNumberEl.value.slice(4, 8)} ${inputCardNumberEl.value.slice(
      8,
      12
    )} ${inputCardNumberEl.value.slice(12, 16)}`;
  } else {
    warningEl.classList.remove("hidden");
  }
});
