// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const modalContent = document.querySelector(".content");
const btnSubmit = document.querySelector(".btn-submit");
const first = document.getElementById("first");
const last = document.getElementById("last");
const email = document.getElementById("email");
const quantity = document.getElementById("quantity");
const birth = document.getElementById("birthdate");
const location6 = document.getElementById("location6");
const checkbox2 = document.getElementById("checkbox2");

function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// Add function on close for display modal content and background content
document.querySelector(".close").addEventListener("click", function () {
  modalContent.setAttribute("hidden", true);
  modalbg.style.display = "none";
});

/* CLOSE MODAL */
// check if content was display
modalBtn.forEach((btn) =>
  btn.addEventListener("click", function () {
    if (modalContent.getAttribute("hidden")) {
      modalContent.removeAttribute("hidden");
    }
  })
);

// Create error message function

function errorMessage(elem, message) {
  const formErrorMessage = elem.parentElement;
  const error = formErrorMessage.querySelector("error");
  error.innerText = message;
  formErrorMessage.classList.add("error");
}

// Create valide message function
function validateMessage(elem, message) {
  const formValidateMessage = elem.parentElement;
  const validate = formValidateMessage.querySelector("error");
  validate.innerText = message;
  formValidateMessage.classList.add("validate");
}

// Regex valid email
const validEmail = (email) => {
  const regExEmail = /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})$/;
  return regExEmail.test(String(email).toLowerCase());
};

// validate location
function validateLocation() {
  const l1 = document.getElementById("location1").checked;
  const l2 = document.getElementById("location2").checked;
  const l3 = document.getElementById("location3").checked;
  const l4 = document.getElementById("location4").checked;
  const l5 = document.getElementById("location5").checked;
  const l6 = document.getElementById("location6").checked;
  if (!l1 && !l2 && !l3 && !l4 && !l5 && !l6) {
    errorMessage(location6, "Veuillez choisir une ville");
  } else {
    validateMessage(location6, "");
  }
}

// Validate condition checkbox
function validateCheckbox() {
  const check1 = document.getElementById("checkbox1").checked;
  const check2 = document.getElementById("checkbox2").checked;

  if (!check1 && !check2) {
    errorMessage(checkbox2, "Veuillez accepter les conditions");
  } else {
    validateMessage(checkbox2, "");
  }
}

function validateFirstname() {
  const firstValue = first.value.trim();
  //Check firstname
  if (!firstValue) {
    errorMessage(first, "Ce champs ne doit pas être vide");
    return false;
  } else if (firstValue.length <= 2) {
    errorMessage(
      first,
      "Veuillez entrer 2 caractères ou plus pour le champ du nom."
    );
    return false;
  } else {
    validateMessage(first, "");
    return true;
  }
}

function validateLastname() {
  const lastValue = last.value.trim();
  // check lastname
  if (!lastValue) {
    errorMessage(last, "Ce champs ne doit pas être vide");
    return false;
  } else if (lastValue.length <= 2) {
    errorMessage(
      last,
      "Veuillez entrer 2 caractères ou plus pour le champ du nom."
    );
    return false;
  } else {
    validateMessage(last, "");
    return true;
  }
}

function validateBirthdate() {
  const birthValue = birth.value.trim();
  // check birthdate
  if (!birthValue) {
    errorMessage(birth, "Ce champs ne doit pas être vide");
    return false;
  } else {
    validateMessage(birth, "");
    return true;
  }
}

// Validate input form
function validateInputs() {
  const emailValue = email.value.trim();
  const quantityValue = quantity.value.trim();

  validateFirstname();
  validateLastname();
  validateBirthdate();
  validateLocation();
  validateCheckbox();

  // check email
  if (!emailValue) {
    errorMessage(email, "Ce champs ne doit pas être vide");
  } else if (!validEmail(emailValue)) {
    errorMessage(email, "email invalide");
  } else {
    validateMessage(email, "");
  }

  // check quantity
  if (!quantityValue) {
    errorMessage(quantity, "Ce champs ne doit pas être vide");
  } else if (isNaN(quantityValue)) {
    errorMessage(quantity, "Vous devez saisir un nombre");
  } else if (quantityValue < 0) {
    errorMessage(quantity, "Vous devez saisir un nombre positif");
  } else {
    validateMessage(quantity, "");
  }
}
// Validate form
function validate(e) {
  e.preventDefault();
  validateInputs();
}
