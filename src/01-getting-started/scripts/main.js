import functions from "./functions.js";
import {calculations} from "./calculator.js";
//import {taxCalculator} from "./taxCal.js";



idNumber.addEventListener('change', (() => {
    idNumberSize.textContent = functions.size(idNumber.value);
}));



    // user interface calculator 
const firstField = document.getElementById("num1");
const secondField = document.getElementById("num2");
const resultField = document.getElementById("result");
const plusBtn = document.getElementById("plusBtn");
const minusBtn = document.getElementById("minustBtn");
const multBtn = document.getElementById("multBtn");
const divBtn = document.getElementById("divBtn");


idNumber.addEventListener('change', (() => {
    idNumberSize.textContent = functions.size(idNumber.value);
}));

const userFace = {
    getNumber: () => {
        let num1 = Number(firstField.value);
        let num2 = Number(secondField.value);
        return {n1: num1, n2: num2};
    },

    displayResults : (numbers, result, operator) => { 
        resultField.textContent = (numbers.n1+ " " + operator + " " + numbers.n2+ " = " + result);
    },

    operations : (operator, calculation) => {
        let numbers = userFace.getNumber();   
        let result = calculations[calculation](numbers.n1, numbers.n2);
        userFace.displayResults(numbers, result, operator);
        return result;
    },

    onClearClicked: () => {
        firstField.value = "";
        secondField.value = "";
        resultField.textContent ="";      
    }
};

clearBtn.addEventListener("click", userFace.onClearClicked);
plusBtn.addEventListener("click", function() { userFace.operations("+", "add");});
minusBtn.addEventListener("click", function() { userFace.operations("-", "subtract");});
multBtn.addEventListener("click", function() { userFace.operations("*", "multiply");});
divBtn.addEventListener("click", function() { userFace.operations("/", "divide");});


// User interface Canadian Taxes

