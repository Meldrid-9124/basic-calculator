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

function modulus (num1, num2) {
    if (num1 === Math.floor(num1) && num2 === Math.floor(num2))
        return num1 % num2;
    else 
        return "Only integers allowed!";
}

function power (base, exponent) {
    let result = 1;
    for (let i = 1; i < exponent; i++)
        result *= base;
    return result;
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