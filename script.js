// operator and number states
let num1 = 0;
let num2 = 0;
let operator;

// basic math functions
function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    return num1 / num2;
}

function modulus(num1, num2) {
    if (num1 === Math.floor(num1) && num2 === Math.floor(num2))
        return num1 % num2;
    else
        return "Only integers allowed!";
}

function power(base, exponent) {
    let result = 1;
    for (let i = 1; i < exponent; i++)
        result *= base;
    return result;
}

function changeSign(number) {
    return number * -1;
}

// operation handler
function operate(operator, num1, num2) {
    if (operator === "+")
        add(num1, num2);
    else if (operator === "-")
        subtract(num1, num2);
    // i will use / instead of divide symbol here
    else if (operator === "/")
        divide(num1, num2);
    else if (operator === "*")
        multiply(num1, num2);
    else if (operator === "%")
        modulus(num1, num2);
    else if (operator === "^")
        power(num1, num2);
}

// all the buttons and their symbols
const symbols = {
    "zero": "0",
    "one": "1",
    "two": "2",
    "three": "3",
    "four": "4",
    "five": "5",
    "six": "6",
    "seven": "7",
    "eight": "8",
    "nine": "9",
    "add": "+",
    "divide": "÷",
    "subtract": "-",
    "clear": "AC",
    "power": "^",
    "multiply": "×",
    "modulus": "%",
    "period": ".",
    "sign-change": "+/-",
    "evaluate": "="
};
const buttonList = Array.from(document.getElementById("buttons-section").querySelectorAll("button"));
// assign the symbols to buttons
for (const button of buttonList) {
    const id = button.id;
    button.textContent = symbols[id];
}

// event listeners for the numbers
const numberButtons = Array.from(document.querySelectorAll(".number"));
console.log(numberButtons);
for (const numberButton of numberButtons) {
    numberButton.addEventListener("click", () => {
    console.log("ID test: ", numberButton.id)
    console.log("Test: ", symbols[numberButton.id])
    })
}