// operator and number global vars
let num1 = "0";
let num2 = "0";
let operator = "";
let globalResult = "";
// false means num1 is selected; true means num2 is selected
let selectedNum = false;
// this var will keep track of previous operator to reset its color
let previousOperator = "";

const display = document.querySelector("#display");

// basic math functions
function add(num1, num2) {
    return Number(num1) + Number(num2);
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    if (num2 == 0)
        return "Undefined"
    return (num1 / num2).toFixed(9);
}

function modulus(num1, num2) {
    let number1 = Number(num1);
    let number2 = Number(num2);
    if (number1 === Math.floor(number1) && number2 === Math.floor(number2))
        return number1 % number2;
    else
        return "Only integers allowed!";
}

function power(base, exponent) {
    let result = 1;
    console.log("base: ", base);
    console.log("Exponent: ", exponent);
    for (let i = 0; i < exponent; i++) {
        console.log("Result in loop: ", result);
        result *= base;
    }
    console.log("Result of power: ", result);
    return result;
}


// operation handler
function operate(operator, num1, num2) {
    let result;
    if (operator === "+")
        result = add(num1, num2);
    else if (operator === "-")
        result = subtract(num1, num2);
    else if (operator === "÷")
        result = divide(num1, num2);
    else if (operator === "×")
        result = multiply(num1, num2);
    else if (operator === "%")
        result = modulus(num1, num2);
    else if (operator === "^")
        result = power(num1, num2);
    return result;
}

// get input and show on display
function inputNumber(numberButton, symbols) {
    const display = document.querySelector("#display");
    // initial check for display
    if (display.textContent == 0)
        display.textContent = "";
    const hasOperator = operator !== "";
    const hasResult = globalResult !== "";
    // if operator is not selected and there is no result, select num1
    if (!hasOperator && !globalResult)
        selectedNum = false;
    // for num2 => !operator-selected  && result || operator-selected && !result 
    // use XOR operation
    else if (hasOperator !== hasResult)
        selectedNum = true;
    if (!selectedNum) {
        if (num1 == 0)
            num1 = "";
        num1 += symbols[numberButton.id];
        display.textContent = num1;
    }
    else {
        if (hasResult) {
            num1 = globalResult;
            num2 = "0";
        }
        if (num2 === "0")
            num2 = "";
        num2 += symbols[numberButton.id];
        previousOperator.style.backgroundColor = "#373c3e"
        display.textContent = num2;
    }
}


// assigns labels and event listeners to buttons
function implementButtons() {
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
    for (const numberButton of numberButtons) {
        numberButton.addEventListener("click", () => {
            inputNumber(numberButton, symbols);
            console.log("num1: ", num1, "\nnum2: ", num2);
            console.log("operator: ", operator);
        })
    }
    // event listener for clear 
    const clearIndex = buttonList.findIndex((element) => element.id === "clear");
    buttonList[clearIndex].addEventListener('click', () => {
        // reset display and vars
        display.textContent = "0";
        num1 = "0";
        num2 = "0";
        operator = "";
        globalResult = "";
        previousOperator.style.backgroundColor = "#373c3e";
        previousOperator = "";
    })
    // implement event listeners for the math operators
    const mathOperatorsList = document.querySelectorAll(".math-operator");
    for (let mathOperator of mathOperatorsList) {
        mathOperator.addEventListener('click', () => {
            // first evaluate the current operation if it exists
            if (num1 && num2 && operator) {
                num1 = operate(operator, num1, num2);
                num2 = "";
                display.textContent = num1;
            }
            // update operator var
            operator = symbols[mathOperator.id];
            // highlight the operator button
            highlightOperator(mathOperator);
            console.log("num1: ", num1, "\nnum2: ", num2);
            console.log("operator: ", operator);
        })
    }
    // change sign operator
    const signChangeBtn = document.querySelector("#sign-change");
    signChangeBtn.addEventListener('click', () => {
        if (!selectedNum) {
            num1 = num1 * -1;
            display.textContent = num1;
        }
        else {
            num2 = num2 * -1;
            display.textContent = num2;
        }
        operator = "";
    })
    // lastly, for evaluate button
    const evalBtn = document.querySelector("#evaluate");
    // this button will perform the operation
    evalBtn.addEventListener('click', () => {
        if (operator !== "") {
            globalResult = operate(operator, num1, num2);
            display.textContent = globalResult;
            console.log("Displayed result: ", globalResult)
        }
    })
}
implementButtons();

function highlightOperator(mathOperator) {
    // reset previous operator's color and highlight new one
    if (previousOperator !== "") {
        // reset the previous and track the current operator
        previousOperator.style.backgroundColor = "#373c3e";
        previousOperator = mathOperator;
    }
    // if no previous operator currently, track it
    else
        previousOperator = mathOperator;
    mathOperator.style.backgroundColor = "#00BB00"
}

