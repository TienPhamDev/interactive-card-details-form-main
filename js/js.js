"use strict";
// Set varible for elements
const inputCardNameEl = document.querySelector(".form-card-name");
const inputCardNumberEl = document.querySelector(".form-card-number");
const inputCardMonthEl = document.querySelector(".form-card-month");
const inputCardYearEl = document.querySelector(".form-card-year");
const confirmBtnEl = document.querySelector(".btn-confirm");
const cardFrontNameEl = document.querySelector(".cards-front-name");
const cardFrontNumberEl = document.querySelector(".cards-front-number");
const cardFrontMonthEl = document.querySelector(".cards-front-month");
const warningMonthYearEl = document.querySelector(".warning--mm-yy");
const warningEl = document.querySelector(".warning");
//function
const cardNumberStrFormat = (str) =>
  `${str.value.slice(0, 4)} ${str.value.slice(4, 8)} ${str.value.slice(
    8,
    12
  )} ${str.value.slice(12, 16)}`; //this function to format numbers "0000 0000 0000 0000"
//events listenner
inputCardNameEl.addEventListener("change", function () {
  cardFrontNameEl.textContent = inputCardNameEl.value.toUpperCase();
}); // from form Name card to Name Cards
inputCardNumberEl.addEventListener("change", function () {
  if (
    inputCardNumberEl.value.match(/[0-9]/g) &&
    inputCardNumberEl.value.length === 16
  ) {
    cardFrontNumberEl.textContent = cardNumberStrFormat(inputCardNumberEl);

    inputCardNumberEl.value = cardNumberStrFormat(inputCardNumberEl);
    console.log(inputCardNumberEl.textContent);
    warningEl.classList.add("hidden");
  } else {
    warningEl.classList.remove("hidden");
  }
}); // from form card number to Card Number
inputCardMonthEl.addEventListener("change", function () {
  if (
    inputCardMonthEl.value.match(/[0-9]/g) &&
    inputCardMonthEl.value.length === 2 &&
    inputCardMonthEl.value < 12 &&
    inputCardMonthEl.value > 0
  ) {
    cardFrontMonthEl.textContent = inputCardMonthEl.value;
    warningMonthYearEl.classList.add("hidden");
  } else {
    warningMonthYearEl.classList.remove("hidden");
  }
});
