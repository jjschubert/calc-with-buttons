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
    $('#clearBtn').on('click', clearInputs);
    $('#0Btn').on('click', addZero);
    $('#1Btn').on('click', addOne);
    $('#2Btn').on('click', addTwo);
    $('#3Btn').on('click', addThree);
    $('#4Btn').on('click', addFour);
    $('#5Btn').on('click', addFive);
    $('#6Btn').on('click', addSix);
    $('#7Btn').on('click', addSeven);
    $('#8Btn').on('click', addEight);
    $('#9Btn').on('click', addNine);
    $('#decimalBtn').on('click', addDecimal);
    //write get equations and call here
    getEquationList();
}

console.log('js connected');


function clearInputs() {
    console.log('clear btn running');
    $('input').val('');
}

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
    equation.fullString = $('#numIn').val();
    $.ajax({
        method: 'POST',
        url: '/equations',
        data: equation
    }).then(function (response) {
        console.log(response);
        getEquationList();
        clearInputs();
    }
    )
};


function addPlus() {
    equation.operator = "+";
    $('#numIn').val($('#numIn').val() + '+');
}
function addMinus() {
    equation.operator = "-";
    $('#numIn').val($('#numIn').val() + '-');
}
function addMult() {
    equation.operator = "*";
    $('#numIn').val($('#numIn').val() + '*');
}
function addDiv() {
    equation.operator = "/";
    $('#numIn').val($('#numIn').val() + '/');
}

function addSeven() {
    $('#numIn').val($('#numIn').val() + '7');
}

function addEight() {
    $('#numIn').val($('#numIn').val() + '8');
}

function addNine() {
    $('#numIn').val($('#numIn').val() + '9');
}

function addZero() {
    $('#numIn').val($('#numIn').val() + '0');
}

function addOne() {
    $('#numIn').val($('#numIn').val() + '1');
}

function addTwo() {
    $('#numIn').val($('#numIn').val() + '2');
}

function addThree() {
    $('#numIn').val($('#numIn').val() + '3');
}

function addFour() {
    $('#numIn').val($('#numIn').val() + '4');
}

function addFive() {
    $('#numIn').val($('#numIn').val() + '5');
}

function addSix() {
    $('#numIn').val($('#numIn').val() + '6');
}

function addDecimal() {
    console.log('in addDecimal')
    $('#numIn').val($('#numIn').val() + ".");
}

// old functionality ex -- bypassed input, limited to single digits
// function addSeven() {
//     if (equation.hasOwnProperty('firstNum') === false) {
//         equation.firstNum = 7;
//     } else if (equation.hasOwnProperty('firstNum') === true) {
//         equation.secondNum = 7;
//     } else if (equation.hasOwnProperty('secondNum') === true) {
//         return false;
//     } console.log('in addSeven', equation);
// }

// //test code for server logic
// let str = "8+2"
// let first = str.split("+").pop();
// let second = str.split("+").shift();
// console.log(str)
// console.log(first);
// console.log(second);