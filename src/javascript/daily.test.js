//my first test
import assertEquals from './daily';

test('this is me playing', () => {
   console.log("Hello World!");

});

 test('Check the comparison', () => {
    expect(assertEquals('a', 'b')).toBe(false);
    expect(assertEquals(1, '1')).toBe(false);
    expect(assertEquals('a', 'a')).toBe(true);
    expect(assertEquals(1, 1)).toBe(true);

});
