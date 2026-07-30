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

// all the buttons and their symbols
const symbols = {
    "add": "+",
    "divide": "÷",
    "subtract": "-",
    "clear": "AC",
    "nine": "9",
    "power": "^",
    "multiply": "×",
    "modulus": "%",
    "five": "5",
    "six": "6",
    "seven": "7",
    "eight": "8",
    "one": "1",
    "two": "2",
    "three": "3",
    "four": "4",
    "zero": "0",
    "period": ".",
    "sign-change": "+/-",
    "evaluate": "="
};
const buttonList = Array.from(document.getElementById("buttons-section").querySelectorAll("button"));
console.log(buttonList);
// assign the symbols to buttons
for (button of buttonList) {
    const id = button.id;
    button.textContent = symbols[id];
}