
let calculated = 0;
let calculation = "0";

// the output screen
let output = document.getElementById('output');

//history
let historys = document.getElementById('historys');

// numbers 
let one = document.getElementById('one');
let two = document.getElementById('two');
let three = document.getElementById('three');
let four = document.getElementById('four');
let five = document.getElementById('five');
let six = document.getElementById('six');
let seven = document.getElementById('seven');
let eight = document.getElementById('eight');
let nine = document.getElementById('nine');
let zero = document.getElementById('zero');

// factors
let plus = document.getElementById('plus');
let min = document.getElementById('min');
let multiply = document.getElementById('multiply');
let divide = document.getElementById('divide');
let calc = document.getElementById('calc');

// clear
let clear = document.getElementById('clear');
let CE = document.getElementById('CE');

clear.onclick = function () {
    calculation = "0";
    showCalculation();
}

// add numbers 
function addNumbers(number) {
    if (calculation === "0") {
        calculation = number;
    } else {
        calculation += number;
    }
    showCalculation();
}

one.onclick = function () {
    addNumbers("1")
}

two.onclick = function () {
    addNumbers("2")
}

three.onclick = function () {
    addNumbers("3")
}

four.onclick = function () {
    addNumbers("4")
}

five.onclick = function () {
    addNumbers("5")
}

six.onclick = function () {
    addNumbers("6")
}

seven.onclick = function () {
    addNumbers("7")
}

eight.onclick = function () {
    addNumbers("8")
}

nine.onclick = function () {
    addNumbers("9")
}

zero.onclick = function () {
    addNumbers("0")
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

// calc the output
calc.onclick = function () {
    calculation = eval(calculation);
    showCalculation();
    calculation = "0";
}

function removeChar() {
    calculation = calculation.slice(0, -3);
}

function showCalculation() {
    output.innerHTML = calculation;
}