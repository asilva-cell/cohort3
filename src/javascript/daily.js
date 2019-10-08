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

let assertEquals = (p1, p2) => {
        if (p1 !== p2) {
            console.log(`*** The two values are not the same: \n p1 --> ${p1} \n p2 --> ${p2}`);
            return false;
        } else {
            return true
        }
};

// and before this comment ---

assertEquals("a","b");
assertEquals("a","a");
assertEquals(1,2);
assertEquals(2,2);
assertEquals("2",2);
assertEquals("This value","This value");

export default assertEquals;