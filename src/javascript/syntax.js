
const functions = {


//*** define attributes / variables
// number

    xnumber : (num) => {
        return num;
    },
        
// string
    myString : (string) => {
        return string;
    },


// boolean
    bool : (int1, int2) => {
        if (int1 > int2) return true;
        return false;
    },

// array

    array : (array) => {
        return array;
    },



// dictionary / objects
    dict : () => {
        return {
            userName : "Adriana",
            age : age
        }

    },

// undefined
    undef : (a, b) => {
        a + b;
    },


// *** sample if / else

    size : (a) => {
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
        }
    },


// ***functions
// parameters
// // returns
    paraReturn : (a, b) => {
        let c = a + b;
        return c;
    },

// ***arrays
// add to the front
    addToArray : (itemToAdd, array) => {

    }

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
};

export default functions;