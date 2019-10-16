import {jsArrays} from "./workingArrays.js";

test('empty array return', () => {
    expect(jsArrays.createArray()).toEqual([]);
});

test('check adding elements to array', () => {
    expect(jsArrays.addToArray([], "a")).toEqual(false);
    expect(jsArrays.addToArray([], 0)).toEqual([0]);
});

test('check showing array as string', () => {
    expect(jsArrays.showArray([0, 1, 2])).toEqual("0, 1, 2");
});

test('check total array', () => {
    expect(jsArrays.totalArray([])).toEqual([]);
});

test('check clear array', () => {
    expect(jsArrays.clearArray([])).toEqual([]);
});