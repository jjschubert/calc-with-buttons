const express = require('express');
const bodyParser = require('body-parser')
const app = express();
const PORT = 5000;

let equationArray = [];

// This must be added before GET & POST routes.
app.use(bodyParser.urlencoded({ extended: true }));

// Serve up static files (HTML, CSS, Client JS)
app.use(express.static('server/public'));

//get equationArray
app.get('/equations', function (req, res) {
    console.log('got to get /equations');
    res.send(equationArray);
}
)

let stringEquation;

// //object from dom example - 
// firstNum: 8
// operator: "+"
// secondNum: 7

// /test code for server logic
// let str = "8+2"
// let first = str.split("+").pop();
// let second = str.split("+").shift();
// console.log(str)
// console.log(first);
// console.log(second);
// //POST
app.post('/equations', (req, res) => {
    let equation = req.body;
    let outcome;
    let equationString = equation.fullString;
  
    //in each condition, remove operator, set remaining string to Number, then secondNum;
    if (equation.operator === "+") {
        let firstNum = Number(equationString.split("+").pop());
        let secondNum = Number(equationString.split("+").shift());
        outcome = firstNum + secondNum;
        stringEquation = `${firstNum} + ${secondNum} = ${outcome}`
    } else if (equation.operator === "-") {
        outcome = firstNum - secondNum;
    } else if (equation.operator === "*") {
        outcome = firstNum * secondNum;
        stringEquation = `${firstNum} * ${secondNum} = ${outcome}`;
    } else if (equation.operator === "/") {
        outcome = firstNum / secondNum;
        stringEquation = `${firstNum} / ${secondNum} = ${outcome}`;
    }
    let equationObj = { //double check and see if this can be simplified now
        equationAsString: stringEquation, //printing undefined
        calcOutcome: outcome, //working
    };

    equationArray.push(equationObj);
    res.sendStatus(201);
});

//listener
app.listen(PORT, () => {
    console.log('Server is running on port', PORT)
  });