// Calculator works as follows:
   // 1. First number is clicked, which is displayed and stored in index 0.
   // 2. An operator is clicked, resulting in that function being stored in index 1.
   // 3. Second number is clicked, which is displayed and stored in a different index 2.
   // 4. When equals is clicked, the operate function, which performs the calculation is called.
   // 5. AC clears array.
   // 6. Delete removes last digit.



// Default display is 0 
let form = document.getElementById("display")
form.innerHTML = 0;


// Global array to store numbers and operator functions
let calcArray = [];

// Initialise index with empty string before appending, 
// as otherwise values will be appended to 'undefined'

calcArray[0] = ""; //First number
calcArray[2] = ""; //Second number


// Add event listeners for each numeric button, 
// then display the numbers clicked in the inner html.
let numbers = document.querySelectorAll('.number');

numbers.forEach((number => number.addEventListener('click', () => {
    
    if (checkLength() === true) {
    } else if (calcArray[0] === "" || typeof calcArray[1] === 'undefined') {
        checkDot(calcArray[0])
        calcArray[0] += number.textContent
        form.innerHTML = calcArray[0]
    } else {
        checkDot(calcArray[2])
        calcArray[2] += number.textContent
        form.innerHTML = calcArray[2]
    }
} )))



// Keyboard support for numbers 0-9 and '.'
// If keydown event matches regex of characters then display the key, and 
// display dot only once in each number.
const regex = /[0-9.]/g;
const regex2 = /[0-9]/g;
document.addEventListener('keydown', (event) => {

    let keyName = ""

    if (!calcArray[0].includes('.')) {
        keyName = event.key.match(regex)
    } else if (typeof calcArray[1] !== 'undefined' && !calcArray[2].includes('.')){
        keyName = event.key.match(regex)
    } else {
        keyName = event.key.match(regex2)
    }

    // Check number string doesn't exceed limit
    // Add numbers to relevant array indexes 
    if (checkLength() === true) { 
    } else if (keyName !== null && (calcArray[0] === "" || typeof calcArray[1] === 'undefined')) {
        calcArray[0] += keyName
        form.innerHTML = calcArray[0]
    } else if (keyName !== null){
        calcArray[2] += keyName
        form.innerHTML = calcArray[2]
    }
})



// Clear numbers on display when AC is clicked
let reset = document.querySelector('.clear')
reset.addEventListener('click', () => {
    form.innerHTML = 0
    calcArray = []
    calcArray[0] = ""; // Create a 'clear' function and call the function only
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
    calculate() //Perform calculation on previous numbers 
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


// When equals is clicked call calculate
let equals = document.querySelector('.equal')
equals.addEventListener('click', () => {
    calculate();
})


// If decimal exists in number string then disable button
function checkDot(string) {
    if (string.includes('.')) {
        document.getElementById("decimal").disabled = true;
    } else {
        document.getElementById("decimal").disabled = false;
    }
}

// Function that calls operate whenever the array is complete.
// So that after a number, operator and number are entered, a calculation is performed.
// Error messages when numbers exceed display limit or when operation performed without all numbers.
function calculate () {
    if (calcArray[2] !== "") {
        result = operate(calcArray[0], calcArray[1], calcArray[2])
        result = parseFloat(result.toFixed(4)) //Round to 2 d.p, and use parseFloat to remove trailing 0's
        calcArray[0] = result.toString()
        calcArray[2] = ""
        if (checkLength() === true) {
        } else {
            form.innerHTML = calcArray[0]
        }
    }
    else if (calcArray[0] === "" || calcArray[2] === "" ) {
        form.innerHTML = "Syntax Error"
    }
    else return;
}


// Display error message when number of characters exceed 11
function checkLength () {
    if (calcArray[0].length > 10 || calcArray[2].length > 10) {
        form.innerHTML = 'Screen Limit';
        return true;
    }
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
    if (y <= 0) {
        form.innerHTML = `So you've chosen &#9760;`
    } else {
        return x / y;    
    }
}

function power(x, y) { return x ** y; }
