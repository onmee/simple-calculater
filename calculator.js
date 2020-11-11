// Calculator works as follows:
   // 1. First number is clicked, which is displayed and stored in index 0.
   // 2. An operator is clicked, resulting in that function being atored in index 1.
   // 3. Second number is clicked, which is displayed and stored in a different index 2.
   // 4. When equals is clicked, the operate function, which performs the calculatio is called.
   // 5. AC clears array.
   // 6. Delete remove last digit.

   // Extra : Syntax error when = is pressed without having firstNum -> operand -> secondNum in order


// Default display is 0 
let form = document.getElementById("display")
form.innerHTML = 0;


// Array to store numbers and operator functions
let calcArray = [];

// Initialise index with empty string before appending, 
// as otherwise values will be appended to 'undefined'

calcArray[0] = ""; //First number input
calcArray[2] = ""; //Second number input


// Add event listeners for each numeric button, 
// then display the numbers clicked in the inner html.
let numbers = document.querySelectorAll('.number');

numbers.forEach((number => number.addEventListener('click', () => {
 
    if (calcArray[0] === "" || typeof calcArray[1] === 'undefined') {
        calcArray[0] += number.textContent
        form.innerHTML = calcArray[0]
    } else {
        calcArray[2] += number.textContent
        form.innerHTML = calcArray[2]
    }
} )))


// Clear numbers on display when AC is clicked
let reset = document.querySelector('.clear')
reset.addEventListener('click', () => {
    form.innerHTML = 0
    calcArray = []
    calcArray[0] = ""; 
    calcArray[2] = ""; 

})

// When delete is clicked, remove the last digit
let undo = document.querySelector('.delete')
undo.addEventListener('click', () => {
    
    if (calcArray[0] === "" || calcArray[2] === "") {
        calcArray[0] = calcArray[0].slice(0,-1)
        form.innerHTML = calcArray[0]
    } else {
        calcArray[2] = calcArray[2].slice(0,-1)
        form.innerHTML = calcArray[2]
    }

})


// Clicking the plus button
let plus = document.querySelector('.add')
plus.addEventListener('click', () => {
    calculate() //Perform calculation on previous number
    calcArray[1] = add;
    form.innerHTML = calcArray[0]
})

// Clicking the subtract button
let minus = document.querySelector('.sub')
    minus.addEventListener('click', () => {
    calculate();
    calcArray[1] = subtract;
    form.innerHTML = calcArray[0]
})

// Clicking the multiply button
let times = document.querySelector('.multi')
times.addEventListener('click', () => {
    calculate();
    calcArray[1] = multiply;
    form.innerHTML = calcArray[0]
})

// Clicking the divide button
let division = document.querySelector('.divide')
division.addEventListener('click', () => {
    calculate();
    calcArray[1] = divide;
    form.innerHTML = calcArray[0]
})

// Clicking the power button
let exponent = document.querySelector('.power')
    exponent.addEventListener('click', () => {
    calculate();
    calcArray[1] = power;
    form.innerHTML = calcArray[0]
})


// When equals is clicked call operate
let equals = document.querySelector('.equal')
equals.addEventListener('click', () => {
    calculate();
})

// Function that calls operate whenever the array is full.
// So that after a number, operator and number are entered, a calculation is performed.

function calculate () {
    if (calcArray[2] !== "") {
        result = operate(calcArray[0], calcArray[1], calcArray[2])
        calcArray[0] = result.toString()
        calcArray[2] = ""
        form.innerHTML = calcArray[0]
    }
    else return;
}


// Operate function
function operate (numA, operator, numB) {
  return operator(numA, numB)
}

// Mathematical operations
function add(x, y) { return parseFloat(x) + parseFloat(y);}
  
function subtract(x, y) { return x - y; }

function multiply(x, y) { return x * y; }

function divide(x, y) {
     
    return x / y; 
}

function power(x, y) { return x ** y; }
