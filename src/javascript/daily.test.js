import {functions} from './daily';


//2019/10/17 - take an array of objects and return an array of emails
test('email builder for company', () => {
    const data = {       
        staff: [
            { fname: "Jane", lname: "Smith", balance: 10 },
            { fname: "Liam", lname: "Henry", balance: 1000 },
            { fname: "Emma", lname: "Jones", balance: 1330 },
            { fname: "Olivia", lname: "Notly", balance: 310 },
            { fname: "Noah", lname: "Ho", balance: 503 },
            { fname: "William", lname: "Lee", balance: 520 },
            { fname: "Benjamin", lname: "Amis", balance: 150 },
        ],
        company: "EvolveU",
        city: "Calgary",
        prov: "Alberta",
    
        };
    const staffEmail = functions.loopStaff(data.staff);
    expect(staffEmail[0])
        .toEqual("jane.smith@evolveu.ca");
    expect(staffEmail[3])
        .toEqual("olivia.notly@evolveu.ca");
    expect(staffEmail[6])
        .toEqual("benjamin.amis@evolveu.ca");
});


//2019/10/17 - slice, splice, forEach, map, filter and reduce
test('check slice', () => {
    expect(functions.slice([1,2,3,4], 1,3)).toEqual([2,3]);
});

test('check splice', () => {
    expect(functions.splice(2,2, "hi", [1,2,3,4])).toEqual([3,4]);
});

test('check for each loop in array by pushing value into a new array', () => {
    expect(functions.forEachInArray([1,2,3])).toEqual([2,4,6]);
});

test('check mapping through an array of objects and returns users age', () => {
    expect(functions.map1()).toEqual([33, 65, 46, 45, 33]);
});

test('check mapping through an array of objects and returns users full name', () => {
    expect(functions.map2()).toEqual(['Anna Smith', 'Laura Jhons', 'Jhon Cooper', 'Julia Foxx', 'Eric Blunt' ]);
});

test('check reduce to add up users age', () => {
    expect(functions.reduce()).toBe(222);
});

test('check filter users over 50', () => {
    expect(functions.filter()).toEqual([{fName: "Laura", lName: "Jhons", age: 65, gender: "female"}]);
});


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
