import functions from './daily';


//PREPARED FOR ARRAY - 2019/10/15
test('checking fo rArray ', () => {
    expect(functions.forArray([0, 1, 2])).toEqual([0, 2, 4]);
});

test('check while loop in array by pushing value into a new array', () => {
    expect(functions.whileLopping([1,2,3])).toEqual([2,4,6]);
});

test('check do while loop in array by pushing value into a new array', () => {
    expect(functions.doWhileLopping([1,2,3])).toEqual([2,4,6]);
});

test('check for/ in loop in object by returning an array of keys', () => {
    expect(functions.forIn({a:1, b:2})).toEqual(["a", "b"]);
});

test('check for/ of loop with array by adding !to each item', () => {
    expect(functions.forOf(["Hello", "Bye"])).toEqual(["Hello!", "Bye!"]);
});




//my first test


test('this is me playing', () => {
   console.log("Hello World!");

});

 test('Check the comparison', () => {
    expect(functions.assertEquals('a', 'b')).toBe(false);
    expect(functions.assertEquals(1, '1')).toBe(false);
    expect(functions.assertEquals('a', 'a')).toBe(true);
    expect(functions.assertEquals(1, 1)).toBe(true);

});

// Write a function to format an email based on an array.

test('email builder from an array', () => {
   const name = ["first", "last"];
   expect(functions.makeEmailArr(name))
       .toEqual("first.last@evolveu.ca");
   expect(functions.makeEmailArr(["First", "Last"]))
       .toEqual("first.last@evolveu.ca");
   expect(functions.makeEmailArr(["Bill", "Smith"]))
       .toEqual("bill.smith@evolveu.ca");
});

test('email builder from an object / map', () => {
    const name = { fname: 'first', lname: 'last' };
    expect(functions.makeEmailObj(name))
        .toEqual("first.last@evolveu.ca");
    expect(functions.makeEmailObj({ fname: 'First', lname: 'Last' }))
        .toEqual("first.last@evolveu.ca");
    expect(functions.makeEmailObj({ fname: "Bill", lname: "Smith" }))
        .toEqual("bill.smith@evolveu.ca");
});
