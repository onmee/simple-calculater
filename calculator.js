


// Create functions that populate the display when you click the number buttons, 
// you should be storing the 'display value' in a variable for use in the next step


// Calculator works as follows:
   // 1. First number is clicked, which is displayed and stored in a variable.
   // 2. An operator is clicked, resulting in a function being assigned to a variable.
   // 3. Second number is clicked, which is displayed and stored in a different variable .
   // 4. When equals is clicked, the operate function is called and with the above variables.
   // 5. Clicking AC clears all variables.



// When 0-9 is clicked, show number on the display 
// Add event listeners for each numeric button, then display the number in the inner html


// Operate function
function operate (operator, numA, numB) {
  result = operator(numA, numB)
  console.log(result)

}

// Mathematical operations
function add(a, b) {
    return a + b;
}
  
function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function power(a, b) {
    return a ** b;
}

operate(add, 10, 10);
operate(subtract, 10, 100);
operate(multiply, 10, 10);
operate(divide, 100, 10);