import {taxCalculator} from './taxCal.js';
 
test('check income has been input', () => {
    expect(taxCalculator.checkIfIncome("")).toBe(0);
    expect(taxCalculator.checkIfIncome(12)).toBe(undefined);
});

test('check tax calculation', () => {
    expect(taxCalculator.calulateTax(-1)).toBe("Invalid");
    expect(taxCalculator.calulateTax(1)).toBe(0.15);
    expect(taxCalculator.calulateTax(2)).toBe(0.30);
    expect(taxCalculator.calulateTax(50000)).toBe(7630.85);
    expect(taxCalculator.calulateTax(100000)).toBe(18140.66);
    expect(taxCalculator.calulateTax(150000)).toBe(31211.57);
    expect(taxCalculator.calulateTax(250000)).toBe(61796.57);
});
