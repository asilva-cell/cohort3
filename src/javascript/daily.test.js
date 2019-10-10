//my first test
import functions from './daily';

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
