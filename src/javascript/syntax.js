
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
            age : 34
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
    addToBeginingArray : (itemToAdd, array) => {
        array.unshift(itemToAdd);
        return array;

    },

// add to the end
    addToEndArray : (itemToAdd, array) => {
        array.push(itemToAdd);
        return array;

    },

// update values
    updateValue : (value) => {
        return value + 1;

    },

// loops 
// for
    forArray : (array) => {
        let myArray = [];
        for (let i = 0; i < array.length; i ++) {
            myArray.push(array[i] * 2);
        }
        return myArray;
    },

// for/in
    forInObj : () => {
        let key;
        let listKeys = [];
        let obj = {
            userName : 'Adriana',
            age : 33,
            gender: 'female',
            car : 'kia',
        }
        
        for (key in obj) {
            listKeys.push(key);
        }
        return listKeys;
    },

// while
    whileLopping : (array) => {
        let i = 0;
        let myArray2 = [];
        while (i < array.length) {
            myArray2.push(array[i] * 2);
            i ++;
        }
        return myArray2;
    },


// do while
    doWhileLopping : (array) => {
    let i = 0;
    let myArray3 = [];
     do {
        myArray3.push(array[i] * 2);
        i ++;
    } while (i < array.length)
    return myArray3;
},

// forEach (with array and function)
    forEachInArray : (array) => {
    let myArray4 = [];
    array.forEach (function (item) {
        myArray4.push(item * 2);
    });
    return myArray4;
},

// ***Objects / Dictionaries
// declare object
    objDeclaration : () => {
        function User (uName, age, gen, car) {
            this.userName = uName;
            this.age = age;
            this.gender = gen;
            this.car = car;
        }
        var user1 = new User('Adriana', 33, 'female', 'kia');
        return user1.userName;
    },

//lookup key to retrieve value
    keyLookUp : (obj) => {
        if (obj.hasOwnProperty('userName')) {
            return obj.userName;
        }
    }
};

export default functions;