
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

    const char = getChar();

    if (char === "+") {

    } else if (
        char === "*" ||
        char === "/" ||
        char === "-"
    ) {
        removeChar();
        calculation += " + ";
    } else {
        calculation += " + ";
    }
    showCalculation();
}

min.onclick = function () {

    const char = getChar();

    if (char === "-") {

    } else if (
        char === "+"
    ) {
        removeChar();
        calculation += " - ";
    } else {
        calculation += " - ";
    }
    showCalculation();
}

multiply.onclick = function () {

    const char = getChar();

    if (char === "*") {

    } else if (
        char === "+" ||
        char === "/" ||
        char === "-"
    ) {
        removeChar();
        calculation += " * ";
    } else {
        calculation += " * ";
    }
    showCalculation();
}

divide.onclick = function () {

    const char = getChar();

    if (char === "/") {

    } else if (
        char === "*" ||
        char === "+" ||
        char === "-") {
        removeChar();
        calculation += " / ";
    } else {
        calculation += " / ";
    }
    showCalculation();
}

// get last character of the string 
function getChar() {
    if (calculation.length > 0) {
        return calculation.charAt(calculation.length - 2);
    } else {
        return 0;
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