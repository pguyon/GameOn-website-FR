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
  formErrorMessage.classList.remove("validate");
}

// Create valide message function
function validateMessage(elem, message) {
  const formValidateMessage = elem.parentElement;
  const validate = formValidateMessage.querySelector("error");
  validate.innerText = message;
  formValidateMessage.classList.add("validate");
  formValidateMessage.classList.remove("error");
}

function validate() {}
