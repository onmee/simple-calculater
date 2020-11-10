


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

// If Array is undefined, add number 1st, else use secondNum
// Or if, Array[0] is not undefined then use secondNum
let numbers = document.querySelectorAll('.number');

numbers.forEach((number => number.addEventListener('click', () => {
 
    if (calcArray.length == 0 || typeof calcArray[1] === 'undefined') {
        firstNum += number.textContent
        calcArray[0] = firstNum
        form.innerHTML = calcArray[0]
    } else {
        secondNum += number.textContent
        calcArray[2] = secondNum
        form.innerHTML = calcArray[2]
    }
} )))


// Clear numbers on display when AC is clicked -> Set innerHTML to 0
let reset = document.querySelector('.clear')
reset.addEventListener('click', () => {
    form.innerHTML = 0
    firstNum = ''
    secondNum = ''
    calcArray = []
    //firstNum = ''
})

// When delete is clicked, remove the last number
let undo = document.querySelector('.delete')
undo.addEventListener('click', () => {
    //Remove last number
    firstNum = firstNum.slice(0,-1)
    form.innerHTML = firstNum
})




// Use case or for/if loop to assign correct mathematical function to a variable
// When an operator is clicked, the correct function is added to the calcArray

// Clicking the plus button
let plus = document.querySelector('.add')
plus.addEventListener('click', () => {
    output() //Perform calculation on previous number
    calcArray[1] = add;
    //form.innerHTML = `&plus;` //Show the operator
    //output();
    form.innerHTML = calcArray[0]
})

// Clicking the subtract button
let minus = document.querySelector('.sub')
    minus.addEventListener('click', () => {
    output();
    calcArray[1] = subtract;
    //output();
    //form.innerHTML = `&minus;`
    form.innerHTML = calcArray[0]
})

// Clicking the multiply button
let times = document.querySelector('.multi')
times.addEventListener('click', () => {
    output();
    calcArray[1] = multiply;
    //output();
    //form.innerHTML = `&times;`
    form.innerHTML = calcArray[0]
})

// Clicking the divide button
let division = document.querySelector('.divide')
division.addEventListener('click', () => {
    output();
    calcArray[1] = divide;
    //form.innerHTML = `&divide;`
    //output();
    form.innerHTML = calcArray[0]
})

// Clicking the power button
let exponent = document.querySelector('.power')
    exponent.addEventListener('click', () => {
    output();
    calcArray[1] = power;
    //output();
    //form.innerHTML = 
    form.innerHTML = calcArray[0]
})



// When equals is clicked call operate
let equals = document.querySelector('.equal')
equals.addEventListener('click', () => {
    
    output();
    //result = operate(calcArray[0], calcArray[1], calcArray[2])
    //secondNum = ''
    //calcArray[0] = result
    //form.innerHTML = calcArray[0]
})

// Function that calls operate whenever the array is full, and one of the operators is clicked.
// So that after a number, operator and number are entered, a calculation is performed.

function output () {
    if (typeof calcArray[2] !== 'undefined') {
        result = operate(calcArray[0], calcArray[1], calcArray[2])
        secondNum = ''
        calcArray[0] = result
        calcArray[2] = 0
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

function divide(x, y) { return x / y; }

function power(x, y) { return x ** y; }

//operate(add, 10, 10);
//operate("5","5")
//operate(subtract, 10, 100);
//operate(multiply, 10, 10);
//operate(divide, 100, 10);
//operate(divide, 100, 10);