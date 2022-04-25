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
  let error;
  if (!first.value) {
    e.preventDefault();
    error = "Le champ ne peut pas être vide";
    firstPara.innerText = error;
    return false;
  }
  if (0 > first.value.length <= 2) {
    e.preventDefault();
    error = "Veuillez entrer 2 caractères ou plus pour le champ du nom.";
    firstPara.innerText = error;
    return false;
  }

  alert("Votre formulaire a bien été envoyé");
}
