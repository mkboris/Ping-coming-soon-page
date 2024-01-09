"use strict";

document
  .getElementById("emailForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    const email = document.getElementById("emailInput").value;
    const errorMessage = document.getElementById("errorMessage");
    const emailInput = document.getElementById("emailInput");
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email) {
      errorMessage.style.display = "block";
      errorMessage.textContent =
        "Whoops! It looks like you forgot to add your email";
      emailInput.classList.add("error-input");
      //   emailInput.placeholder = "example@email.com";
    } else if (!emailRegex.test(email)) {
      errorMessage.style.display = "block";
      errorMessage.textContent = "Please enter a valid email address";
      emailInput.classList.add("error-input");
      emailInput.placeholder = "example@email.com";
    } else {
      errorMessage.style.display = "none";
      errorMessage.textContent = "";
      emailInput.classList.remove("error-input");
      emailInput.placeholder = "Enter your email";
      location.reload(); // Refreshes the page
      alert("Thank you for subscribing");
    }
  });
