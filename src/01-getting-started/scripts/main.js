import functions from './functions.js';
import calculations from './calculator.js'

const firstField = document.getElementById("num1");
const secondField = document.getElementById("num2");
const resultField = document.getElementById("result");
const plusBtn = document.getElementById("plusBtn");
const minusBtn = document.getElementById("minustBtn");
const multBtn = document.getElementById("multBtn");
const divBtn = document.getElementById("divBtn");
let num1, num2;


idNumber.addEventListener('change', (() => {
    idNumberSize.textContent = functions.size(idNumber.value);
}));

const userFace = {

    overFirstField: () => {
        firstField.value = "";
    },
    
    overSecondField: () => {
        secondField.value = "";
    },

    getNumber: () => {
        num1 = Number(firstField.value);
        num2 = Number(secondField.value);
    },

    displayResults : (result, operator) => {
        if ((isNaN(num1)) || (isNaN(num2))) {
            resultField.textContent = "Please enter two numbers!";
            return;
        };    
        resultField.textContent = (num1+ " " + operator + " " + num2+ " = " + result);
    },

    onPlusClicked: () => {
        userFace.getNumber();
        let result = calculations.add(num1, num2);
        userFace.displayResults(result, "+");
        return result; 
    },

    onMinusClicked: () => {
        userFace.getNumber();
        let result = calculations.subtract(num1, num2);
        userFace.displayResults(result, "-");
        return result;   
    },


    onMultiplicationClicked: () => {
        userFace.getNumber();
        let result = calculations.multiplication(num1, num2);
        userFace.displayResults(result, "*");
        return result;
    } ,

    onDivisionClicked: () => {
        userFace.getNumber();
        let result = calculations.division(num1, num2);
        userFace.displayResults(result, "/");
        return result;
    },
    
    onClearClicked: () => {
        firstField.value = "Type 1st Number";
        secondField.value = "Type 2nd Number";
        resultField.textContent ="";    
    }

};

clearBtn.addEventListener("click", userFace.onClearClicked);
firstField.addEventListener("click", userFace.overFirstField);
secondField.addEventListener("click", userFace.overSecondField);
plusBtn.addEventListener("click", userFace.onPlusClicked);
minusBtn.addEventListener("click", userFace.onMinusClicked);
multBtn.addEventListener("click", userFace.onMultiplicationClicked);
divBtn.addEventListener("click", userFace.onDivisionClicked);
