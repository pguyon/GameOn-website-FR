// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const modalBody = document.querySelector(".modal-body");

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
  // create variable to focus value
  const firstValue = document.getElementById("first").value.trim();
  // if empty value
  if (!firstValue) {
    document.getElementById("first__error").classList.remove("error");
    document.getElementById("first").classList.add("error-text");
    return false;
    // if value <= 2
  } else if (firstValue.length <= 2) {
    document.getElementById("first__error").classList.remove("error");
    document.getElementById("first").classList.add("error-text");
    return false;
  } else if (!regexText.test(firstValue)) {
    document
      .getElementById("first__regex__error")
      .classList.remove("regex__error");
    document.getElementById("first").classList.add("error-text");
    return false;
    // if condition ok
  } else {
    document.getElementById("first__error").classList.add("error");
    document
      .getElementById("first__regex__error")
      .classList.add("regex__error");
    document.getElementById("first").classList.remove("error-text");
    return true;
  }
}

// lastname validation {
function lastnameValidation() {
  const lastValue = document.getElementById("last").value.trim();
  if (!lastValue) {
    document.getElementById("last__error").classList.remove("error");
    document.getElementById("last").classList.add("error-text");
    return false;
  } else if (lastValue.length <= 2) {
    document.getElementById("last__error").classList.remove("error");
    document.getElementById("last").classList.add("error-text");
    return false;
  } else {
    document.getElementById("last__error").classList.add("error");
    document.getElementById("last").classList.remove("error-text");
    return true;
  }
}

// email validation
function emailValidation() {
  const emailValue = document.getElementById("email").value.trim();
  // testing regex
  if (!regexEmail.test(emailValue)) {
    document.getElementById("email__error").classList.remove("error");
    document.getElementById("email").classList.add("error-text");
    return false;
  } else {
    document.getElementById("email__error").classList.add("error");
    document.getElementById("email").classList.remove("error-text");
    return true;
  }
}

// date validation
function dateValidation() {
  const birthValue = document.getElementById("birthdate").value.trim();
  if (!birthValue) {
    document.getElementById("birth__error").classList.remove("error");
    document.getElementById("birthdate").classList.add("error-text");
    return false;
  } else {
    document.getElementById("birth__error").classList.add("error");
    document.getElementById("birthdate").classList.remove("error-text");
    return true;
  }
}

// quantity validation
function quantityValidation() {
  const quantityValue = document.getElementById("quantity").value.trim();
  if (!quantityValue) {
    document.getElementById("quantity__error").classList.remove("error");
    document.getElementById("quantity").classList.add("error-text");
    return false;
  } else if (isNaN(quantityValue)) {
    document.getElementById("quantity__error").classList.remove("error");
    document.getElementById("quantity").classList.add("error-text");
    return false;
  } else {
    document.getElementById("quantity__error").classList.add("error");
    document.getElementById("quantity").classList.remove("error-text");
    return true;
  }
}

// location validation
function locationValidation() {
  const locationValue = document.querySelector(
    "input[name='location']:checked"
  );
  if (locationValue === null) {
    document.getElementById("location__error").classList.remove("error");
    return false;
  } else {
    document.getElementById("location__error").classList.add("error");
    return true;
  }
}

// ckeckbox validation
function checkboxValidation() {
  const checkboxValue = document.getElementById("checkbox1").checked;
  if (!checkboxValue) {
    document.getElementById("checkbox__error").classList.remove("error");
    return false;
  } else {
    document.getElementById("checkbox__error").classList.add("error");
    return true;
  }
}

function validate(e) {
  if (
    firstnameValidation() &&
    lastnameValidation() &&
    emailValidation() &&
    dateValidation() &&
    quantityValidation() &&
    locationValidation() &&
    checkboxValidation()
  ) {
    // if validate add text confirmation
    const modalBobyBtn = document.createElement("button");
    modalBody.appendChild(modalBobyBtn);
    modalBobyBtn.innerText = "Fermer";
    modalBobyBtn.style.padding = "15px";
    modalBody.innerText = " Merci pour votre inscription.";
    modalBody.style.height = "600px";
    modalBody.style.paddingTop = "50%";
    modalBody.style.textAlign = "center";
    return true;
  } else {
    // if not validate block the submit
    e.preventDefault();
    return false;
  }
}
