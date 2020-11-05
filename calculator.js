


// Create functions that populate the display when you click the number buttons, 
// you should be storing the 'display value' in a variable for use in the next step


// Calculator works as follows:
   // 1. First number is clicked, which is displayed and stored in a variable.
   // 2. An operator is clicked, resulting in a function being assigned to a variable.
   // 3. Second number is clicked, which is displayed and stored in a different variable .
   // 4. When equals is clicked, the operate function is called and with the above variables.
   // 5. Clicking AC clears all variables.

   // Extra : Syntax error when = is pressed without having firstNum -> operand -> secondNum in order


//innerHTML set to 0 globally?
let form = document.getElementById("display")
form.innerHTML = 0;
let firstNum = '';
let secondNum = '';

// Empty Number Array
let calcArray = [];

// When 0-9 is clicked, show number on the display 
// Add event listeners for each numeric button, then display the numbers clicked in the inner html
let numbers = document.querySelectorAll('.number');

numbers.forEach((number => number.addEventListener('click', () => {
 
    firstNum += number.textContent
    calcArray[0] = firstNum
    form.innerHTML = calcArray[0]
} )))

// If Array is undefined, add number 1st, else use secondNum
// Or if, Array[0] is not undefined then use secondNum

// Clear numbers on display when AC is clicked -> Set innerHTML to 0
let reset = document.querySelector('.clear')
reset.addEventListener('click', () => {
    form.innerHTML = 0
    calcArray = []
    //firstNum = ''
})

// When delete is clicked, remove the last number
let undo = document.querySelector('.delete')
undo.addEventListener('click', () => {
    //firstNum = firstNum.slice(-1,1); //Remove last number
    //firstNum.pop()
    firstNum = firstNum.slice(0,-1)
    form.innerHTML = firstNum
    console.log(firstNum)
})




// Use case or for/if loop to assign correct mathematical function to a variable
// When an operator is clicked, the correct function is added to the calcArray

// Clicking the + button

let plus = document.querySelector('.add')
plus.addEventListener('click', () => {
    calcArray[1] = add;
})



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

//operate(add, 10, 10);
//operate(subtract, 10, 100);
//operate(multiply, 10, 10);
//operate(divide, 100, 10);