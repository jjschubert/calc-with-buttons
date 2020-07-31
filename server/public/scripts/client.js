$(document).ready(readyNow);

let operator;

function readyNow() {
    console.log('jq connected');
    //click listeners
    $('#equalsBtn').on('click', sendEquation);
    $('#plusBtn').on('click', addPlus);
    $('#minusBtn').on('click', addMinus);
    $('#multBtn').on('click', addMult);
    $('#divBtn').on('click', addDiv);
    //write get equations and call here
    getEquationList();
}

console.log('js connected');

function getEquationList() {
    $.ajax({
        url: '/equations',
        method: 'GET',
    }).then(function (response) {
        $('#displayEquations').empty();
        console.log(response);
    })
}

function sendEquation() {
    console.log('in sendEquation');
    let equation = {
        firstInput: $('#firstNumIn').val(),
        secondInput: $('#secondNumIn').val(),
        operator: operator,
    }
    };

 
function addPlus() {
    operator = "+";
}
function addMinus() {
    operator = "-";
}
function addMult() {
    operator = "x";
}
function addDiv() {
    operator = "/";
}
