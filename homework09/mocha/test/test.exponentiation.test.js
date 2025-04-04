import {Calculator} from '../calculator.js';
import {expect} from 'chai';

describe('Exponentiation ', () => {
    it('Should be able to raise to power positive integer number', async () => {
        const calculator = new Calculator();
        const result = calculator.exponentiation(8, 8);
        expect(result).to.equal(64);
    })

    it('Should be able to raise to power negative integer number', async () => {
        const calculator = new Calculator();
        const result = calculator.exponentiation(-3, -3);
        expect(result).to.equal(9);
    })

    it('Should be able to raise to power a positive floating point number', async () => {
        const calculator = new Calculator();
        const result = calculator.exponentiation(3.5, 3.5);
        expect(result).to.equal(12.25);
    })

    it('Should be able to raise to power a negative floating point number', async () => {
        const calculator = new Calculator();
        const result = calculator.exponentiation(-2.5, -2.5);
        expect(result).to.equal(6.25);
    })

})