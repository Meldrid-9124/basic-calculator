// operator and number states
let num1;
let num2;
let operator;

// basic math functions
function add (num1, num2) {
    return num1 + num2;
}

function subtract (num1, num2) {
    return num1 - num2;
}

function multiply (num1, num2) {
    return num1 * num2;
}

function divide (num1, num2) {
    return num1 / num2;
}

// operation handler
function operate(operator, num1, num2) {
    if (operator === "+")
        add(num1, num2);
    else if (operator === "-")
        subtract(num1, num2);
    // i will use / instead of divide symbol here
    else if (operator === "/")
        divide (num1, num2);
    else if (operator === "*")
        multiply (num1, num2);
    
}

