import {Calculator} from '../calculator.js';
import {expect} from 'chai';

describe('Subtraction', () => {
    it('Should be able to subtract two positive integers', async () => {
        const calculator = new Calculator();
        const result = calculator.subtraction(8, 5);
        expect(result).to.equal(3);
    })

    it('Should be able to subtract zero from a negative integer', async () => {
        const calculator = new Calculator();
        const result = calculator.subtraction(-8, 0);
        expect(result).to.equal(-8);
    })
    it('Should be able to subtract 0 from a positive integer', async () => {
        const calculator = new Calculator();
        const result = calculator.subtraction(9, 0);
        expect(result).to.equal(9);
    })

    it('Should be able to subtract a floating point number from a negative integer', async () => {
        const calculator = new Calculator();
        const result = calculator.subtraction(-1, 2.25);
        expect(result).to.equal(-3.25);
    })

    it('Should be able to subtract an integer from a floating point number', async () => {
        const calculator = new Calculator();
        const result = calculator.subtraction(9.55, 1);
        expect(result).to.equal(8.55);
    })

    it('Should be able to subtract two floating point numbers', async () => {
        const calculator = new Calculator();
        const result = calculator.subtraction(9.45, 1.25);
        expect(result).to.equal(8.2);
    })

    it('Should be able to subtract a floating point number from an integer', async () => {
        const calculator = new Calculator();
        const result = calculator.subtraction(9, 1.25);
        expect(result).to.equal(7.75);
    })

    it('Should be able to subtract an integer from a negative floating point number', async () => {
        const calculator = new Calculator();
        const result = calculator.subtraction(-1.33, 2);
        expect(result).to.equal(-3.33);
    })

})
