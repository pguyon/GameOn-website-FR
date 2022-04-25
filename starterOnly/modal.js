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
// disabled submit
// function disabledButton(disabled) {
//   if (!disabled) {
//     btnSubmit.removeAttribute("disabled");
//   } else {
//     btnSubmit.setAttribute("disabled", true);
//   }
// }
/* *************** */

// Validate form
function validate(e) {
  e.preventDefault();
  validateInputs();
}

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

// Validate input form
function validateInputs() {
  const firstValue = first.value.trim();
  const lastValue = last.value.trim();
  const emailValue = email.value.trim();
  const quantityValue = quantity.value.trim();
  const birthValue = birth.value.trim();

  //Check firstname
  if (!firstValue) {
    errorMessage(first, "Ce champs ne doit pas être vide");
  } else if (firstValue.length <= 2) {
    errorMessage(
      first,
      "Veuillez entrer 2 caractères ou plus pour le champ du nom."
    );
  } else {
    validateMessage(first, "");
  }

  // check lastname
  if (!lastValue) {
    errorMessage(last, "Ce champs ne doit pas être vide");
  } else if (lastValue.length <= 2) {
    errorMessage(
      last,
      "Veuillez entrer 2 caractères ou plus pour le champ du nom."
    );
  } else {
    validateMessage(last, "");
  }

  // check email
  if (!emailValue) {
    errorMessage(email, "Ce champs ne doit pas être vide");
  } else if (!validEmail(emailValue)) {
    errorMessage(email, "email invalide");
  } else {
    validateMessage(email, "");
  }

  // check birthdate
  if (!birthValue) {
    errorMessage(birth, "Ce champs ne doit pas être vide");
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
