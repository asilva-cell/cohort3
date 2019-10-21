import functions from './tdd-01';

test('hello world console.log1', () => {
    console.log("Hello World 1");
});

test('hello world console.log2', () => {
    console.log("Hello World 2");
});

test('check a string to see if it is the same', () => {
    expect('abcd').toEqual('abcd');
    // expect('abcd').toEqual('ab');
});

test('check an array see if it is the same', () => {
    expect([1, 2, 3, 4]).toEqual([1, 2, 3, 4]);
    // expect([1, 2, 3, 4]).toEqual([1, 2, 3]);
});

test('check email builtder', () => {
    expect(functions.emailBuilder('larry', 'shumlich')).toBe('l.shumlich@evolveu.ca');

});

