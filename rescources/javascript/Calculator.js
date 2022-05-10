let calculation = "0";

let calcHistory = []; // the calculated formulas 
let answerHistory = []; // the answers
let numElements = []; // elements of the numbers
let numIds = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'] // ids of the numbers

let output = document.getElementById('output'); // get the output screen 
var historys = document.getElementById('historys'); // get the history div

numIds.forEach(numId => {
    numElements.push(document.getElementById(numId));
})

// add the numbers to the calculation 
function addNumbers(number) {
    if (calculation === "0") {
        calculation = number;
    } else {
        calculation += number;
    }
    showCalculation();
}

// checks the id of the clicked button 
function check(event) {

    let i = 0;

    switch (event.target.id) {
        case "zero":
            i = "0";
            break;
        case "one":
            i = "1";
            break;
        case "two":
            i = "2";
            break;
        case "three":
            i = "3";
            break;
        case "four":
            i = "4";
            break;
        case "five":
            i = "5";
            break;
        case "six":
            i = "6";
            break;
        case "seven":
            i = "7";
            break;
        case "eight":
            i = "8";
            break;
        case "nine":
            i = "9";
            break;
    }

    addNumbers(i);
}

function addNumber(element) {

    element.onclick = function () {
        check(event);
    }
}

numElements.forEach(addNumber);

// factors
let plus = document.getElementById('plus');
let min = document.getElementById('min');
let multiply = document.getElementById('multiply');
let divide = document.getElementById('divide');
let calc = document.getElementById('calc');

// clear
let clear = document.getElementById('clear');
let CE = document.getElementById('CE');

clear.onclick = function () { // clears the calculation 
    calculation = "0";
    showCalculation();
}

CE.onclick = function () { // removes the first char of the calculation 

    if (calculation.length === 1) {

        if (calculation[0] === "0") {

        } else {
            calculation = "0";
        }

    } else {
        let firstChar = getChar(1);
        let secondChar = getChar(2);
        if (
            firstChar === "*" ||
            firstChar === "/" ||
            firstChar === "-" ||
            firstChar === "+"
            &&
            secondChar === "*" ||
            secondChar === "/" ||
            secondChar === "-" ||
            secondChar === "+"
        ) {
            calculation = calculation.slice(0, -3);
        } else if (
            firstChar === "*" ||
            firstChar === "/" ||
            firstChar === "-" ||
            firstChar === "+"
        ) {
            calculation = calculation.slice(0, -3);
        } else {
            calculation = calculation.slice(0, -1);
        }

    }

    showCalculation();
}

// add factors
plus.onclick = function () {

    const firstChar = getChar(1);
    const secondChar = getChar(2);

    if (firstChar === "+") {

    } else if (
        secondChar === "*" ||
        secondChar === "/" &&
        firstChar === "-"
    ) {

    } else if (
        firstChar === "*" ||
        firstChar === "/" ||
        firstChar === "-"
    ) {
        removeChar();
        calculation += " + ";
    } else {
        calculation += " + ";
    }
    showCalculation();
}

min.onclick = function () {

    const firstChar = getChar(1);

    if (firstChar === "-") {

    } else if (calculation === "0") {
        calculation = "-";
    } else if (
        firstChar === "+"
    ) {
        removeChar();
        calculation += " - ";
    } else {
        calculation += " - ";
    }
    showCalculation();
}

multiply.onclick = function () {

    const firstChar = getChar(1);
    const secondChar = getChar(2);

    if (firstChar === "*") {

    } else if (calculation.length === 1 &&
        firstChar === "-") {
        calculation = "0 * ";
    } else if (
        firstChar === "-" &&
        (secondChar === "*" ||
            secondChar === "/")
    ) {

    } else if (
        firstChar === "+" ||
        firstChar === "/" ||
        firstChar === "-"
    ) {
        removeChar();
        calculation += " * ";
    } else {
        calculation += " * ";
    }

    showCalculation();
}

divide.onclick = function () {

    const firstChar = getChar(1);
    const secondChar = getChar(2);

    if (firstChar === "/") {

    } else if (calculation.length === 1 &&
        firstChar === "-") {
        calculation = "0 / ";
    } else if (
        firstChar === "-" &&
        (secondChar === "*" ||
            secondChar === "/")
    ) {

    } else if (
        firstChar === "+" ||
        firstChar === "*" ||
        firstChar === "-"
    ) {
        removeChar();
        calculation += " / ";
    } else {
        calculation += " / ";
    }

    showCalculation();
}

// returns a character of a string
function getChar(position) {

    let noWhitespace = calculation.replaceAll(' ', '');

    if (noWhitespace.length > 0 && position <= 2) {
        let pos = noWhitespace.length - position;
        return noWhitespace[pos];
    } else if (noWhitespace.length > 2) {
        let pos = noWhitespace.length - position;
        return noWhitespace[pos];
    } else {
        return "0";
    }

}

// creates the list for the calculations that are done 
function createHistoryList() {

    let i = calcHistory.length - 1;

    if (i === 0) {
        document.getElementById('history').style.display = 'block';
    }

    var newDiv = document.createElement('div');
    newDiv.className = 'history';
    newDiv.innerHTML = calcHistory[i] + " = <span class='answer'>" + answerHistory[i] + "</span>";

    historys.appendChild(newDiv);
}

// calcs the output
calc.onclick = function () {

    calcHistory.push(calculation);
    calculation = eval(calculation);
    answerHistory.push(calculation);

    createHistoryList()

    showCalculation();
    calculation = "0";
}

function removeChar() {
    calculation = calculation.slice(0, -3);
}

function showCalculation() {
    output.innerHTML = calculation;
}