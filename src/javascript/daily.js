


//my first function to test

// Write the function after this comment ---

const functions = {

    //PREPARED FOR ARRAY - 2019/10/15
    forArray : (array) => {
        let myArray = [];
        for (let i = 0; i < array.length; i ++) {
            myArray.push(array[i] * 2);
        }
        return myArray;
    },

    whileLopping : (array) => {
        let i = 0;
        let myArray2 = [];
        while (i < array.length) {
            myArray2.push(array[i] * 2);
            i ++;
        }
        return myArray2;
    },

    doWhileLopping : (array) => {
        let i = 0;
        let myArray3 = [];
         do {
            myArray3.push(array[i] * 2);
            i ++;
        } while (i < array.length)
        return myArray3;
    },

    forIn : (object) => {
        let key;
        let listKeys = [];
        for (key in object) {
            listKeys.push(key);
        }
        return listKeys;
    },

    forOf : (array) => {
        let array4 = [];
        for (const item of array) {
            array4.push(item + "!");
        }
        return array4;
    },


    //DAYLY 2
    assertEquals : (p1, p2) => {
            if (p1 !== p2) {
                console.log(`*** The two values are not the same: \n p1 --> ${p1} \n p2 --> ${p2}`);
                return false;
            } else {
                return true;
            }
    },

    makeEmailArr : (name) => {
        let firstName = name[0].toLowerCase();
        let lastName = name[1].toLowerCase();
        return `${firstName}.${lastName}@evolveu.ca`
    },
    
    makeEmailObj : (name) => {
            let fulName = `${name.fname}.${name.lname}@evolveu.ca`
            return fulName.toLowerCase();
    }

}; 

export default functions;

