let calculation = '';
const outputElem = document.querySelector('.output');

function updateCalculation (calculationValue){
  calculation += calculationValue;
  console.log(calculation);
  outputElem.innerHTML = calculation;
  !calculation ? outputElem.innerHTML = '' : outputElem.innerHTML = calculation;
}