"use strict";
const inputCardNameEl = document.querySelector(".form-card-name");
const inputCardNumberEl = document.querySelector(".form-card-number");
const inputCardMonthEl = document.querySelector(".form-card-month");
const inputCardYearEl = document.querySelector(".form-card-yea");
const confirmBtnEl = document.querySelector(".btn-confirm");
const cardFrontNameEl = document.querySelector(".cards-front-name");

inputCardNameEl.addEventListener("change", function () {
  console.log(inputCardNameEl.value);
  cardFrontNameEl.textContent = inputCardNameEl.value;
  console.log(cardFrontNameEl);
});
