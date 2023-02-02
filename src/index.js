import './css/styles.css';
import GalacticAge from './age-calc.js';

function getAgeCalcs() {
  const myAge = document.querySelector("input#age").value;
  const pastAge = document.querySelector("input#past-age").value;
  const futureAge = document.querySelector("input#future-age").value;
  const myGalacticAge = new GalacticAge(myAge, pastAge, futureAge);
  document.getElementById("output1").innerHTML = myGalacticAge.listAges();
  document.getElementById("output2").innerHTML = myGalacticAge.listYearsSince();
  document.getElementById("output3").innerHTML = myGalacticAge.listYearsUntil();
  document.getElementById("print-past-age").innerHTML = pastAge;
  document.getElementById("print-future-age").innerHTML = futureAge;
}

//UI Logic
function handleFormSubmission(event) {
  event.preventDefault();
  getAgeCalcs();
}

window.addEventListener("load", function() {
  document.querySelector("form").addEventListener("submit", handleFormSubmission);
});