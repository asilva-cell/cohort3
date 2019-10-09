import functions from './syntax.js';
 
test('check number', () => {
    expect(functions.xnumber(30)).toBe(30);
});

test('check string', () => {
    expect(functions.myString('Hola!')).toBe('Hola!');
});

test('check booleans', () => {
    expect(functions.bool(8,4)).toBe(true);
    expect(functions.bool(1,2)).toBe(false);
});

test('check array', () => {
    expect(functions.array([1,2,3][0])).toBe(1);
});

test('check object', () => {
    expect(functions.dict().age).toBe(34);
});

test('check undefined', () => {
    expect(functions.undef()).toBe(undefined);
});

 test('check size', () => {
     expect(functions.size(-1)).toBe(`-1 is negative`);
     expect(functions.size(8)).toBe(`8 is small`);
     expect(functions.size(15)).toBe(`15 is medium`);
     expect(functions.size(30)).toBe(`30 is large`);
     expect(functions.size(100)).toBe(`100 is extra-large`);
});

test('check functions and parameters', () => {
    expect(functions.paraReturn(1,2)).toBe(3);
});

test('check add infront array', () => {
    expect(functions.addToArray(0, [1,2,3])).toBe([0,1,2,3]);
});




