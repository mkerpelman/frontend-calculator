// Define basic math functions for two operands.

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
    case "-":
      return subtract(firstOperand, secondOperand);
    case "*":
      return multiply(firstOperand, secondOperand);
    case "/":
      return divide(firstOperand, secondOperand);
  };

}