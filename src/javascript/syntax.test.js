import {size, compare} from './syntax.js';
 
test('check size', () => {
    expect(size(-1)).toBe(`-1 is negative`);
    expect(size(8)).toBe(`8 is small`);
    expect(size(15)).toBe(`15 is medium`);
    expect(size(30)).toBe(`30 is large`);
    expect(size(100)).toBe(`100 is extra-large`);
});

test('check compare', () => {
    expect(compare(2, 1)).toBe(`2 is greater than 1`);
    expect(compare(1, 2)).toBe(`1 is less than 2`);
    expect(compare(1, 1)).toBe(`1 is equal to 1`);
});


