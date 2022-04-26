// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const modalContent = document.querySelector(".content");
const btnSubmit = document.querySelector(".btn-submit");

function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// Regex email

const regexEmail = /^^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// TODO #1
// Create variable
const closeModalButton = document.querySelectorAll(".close");
// add event listener on button
closeModalButton.forEach((btn) => btn.addEventListener("click", closeModal));
// display modal
function closeModal() {
  modalbg.style.display = "none";
}

// TODO #2
// firstname validation
function firstnameValidation() {
  // create variable to focus value
  const firstValue = document.getElementById("first").value.trim();
  // if empty value
  if (!firstValue) {
    document.getElementById("first__error").classList.remove("error");
    return false;
    // if value <= 2
  } else if (firstValue.length <= 2) {
    document.getElementById("first__error").classList.remove("error");
    return false;
    // if condition ok
  } else {
    document.getElementById("first__error").classList.add("error");
    return true;
  }
}

// lastname validation {
function lastnameValidation() {
  const lastValue = document.getElementById("last").value.trim();
  if (!lastValue) {
    document.getElementById("last__error").classList.remove("error");
    return false;
  } else if (lastValue.length <= 2) {
    document.getElementById("last__error").classList.remove("error");
    return false;
  } else {
    document.getElementById("last__error").classList.add("error");
    return true;
  }
}

// email validation
function emailValidation() {
  const emailValue = document.getElementById("email").value.trim();
  // testing regex
  if (!regexEmail.test(emailValue)) {
    document.getElementById("email__error").classList.remove("error");
    return false;
  } else {
    document.getElementById("email__error").classList.add("error");
    return true;
  }
}

function validate(e) {
  e.preventDefault();
  console.log("test");
  firstnameValidation();
  lastnameValidation();
  emailValidation();
}
