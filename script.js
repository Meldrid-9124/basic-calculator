// operator and number global vars
let num1 = "0";
let num2 = "0";
let operator = "";

const display = document.querySelector("#display");

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
    let result;
    if (operator === "+")
        result = add(num1, num2);
    else if (operator === "-")
        result = subtract(num1, num2);
    // i will use / instead of divide symbol here
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
    if (display.textContent === "0")
        display.textContent = "";
    // if operator is undefined, update and display num1
    if (operator === "") {
        if (num1 === "0")
            num1 = "";
        num1 += symbols[numberButton.id];
        display.textContent = num1;
    }
    // else update and display num2
    else {
        if (num2 === "0")
            num2 = "";
        num2 += symbols[numberButton.id];
        display.textContent = num2;    // update the display
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
        })
    }
    // event listener for clear 
    const clearIndex = buttonList.findIndex((element) => element.id === "clear");
    buttonList[clearIndex].addEventListener('click', () => {
        // reset display and vars
        display.textContent = "0";
        num1 = "0";
        num2 = "0";
        operator = null;
    })
    // implement event listeners for the math operators
    const mathOperatorsList = document.querySelectorAll(".math-operator");
    for (let mathOperator of mathOperatorsList) {
        mathOperator.addEventListener('click', () => {
            // update operator var
            operator = symbols[mathOperator.id];
        })
    }
    // lastly, for evaluate button
    const evalBtn = document.querySelector("#evaluate");
    console.log(evalBtn);
    // this button will perform the operation
    evalBtn.addEventListener('click', () => {
        if (operator !== "") {
            const result = operate(operator, num1, num2);
            display.textContent = result;
        }
    })
}
implementButtons();
