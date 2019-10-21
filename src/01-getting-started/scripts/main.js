import {functions} from "./functions.js";
import {calculations} from "./calculator.js";
import {taxCalculator} from "./taxCal.js";
import {jsArrays} from "./workingArrays.js";
import {jsDictionaries} from "./workingDictionaries.js";



idNumber.addEventListener('change', (() => {
    idNumberSize.textContent = functions.size(idNumber.value);
}));



    // USER INTERFACE FOR CALCULATOR
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


// USER INTERFACE FOR CANADIAN TAXES
const userIncome = document.getElementById("idIncome");
const calculateBtn = document.getElementById("idCalculate");

const userFaceTax = {
    getIncome: () => {
        let income = Number(userIncome.value);
        return income;
    },

    calculateTax: () => {
        let income = userFaceTax.getIncome();
        let payment = taxCalculator.calulateTax(income);
        idPayment.textContent = `Based on an income of $${income}, your Canadian Taxes is $${payment}.`;
        
    }
};

calculateBtn.addEventListener("click", function () {userFaceTax.calculateTax();});

// USER INTERFACE FOR WORKING WITH ARRAYS

const userArray = {
    getInput: (buttonName) => {
        let userInput = buttonName.value;
        return userInput;
    }
}
let myArray = [];
idAddToArray.addEventListener('click', (event) => {
    let input = idInputArray.value;
    if (jsArrays.isNumber(idInputArray.value)) {
        idMessageArray.textContent = 'The input is not a valid input.';
        idInputArray.value = "";
        return;
    };
    myArray = jsArrays.addToArray(input, myArray);
    idInputArray.value = "";
    idMessageArray.textContent = `${input} has been added to the list.`;   
});

idShowArray.addEventListener('click', (event) => {
    idMessageArray.textContent = `The numbers in your list are: ${jsArrays.showArray(myArray)}`;
});

idTotalArray.addEventListener('click', (event) => {
    idMessageArray.textContent = `The sum of your numbers is ${jsArrays.totalArray(myArray)}`;
});

idClearArray.addEventListener('click', (event) => {
    myArray = jsArrays.clearArray(myArray);
    idMessageArray.textContent = "";
});


// USER INTERFACE FOR WORKING WITH DICTIONARIES

LookupBtn.addEventListener('click', (event) => {
    let input = idInputDict.value;
    if (isNaN(input) && input.length === 2) {
        let userProv = jsDictionaries.provinceLookup(input);
        idInputDict.value = "";
        idMessageProvince.textContent = `${input.toUpperCase()} code corresponds to the province of ${userProv}.`;
        return;
    }else{
        idMessageProvince.textContent = 'The input is not a valid provice code.';
        idInputDict.value = "";    
    };
    
});
