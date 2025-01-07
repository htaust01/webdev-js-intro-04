"use strict";

// Create your references to the html elements here
const ageInputEl = document.getElementById("age-input")
const submissionBtn = document.getElementById("submission-btn");
const response = document.getElementById("response");

// create a mutable variable called age and do not assign it a value.
let age;

function checkAgeAndRespond() {
    age = parseInt(ageInputEl.value);

    // Write your code below
    // For a simple task I prefer ternary expressions because they are less verbose
    response.innerText = age >= 21 ? "You can vote and purchase alcohol." :
                         age >= 18 ? "You can vote, but you cannot purchase alcohol." :
                         "You cannot vote and you cannot purchase alcohol."; // age < 18
}


submissionBtn.addEventListener("click", function () {
    checkAgeAndRespond();
});


function validateInput(event) {
    const invalidCharacters = ["e", "E", "-", "+"];
    if (invalidCharacters.includes(event.key)) {
        event.preventDefault();
    }
}

ageInputEl.addEventListener("keydown", validateInput);
