import {jsArrays} from "./workingArrays.js";

// test('empty array return', () => {
//     expect(jsArrays.createArray()).toEqual([]);
// });

test('check if input is a NOT number', () => {
    expect(jsArrays.isNumber("a")).toEqual(true);
});

test('check adding elements to array', () => {
    expect(jsArrays.addToArray(3, [0,1,2])).toEqual([0,1,2,3]);
});

test('check showing array as string', () => {
    expect(jsArrays.showArray([0, 1, 2])).toEqual("0, 1, 2");
});

test('check total array', () => {
    expect(jsArrays.totalArray([])).toEqual("");
    expect(jsArrays.totalArray([0, 1, 2, 3])).toEqual(6);
    expect(jsArrays.totalArray([2, 3, 4])).toEqual(9);
});

test('check clear array', () => {
    expect(jsArrays.clearArray([])).toEqual([]);
});