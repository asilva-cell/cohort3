
const buttonField = document.getElementById("inputBtn");
const inputField = document.getElementById("userInput");
const printResult = document.getElementById("textSize");
const title = document.getElementById("title");
const originalTitle = title.textContent;



function onButtonClecked(){
    let result = Number(inputField.value);
    let resultSize = size(result);
    printResult.textContent = resultSize;
   
};


function size(num){
    if (num < 10){
        return "small";
    }
    else if (num <=19){
        return "med";
    }
    else {
        return "large"
    }
};

function onTitle() {
    title.textContent=("Canada");
}

function offTitle() {
    title.textContent = originalTitle;
}


buttonField.addEventListener("click", onButtonClecked);
title.addEventListener("mouseover", onTitle);
title.addEventListener("mouseleave", offTitle);

