//*** define attributes / variables
// number
let num = 5;
// string
let myString = "Hola";

// boolean
let bool1 = true;
let bool2 = false;

// array
let weekdays = ["Mon", "Tue","Wed", "Thru", "Fri"];
let digits = [1, 2, 3, 4, 5];

// dictionary / objects
let user = {
    firstName : "Adriana",
    lastName : "Silva",
    isMarid : false,
    numKids : 0,
    motto : function() {console.log("Hakuna Matata")}
};

// undefined
function undef (a, b) {
    c = a + b;
};


// *** sample if / else
function  size (a) {
    if (a < 0) {
        return `${a} is negative`;
    } else if (a < 10) {
        return `${a} is small`;
    } else if (a < 19){
        return `${a} is medium`;
    } else if (a < 50) {
        return `${a} is large`;
    } else {
        return `${a} is extra-large`;
    };
};

// functions
// parameters
// returns

const compare = (a, b) => {
    if (a > b) return `${a} is greater than ${b}`;
    if (a < b) return `${a} is less than ${b}`;
    return `${a} is equal to ${b}`;
};



// ***arrays

// add to the front

// add to the end
// update values
// loops 
// for
// for/in
// while
// do while
// forEach (with array and function)
// Objects / Dictionaries
// declare object
// lookup key to retrieve value


export {size, compare};