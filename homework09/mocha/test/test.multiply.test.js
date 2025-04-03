import {Calculator} from '../calculator.js';
import {expect} from 'chai';

describe('Multiplication', () => {
    it('Should be able to multiply two positive integers', async () => {
        const calculator = new Calculator();
        const result = calculator.multiply(3, 8);
        expect(result).to.equal(24);
    })
    it('Should be able to multiply a floating point multiplicand with an integer multipliplier', async () => {
        const calculator = new Calculator();
        const result = calculator.multiply(1.2, 8);
        expect(result).to.equal(9.6);
    })
    it('Should be able to multiply an integer multiplicand with a floating point multipliers', async () => {
        const calculator = new Calculator();
        const result = calculator.multiply(4, 1.2);
        expect(result).to.equal(4.8);
    })
    it('Should be able to multiply two floating point numbers', async () => {
        const calculator = new Calculator();
        const result = calculator.multiply(0.5, 1.25);
        expect(result).to.equal(0.625);
    })

    it('Should be able to multiply a integer multiplicand with zero', async () => {
        const calculator = new Calculator();
        const result = calculator.multiply(9, 0);
        expect(result).to.equal(0);
    })

    it('Should be able to multiply a negative floating point multiplicand with a negative integer multiplier', async () => {
        const calculator = new Calculator();
        const result = calculator.multiply(-3.55, -5);
        expect(result).to.equal(17.75);
    })
    it('Should be able to multiply a negative integer multiplicand with a positive integer multiplier', async () => {
        const calculator = new Calculator();
        const result = calculator.multiply(-3, 8);
        expect(result).to.equal(-24);
    })
    it('Should be able to multiply a negative integer multiplicand with a positive floating point multiplier', async () => {
        const calculator = new Calculator();
        const result = calculator.multiply(-3, 1.33);
        expect(result).to.equal(-3.99);
    })

    })






