import functions from './functions.js';
import calculations from './calculator.js'

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

    operations : (operator) => {
        let numbers = userFace.getNumber();
        let result = NaN    
       
        if ((isNaN(numbers.n1)) || (isNaN(numbers.n2))) {
            resultField.textContent = "Please enter two numbers!";
            return;
        }
        else if (operator === "+") {
            result = calculations.add(numbers.n1, numbers.n2);
        }
        else if (operator === "-") {
            result = calculations.subtract(numbers.n1, numbers.n2);
        }
        else if (operator === "*") {
            result = calculations.multiplication(numbers.n1, numbers.n2);
        }
        else{
            result = calculations.division(numbers.n1, numbers.n2);
        }
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
plusBtn.addEventListener("click", function() { userFace.operations("+");});
minusBtn.addEventListener("click", function() { userFace.operations("-");});
multBtn.addEventListener("click", function() { userFace.operations("*");});
divBtn.addEventListener("click", function() { userFace.operations("/");});
