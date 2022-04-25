// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const modalContent = document.querySelector(".content");
const btnSubmit = document.querySelector(".btn-submit");
const first = document.getElementById("first");
const last = document.getElementById("last");
const firstPara = document.getElementById("first__para");

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
  if (!first.value) {
    e.preventDefault();
    let error = "Le champ ne peut pas être vide";
    errorMessage(first, error);
  } else if (first.value.length <= 2) {
    e.preventDefault();
    let error = "Veuillez entrer 2 caractères ou plus pour le champ du nom.";
    errorMessage(first, error);
  } else {
    let error = "";
    errorMessage(first, error);
    alert("Votre formulaire a bien été envoyé");
  }
}

// Create error message function

function errorMessage(elem, message) {
  const formErrorMessage = elem.parentElement;
  const error = document.querySelector("error");
  error.innerText = message;
  formErrorMessage.classList.add("error");
  return false;
}
