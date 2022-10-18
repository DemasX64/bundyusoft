import { evaluate } from 'mathjs';
import { calculate } from './calculator';

describe('calculator', () => {
  test('plus', () => {
    const query = '2+2';
    expect(calculate(query)).toBe(evaluate(query));
  });
  test('minus', () => {
    const query = '5-5';
    expect(calculate(query)).toBe(evaluate(query));
  });
  test('multiply', () => {
    const query = '5*5';
    expect(calculate(query)).toBe(evaluate(query));
  });
  test('divide', () => {
    const query = '7/8';
    expect(calculate(query)).toBe(evaluate(query));
  });
  test('brackets', () => {
    const query = '2(3*4)';
    expect(calculate(query)).toBe(evaluate(query));
  });
  test('more brackets', () => {
    const query = '(1+2)*(3*4)';
    expect(calculate(query)).toBe(evaluate(query));
  });
  test('percent', () => {
    const query = '1%10';
    expect(calculate(query)).toBe(10);
  });
  test('float', () => {
    const query = '0,125+0,875';
    expect(calculate(query)).toBe(1);
  });
  test('float 2', () => {
    const query = '0.125+0.875';
    expect(calculate(query)).toBe(1);
  });
  test('divide on zero', () => {
    const query = '10/0';
    expect(calculate(query)).toBe(evaluate(query));
  });
});
