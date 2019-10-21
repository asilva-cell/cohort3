import {calculations} from './calculator.js';
 
test('check addition', () => {
    expect(calculations.add(1,2)).toBe(3);
    expect(calculations.add(1000,3000)).toBe(4000);
    expect(calculations.add(1.5,2.5)).toBe(4);
    
});

test('check subtraction', () => {
    expect(calculations.subtract(1,2)).toBe(-1);
    expect(calculations.subtract(1000,3000)).toBe(-2000);
    expect(calculations.subtract(100, 50)).toBe(50);
    expect(calculations.subtract(100.5, 50.5)).toBe(50);
    expect(calculations.subtract(2, 2)).toBe(0);
    
});

test('check multiplication', () => {
    expect(calculations.multiply(1,2)).toBe(2);
    expect(calculations.multiply(1,-2)).toBe(-2);
    expect(calculations.multiply(2,-2)).toBe(-4);
    expect(calculations.multiply(1000,3000)).toBe(3000000);
    expect(calculations.multiply(100, 50)).toBe(5000);
});

test('check multiplication', () => {
    expect(calculations.divide(1,2)).toBe(0.5);
    expect(calculations.divide(1,-2)).toBe(-0.5);
    expect(calculations.divide(2,-2)).toBe(-1);
    expect(calculations.divide(1000,2000)).toBe(1/2);
    expect(calculations.divide(100, 2)).toBe(50);
    
});