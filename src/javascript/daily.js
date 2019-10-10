//my first function to test

	
// 	Write the function that will create this output:

// *** the two values are not the same:
//     p1--> a
//     p2--> b
// *** the two values are not the same:
//     p1--> 1
//     p2--> 2
// *** the two values are not the same:
//     p1--> 2
//     p2--> 2


// Write the function after this comment ---

const functions = {
    assertEquals : (p1, p2) => {
            if (p1 !== p2) {
                console.log(`*** The two values are not the same: \n p1 --> ${p1} \n p2 --> ${p2}`);
                return false;
            } else {
                return true
            }
    },

    makeEmailArr : (name) => {
        let firstName = name[0].toLowerCase();
        let lastName = name[1].toLowerCase();
        return `${firstName}.${lastName}@evolveu.ca`

    }

// and before this comment ---
};


export default functions;

