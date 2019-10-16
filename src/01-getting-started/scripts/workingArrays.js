
const jsArrays = {
    createArray: () => {
        let myArray = [];
        return myArray;
    },

    addToArray: (myArray, input) => {
        if (isNaN(input)) { 
            console.log('The input is not a valid number');
            return false;
        };
        myArray.push(input);
        console.log(`${input} has been added to the array`);
        return myArray;
    },

    showArray: (myArray) => {
        console.log(myArray.join(', '));
        return myArray.join(', ');
    },
    
    totalArray: (myArray) => {
        // console.log(myArray.join(', '));
        return myArray;
    },

    clearArray: (myArray) => {
        // console.log(myArray.join(', '));
        return myArray;
    }
        


};

export {jsArrays};