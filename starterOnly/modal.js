// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const modalContent = document.querySelector(".content");
const btnSubmit = document.querySelector(".btn-submit");
const btnSignup = document.querySelector(".btn-signup");

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
  modalContent.style.display = "none";
  modalbg.style.display = "none";
});

// check if content was display
btnSignup.addEventListener("click", function () {
  if ((modalContent.style.display = "none")) {
    modalContent.style.display = "block";
  }
});

// disabled submit
function disabledButton(disabled) {
  if (!disabled) {
    btnSubmit.removeAttribute("disabled");
  } else {
    btnSubmit.setAttribute("disabled", true);
  }
}

// Validate form
function validate() {
  alert("bien envoyé");
}

document.getElementById("first").addEventListener("input", function () {
  if (document.getElementById("first").value.length < 2) {
    document.getElementById("first").style.background = "red";
    disabledButton(true);
  } else {
    document.getElementById("first").style.background = "green";
    disabledButton(false);
  }
});
