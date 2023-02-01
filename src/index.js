import './css/styles.css';
import GalacticAge from './age-calc.js';

function getAgeCalcs() {

}

//UI Logic
function handleFormSubmission(event) {
  event.preventDefault();
  getAgeCalcs();
}

window.addEventListener("load", function() {
  this.document.querySelector("form").addEventListener("submit", handleFormSubmission);
})