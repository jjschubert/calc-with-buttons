$(document).ready(readyNow);

let operator;
let equation = {}

function readyNow() {
    console.log('jq connected');
    //click listeners
    $('#equalsBtn').on('click', sendEquation);
    $('#plusBtn').on('click', addPlus);
    $('#minusBtn').on('click', addMinus);
    $('#multBtn').on('click', addMult);
    $('#divBtn').on('click', addDiv);
    // $('#clearBtn').on('click', clearInputs);
    $('#7Btn').on('click', addSeven);
    $('#8Btn').on('click', addEight);
    $('#9Btn').on('click', addNine);
    //write get equations and call here
    getEquationList();
}

console.log('js connected');

function addSeven() {
    if (equation.hasOwnProperty('firstNum') === false) {
        equation.firstNum = 7;
    } else if (equation.hasOwnProperty('firstNum') === true) {
        equation.secondNum = 7;
    } else if (equation.hasOwnProperty('secondNum') === true) {
        return false;
    } console.log('in addSeven', equation);
}

function addEight() {
    if (equation.hasOwnProperty('firstNum') === false) {
        equation.firstNum = 8;
    } else if (equation.hasOwnProperty('firstNum') === true) {
        equation.secondNum = 8;
    } else if (equation.hasOwnProperty('secondNum') === true) {
        return false;
    } console.log('in addEight', equation);
}

function addNine() {
    if (equation.hasOwnProperty('firstNum') === false) {
        equation.firstNum = 9;
    } else if (equation.hasOwnProperty('firstNum') === true) {
        equation.secondNum = 9;
    } else if (equation.hasOwnProperty('secondNum') === true) {
        return false;
    } console.log('in addNine', equation);
}

// function clearInputs() {
//     console.log('clear btn running');
//     $('input').val('');
// }

function getEquationList() {
    $.ajax({
        url: '/equations',
        method: 'GET',
    }).then(function (response) {
        $('#displayEquations').empty();
        $('#displayCalcOutcome').empty();
        console.log(response);
        for (let i = 0; i < response.length; i++) {
            // let equation = response[i];
            $('#displayEquations').append(
                `<li>${response[i].equationAsString}</li>`
            );
        }
        $('#displayCalcOutcome').append(response[response.length - 1].calcOutcome);
    })
}

function sendEquation() {
    console.log('in sendEquation');
    $.ajax({
        method: 'POST',
        url: '/equations',
        data: equation
    }).then(function (response) {
        console.log(response);
        getEquationList();
    }
    )
};


function addPlus() {
    equation.operator = "+";
}
function addMinus() {
    equation.operator = "-";
}
function addMult() {
    equation.operator = "*";
}
function addDiv() {
    equation.operator = "/";
}
