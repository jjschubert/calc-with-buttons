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
//POST
app.post('/equations', (req, res) => {
    let equation = req.body;
    let outcome;
    let firstNum = Number(equation.firstNum);
    let secondNum = Number(equation.secondNum);
    if (equation.operator === "+") {
        outcome = firstNum + secondNum;
        stringEquation = `${firstNum} + ${secondNum} = ${outcome}`;
    } else if (equation.operator === "-") {
        outcome = firstNum - secondNum;
        stringEquation = `${firstNum} - ${secondNum} = ${outcome}`;
    } else if (equation.operator === "*") {
        outcome = firstNum * secondNum;
        stringEquation = `${firstNum} * ${secondNum} = ${outcome}`;
    } else if (equation.operator === "/") {
        outcome = firstNum / secondNum;
        stringEquation = `${firstNum} / ${secondNum} = ${outcome}`;
    }
    let equationObj = {
        equationAsString: stringEquation,
        calcOutcome: outcome,
    };

    equationArray.push(equationObj);
    res.sendStatus(201);
});

//listener
app.listen(PORT, () => {
    console.log('Server is running on port', PORT)
  });