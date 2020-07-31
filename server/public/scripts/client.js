$(document).ready(readyNow);

function readyNow() {
    console.log('jq connected');
    $('#equalsBtn').on('click', sendEquation);
}

console.log('js connected');

function sendEquation() {
    console.log('in sendEquation');
    let equation = {
        firstInput: $('#firstNumIn').val(),
        secondInput: $('#secondNumIn').val(),
        operator
    }
}