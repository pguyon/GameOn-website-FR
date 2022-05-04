// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const modalBody = document.querySelector(".modal-body");
// create variables for firstname validation
const first = document.getElementById("first");
const firstError = document.getElementById("first__error");
const firstRegError = document.getElementById("first__regex__error");
const firstValue = document.getElementById("first").value.trim();
// create variables for lastname validation
const last = document.getElementById("last");
const lastError = document.getElementById("last__error");
const lastRegError = document.getElementById("last__regex__error");
// create variables for email validation
const email = document.getElementById("email");
const emailError = document.getElementById("email__error");
const emailRegexError = document.getElementById("email__regex__error");
// create variables for date validation
const birth = document.getElementById("birthdate");
const birthError = document.getElementById("birth__error");
const invalidBirth = document.getElementById("invalidBirth__error");
// create variables for quantity validation
const quantityError = document.getElementById("quantity__error");
const quantity = document.getElementById("quantity");
// create variables for location validation
const locationError = document.getElementById("location__error");
// create variables for condition validaion
const conditionError = document.getElementById("checkbox__error");

function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// Regex email

const regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const regexText = /^[A-Za-z]+$/;

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
  // create variable to focus value and remove spaces
  const firstValue = document.getElementById("first").value.trim();
  // if empty value
  if (!firstValue) {
    //display the error message
    firstError.classList.remove("error");
    // add class for red border
    first.classList.add("error-text");
    // hide regex message error
    firstRegError.classList.add("regex__error");
    return false;
    // if value <= 2
  } else if (firstValue.length <= 2) {
    firstError.classList.remove("error");
    first.classList.add("error-text");
    firstRegError.classList.add("regex__error");
    return false;
  } else if (!regexText.test(firstValue)) {
    firstRegError.classList.remove("regex__error");
    firstError.classList.add("error");
    first.classList.add("error-text");
    return false;
    // if condition ok
  } else {
    firstError.classList.add("error");
    firstRegError.classList.add("regex__error");
    first.classList.remove("error-text");
    return true;
  }
}

// lastname validation {
function lastnameValidation() {
  const lastValue = document.getElementById("last").value.trim();
  if (!lastValue) {
    lastError.classList.remove("error");
    last.classList.add("error-text");
    lastRegError.classList.add("regex__error");
    return false;
  } else if (lastValue.length <= 2) {
    lastError.classList.remove("error");
    last.classList.add("error-text");
    lastRegError.classList.add("regex__error");
    return false;
  } else if (!regexText.test(lastValue)) {
    document;
    lastRegError.classList.remove("regex__error");
    last.classList.add("error-text");
    lastError.classList.add("error");
    return false;
  } else {
    lastError.classList.add("error");
    lastRegError.classList.add("regex__error");
    last.classList.remove("error-text");
    return true;
  }
}

// email validation
function emailValidation() {
  const emailValue = document.getElementById("email").value.trim();

  if (!emailValue) {
    emailError.classList.remove("error");
    emailRegexError.classList.add("regex__error");
    email.classList.add("error-text");
    return false;
  }
  // testing regex
  else if (!regexEmail.test(emailValue)) {
    emailRegexError.classList.remove("regex__error");
    email.classList.add("error-text");
    emailError.classList.add("error");
    return false;
  } else {
    emailRegexError.classList.add("regex__error");
    emailError.classList.add("error");
    email.classList.remove("error-text");
    return true;
  }
}

// date validation
function dateValidation() {
  const birthdateValue = document.getElementById("birthdate").value.trim();
  // create variable to pick up date
  const birthValue = new Date(document.getElementById("birthdate").value);
  // create a vaiable for toay
  const today = new Date();
  if (!birthdateValue) {
    birthError.classList.remove("error");
    birth.classList.add("error-text");
    invalidBirth.classList.add("regex__error");
    return false;
  }
  // compare choice and today
  else if (birthValue > today) {
    birthError.classList.add("error");
    invalidBirth.classList.remove("regex__error");
    birth.classList.add("error-text");
    return false;
  } else {
    birthError.classList.add("error");
    invalidBirth.classList.add("regex__error");
    birth.classList.remove("error-text");
    return true;
  }
}

// quantity validation
function quantityValidation() {
  const quantityValue = document.getElementById("quantity").value.trim();
  if (!quantityValue) {
    quantityError.classList.remove("error");
    quantity.classList.add("error-text");
    return false;
  }
  //check if it is a number
  else if (isNaN(quantityValue)) {
    quantityError.classList.remove("error");
    quantity.classList.add("error-text");
    return false;
  } else {
    quantityError.classList.add("error");
    quantity.classList.remove("error-text");
    return true;
  }
}

// location validation
function locationValidation() {
  const locationValue = document.querySelector(
    "input[name='location']:checked"
  );
  if (locationValue === null) {
    locationError.classList.remove("error");
    return false;
  } else {
    locationError.classList.add("error");
    return true;
  }
}

// ckeckbox validation
function checkboxValidation() {
  const checkboxValue = document.getElementById("checkbox1").checked;
  if (!checkboxValue) {
    conditionError.classList.remove("error");
    return false;
  } else {
    conditionError.classList.add("error");
    return true;
  }
}

// check all validation
function validate(e) {
  // check all validation
  firstnameValidation();
  lastnameValidation();
  emailValidation();
  dateValidation();
  quantityValidation();
  locationValidation();
  checkboxValidation();
  // if form is validate add confirm message
  if (
    firstnameValidation() &&
    lastnameValidation() &&
    emailValidation() &&
    dateValidation() &&
    quantityValidation() &&
    locationValidation() &&
    checkboxValidation()
  ) {
    e.preventDefault();
    confirmMessage();
  } else {
    // if not validate block the submit
    e.preventDefault();
  }
}

// add reload on button confirm
document
  .getElementById("confirm__submitBtn")
  .addEventListener("click", function () {
    window.location.reload();
  });

function confirmMessage() {
  const firstValue = document.getElementById("first").value.trim();
  console.log(firstValue);
  document.querySelector(".content__confirm").style.display = "block";
  document.querySelector(".content").style.display = "none";
}

function checkInput(
  inputValue,
  inputId,
  inputErrorMessage,
  inputRegexMessage,
  inputRegex
) {
  // if empty value
  if (!inputValue) {
    //display the error message
    inputErrorMessage.classList.remove("error");
    // add class for red border
    inputId.classList.add("error-text");
    // hide regex message error
    inputRegexMessage.classList.add("regex__error");
    return false;
    // if value <= 2
  } else if (inputValue.length <= 2) {
    inputErrorMessage.classList.remove("error");
    inputId.classList.add("error-text");
    inputRegexMessage.classList.add("regex__error");
    return false;
  } else if (!inputRegex.test(inputValue)) {
    inputErrorMessage.classList.add("error");
    inputId.classList.add("error-text");
    inputRegexMessage.classList.remove("regex__error");
    return false;
    // if condition ok
  } else {
    inputErrorMessage.classList.add("error");
    inputId.classList.remove("error-text");
    inputRegexMessage.classList.add("regex__error");
    return true;
  }
}
// checkInput(firstValue, first, firstError, firstRegError, regexText);
