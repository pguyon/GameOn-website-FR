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
// FORM_INPUT firstname validation
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

//FORM_INPUT lastname validation {
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

//FORM_INPUT email validation
function emailValidation() {
  const emailValue = document.getElementById("email").value.trim();

  // if the field is empty we add the error message of the empty field and remove the error message from the regex if it is present
  if (!emailValue) {
    emailError.classList.remove("error");
    emailRegexError.classList.add("regex__error");
    email.classList.add("error-text");
    return false;
  }

  // if the email does not meet the conditions of the regex, we add the regex error message and remove the empty field error message if it is present
  else if (!regexEmail.test(emailValue)) {
    emailRegexError.classList.remove("regex__error");
    email.classList.add("error-text");
    emailError.classList.add("error");
    return false;
  }

  //if no errors all error messages are removed
  else {
    emailRegexError.classList.add("regex__error");
    emailError.classList.add("error");
    email.classList.remove("error-text");
    return true;
  }
}

//FORM_INPUT date validation
function dateValidation() {
  const birthdateValue = document.getElementById("birthdate").value.trim();
  // create variable to pick up date
  const birthValue = new Date(document.getElementById("birthdate").value);
  // create a vaiable for today
  const today = new Date();

  //if the field is empty we add the error message and remove the date error message if it is present
  if (!birthdateValue) {
    birthError.classList.remove("error");
    birth.classList.add("error-text");
    invalidBirth.classList.add("regex__error");
    return false;
  }

  // we compare the date of birth and the current date, if the date of birth
  // is greater than the current date we add the error message and we remove the error message from the free field if it is present
  else if (birthValue > today) {
    birthError.classList.add("error");
    invalidBirth.classList.remove("regex__error");
    birth.classList.add("error-text");
    return false;
  }

  //if the conditions are met, all error messages are removed
  else {
    birthError.classList.add("error");
    invalidBirth.classList.add("regex__error");
    birth.classList.remove("error-text");
    return true;
  }
}

//FORM_INPUT quantity validation
function quantityValidation() {
  const quantityValue = document.getElementById("quantity").value.trim();

  //we check if the field is empty, if not we display the error message while removing the number check error message
  if (!quantityValue) {
    quantityError.classList.remove("error");
    quantity.classList.add("error-text");
    return false;
  }
  //we check if the value is a number, if not, we add the error message of the number while removing the error message of the empty field
  else if (isNaN(quantityValue)) {
    quantityError.classList.remove("error");
    quantity.classList.add("error-text");
    return false;
  }
  //if the conditions are met, all error messages are removed
  else {
    quantityError.classList.add("error");
    quantity.classList.remove("error-text");
    return true;
  }
}

//FORM_CHECKBOX location validation
function locationValidation() {
  //creation of a variable for the selected fields
  const locationValue = document.querySelector(
    "input[name='location']:checked"
  );

  //if no fields are selected, the error message appears
  if (locationValue === null) {
    locationError.classList.remove("error");
    return false;
  }
  //if the condition is met, the error message is removed
  else {
    locationError.classList.add("error");
    return true;
  }
}

//FORM_CHECKBOX ckeckbox validation
function checkboxValidation() {
  // creation of a variable to check if the condition is checked
  const checkboxValue = document.getElementById("checkbox1").checked;

  //If the condition is not checked, the error message appears
  if (!checkboxValue) {
    conditionError.classList.remove("error");
    return false;
  }
  //If the condition is checked, the error message will disappear
  else {
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
