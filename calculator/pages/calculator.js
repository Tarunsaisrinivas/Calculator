let resultElement = document.getElementById('result');
let isDarkMode = false;

function appendToResult(value) {
    resultElement.value += value;

}

function calculate() {
    try {
        resultElement.value = eval(resultElement.value);
    } catch (error) {
        resultElement.value = 'Error';
    }
}

function clearResult() {
    resultElement.value = '';
}

function square() {
    var result = document.getElementById('result');
    result.value = Math.pow(eval(result.value), 2);
}

function reciprocal() {
    var result = document.getElementById('result');
    result.value = 1 / eval(result.value);
}

function deleteLastCharacter() {
    let resultElement = document.getElementById('result');
    let result = resultElement.value;
    resultElement.value = result.slice(0, -1);
}




























































/*
//converting the calculator light-mode to dark including numbers
function toggleMode() {
    let calculator = document.querySelector('.calculator');
    calculator.classList.toggle('dark-mode');
    isDarkMode = !isDarkMode;

}*/
/*
//converting the numbers to white and the body also activating toggle mode 
function toggleMode() {
    var body = document.querySelector('body');
    var calculator = document.querySelector('.calculator');
    var numbers = document.querySelectorAll('.calculator button');

    body.classList.toggle('dark-mode');
    calculator.classList.toggle('dark-mode');

    if (body.classList.contains('dark-mode')) {
        // If dark mode is activated, set font color to white
        calculator.style.color = 'white';
        numbers.forEach(function (number) {
            number.style.color = 'white';
        });
    } else {
        // If dark mode is deactivated, revert font color to default
        calculator.style.color = '';
        numbers.forEach(function (number) {
            number.style.color = '';
        });
    }
}*/

function toggleMode() {
    var calculator = document.querySelector('.calculator');
    var numbers = calculator.querySelectorAll('button');

    calculator.classList.toggle('dark-mode');

    if (calculator.classList.contains('dark-mode')) {
        // If dark mode is activated, set font color to white
        calculator.style.color = 'white';
        numbers.forEach(function (number) {
            number.style.color = 'white';
        });
    } else {
        // If dark mode is deactivated, revert font color to default
        calculator.style.color = '';
        numbers.forEach(function (number) {
            number.style.color = '';
        });
    }
}




/*function toggleMode() {
    let calculator = document.querySelector('.calculator');
    if (toggleElement.checked) {
        calculator.classList.add('dark-mode');
    } else {
        calculator.classList.remove('dark-mode');
    }
}*/
