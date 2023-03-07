const Calculator = require('./calculator.js');

const calculation = new Calculator(9, 3);

describe('Different Calculation, given two numbers', () => {
  test('Addition of two numbers', () => {
    expect(calculation.addition()).toBe(12);
  });

  test('Subtraction of two numbers', () => {
    expect(calculation.subtraction()).toBe(6);
  });

  test('Division of first number by second number', () => {
    expect(calculation.division()).toBe(3);
  });

  test('Multiplication of two numbers', () => {
    expect(calculation.multiplication()).toBe(27);
  });

});