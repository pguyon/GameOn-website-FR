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

// Create error message function
function errorMessage(elem, message) {
  const formErrorMessage = elem.parentElement;
  const error = formErrorMessage.querySelector("error");
  error.innerText = message;
  formErrorMessage.classList.add("error");
  formErrorMessage.classList.remove("validate");
}

function validate() {
  modalBody.innerHTML = " Merci ! Votre réservation a bien été enregistrée.";
  modalBody.style.height = "600px";
  modalBody.style.paddingTop = "250px";
  modalBody.style.paddingLeft = "100px";
  modalBody.style.paddingRight = "100px";
}
