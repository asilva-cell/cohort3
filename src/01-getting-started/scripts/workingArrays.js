
const jsArrays = {

    isNumber: (input) => {
        if (isNaN(input)) return true;
    },

    addToArray: (input, myArray) => {
        myArray.push(Number(input));
        return myArray;
    },

    showArray: (myArray) => {
        return myArray.join(', ');
    },
    
    totalArray: (myArray) => {
        let total = "";
        for (let num of myArray) {
            total = Number(total + num);
        }
        return total;
    },

    clearArray: (myArray) => {
        myArray = [];
        return myArray;
    }
};

export {jsArrays};