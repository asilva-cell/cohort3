import calculator from './calculator.js';
 
test('check addition', () => {
    expect(calculator.add(1,2)).toBe(3);
    expect(calculator.add(1000,3000)).toBe(4000);
    expect(calculator.add(1.5,2.5)).toBe(4);
    
});

test('check subtraction', () => {
    expect(calculator.subtract(1,2)).toBe(-1);
    expect(calculator.subtract(1000,3000)).toBe(-2000);
    expect(calculator.subtract(100, 50)).toBe(50);
    expect(calculator.subtract(100.5, 50.5)).toBe(50);
    expect(calculator.subtract(2, 2)).toBe(0);
    
});

test('check multiplication', () => {
    expect(calculator.multiplication(1,2)).toBe(2);
    expect(calculator.multiplication(1,-2)).toBe(-2);
    expect(calculator.multiplication(2,-2)).toBe(-4);
    expect(calculator.multiplication(1000,3000)).toBe(3000000);
    expect(calculator.multiplication(100, 50)).toBe(5000);
});

test('check multiplication', () => {
    expect(calculator.division(1,2)).toBe(0.5);
    expect(calculator.division(1,-2)).toBe(-0.5);
    expect(calculator.division(2,-2)).toBe(-1);
    expect(calculator.division(1000,2000)).toBe(1/2);
    expect(calculator.division(100, 2)).toBe(50);
    
});