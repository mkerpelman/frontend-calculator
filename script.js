let currentOperand = "";
let calculation = {};

// Call all document elements relevant to calculator UI.
const numericalButtons = document.querySelectorAll('.digit');
const operatorButtons = document.querySelectorAll('.operator');
const clearButton = document.querySelector('#clear-all');
const equalsButton = document.querySelector('#equals');
const displayScreen = document.querySelector('#output');

// Add event listener to all numerical buttons such that a press calls the processNumber function with the button's numerical value as an argument.
numericalButtons.forEach((button) => {
  button.addEventListener('click', () => {
    currentOperand += button.value;
    display(currentOperand);
  });
})

// Add event listener to the clear button such that a press clears the current operand and clears the screen accordingly.
clearButton.addEventListener('click', () => {
  calculation = {};
  currentOperand = "";
  display(currentOperand);
})

operatorButtons.forEach((button) => { 
  button.addEventListener('click', () => {
    calculation['firstOperand'] = currentOperand;
    calculation['operator'] = button.value;
    currentOperand = "";
    display(currentOperand);
  })
})

equalsButton.addEventListener('click', () => {
  calculation['secondOperand'] = currentOperand;
  currentOperand = operate(calculation['operator'], Number(calculation['firstOperand']), Number(calculation['secondOperand']));
  display(currentOperand);
})

// Allow inputted number to be displayed on calculator's display.
function display(number) {
  displayScreen.textContent = number;
}

/**
 * Applies the desired operation to two operands by calling the appropraite basic math function defined above.
 *
 * @param {string} operator The operator applied to the below two params.
 * @param {number} firstOperand The operand on the left-hand side of the expression.
 * @param {number} secondOperand The operand on the right-hand side of the expression.
 * @return {number} Result of the calculation performed.
 */
function operate(operator, firstOperand, secondOperand) {
  
  switch (operator) {
    case "+":
      return add(firstOperand, secondOperand);
    case "−":
      return subtract(firstOperand, secondOperand);
    case "×":
      return multiply(firstOperand, secondOperand);
    case "÷":
      return divide(firstOperand, secondOperand);
  };
}

// Defines basic math functions for two operands.

function add(firstOperand, secondOperand) {
  return firstOperand + secondOperand;
}

function subtract(firstOperand, secondOperand) {
  return firstOperand - secondOperand;
}

function multiply(firstOperand, secondOperand) {
  return firstOperand * secondOperand;
}

function divide(firstOperand, secondOperand) {
  return firstOperand / secondOperand;
}