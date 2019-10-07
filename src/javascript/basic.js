console.log("Hello world from basic.js")

const buttonField =  document.getElementById("pushBtn");
const inputField = document.getElementById("userInput");
buttonField.addEventListener("click", onButtonClicked);


function onButtonClicked (){
    let result = Number(inputField.value);
    alert(size(result));
};

function size(num){
    if (num < 10){
        return "small";
    }
    else if (num <=19){
        return "med";
    }
    else {
       return "large";
    }
}


