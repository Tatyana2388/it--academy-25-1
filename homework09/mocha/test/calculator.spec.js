import {Calculator} from '../calculator.js';
import {expect} from 'chai';

describe('calculator', () => {
    it('add positive numbers, get positive', async () => {
        const calculator = new Calculator();
        const result = calculator.add(1, 2);
        expect(result).to.equal(3);
    })


    it('add 0, get the same number', async () => {
        const calculator = new Calculator();
        const result = calculator.add(3, 0);
        expect(result).to.equal(3);

    })
    it('add negative numbers, get negative', async () => {
        const calculator = new Calculator();
        const result = calculator.add(-5, -3);
        expect(result).to.equal(-8);
    })
    it('adding negative and positive numbers where |a|>|b|, get negative', async () => {
        const calculator = new Calculator();
        const result = calculator.add(-8, 3);
        expect(result).to.equal(-5);
    })

    it('add negative numbers, get negative', async () => {
        const calculator = new Calculator();
        const result = calculator.add(-5, -8);
        expect(result).to.equal(-13);
    })
    it('add negative and positive numbers where |a|<|b|, get positive', async () => {
        const calculator = new Calculator();
        const result = calculator.add(-5, 8);
        expect(result).to.equal(3);
    })
    it('add identical numbers, get o', async () => {
        const calculator = new Calculator();
        const result = calculator.add(-8, 8);
        expect(result).to.equal(0);
    })
    it('multiply positive numbers, get positive', async () => {
        const calculator = new Calculator();
        const result = calculator.multiply(3, 8);
        expect(result).to.equal(24);
    })
    it('multiply by 0, get 0', async () => {
        const calculator = new Calculator();
        const result = calculator.multiply(3, 0);
        expect(result).to.equal(0);
    })
    it('multiply positive and negative numbers, get negative', async () => {
        const calculator = new Calculator();
        const result = calculator.multiply(3, -8);
        expect(result).to.equal(-24);
    })
    it('multiply negative numbers, get positive', async () => {
        const calculator = new Calculator();
        const result = calculator.multiply(-3, -8);
        expect(result).to.equal(24);
    })
    it('subtract positive numbers |a|>|b|, get positive', async () => {
        const calculator = new Calculator();
        const result = calculator.subtraction(8, 5);
        expect(result).to.equal(3);
    })
    it('subtract 0, get the same number', async () => {
        const calculator = new Calculator();
        const result = calculator.subtraction(-8, 0);
        expect(result).to.equal(-8);
    })
    it('subtract negative numbers |a|>|b|, get negative', async () => {
        const calculator = new Calculator();
        const result = calculator.subtraction(-8, -2);
        expect(result).to.equal(-6);
    })
    it('subtract negative numbers |a|<|b|, get the same number', async () => {
        const calculator = new Calculator();
        const result = calculator.subtraction(-2, -8);
        expect(result).to.equal(6);
    })
    it('divide positive numbers, get positive', async () => {
        const calculator = new Calculator();
        const result = calculator.divide(8, 2);
        expect(result).to.equal(4);
    })
    it('divide positive and negative numbers, get negative', async () => {
        const calculator = new Calculator();
        const result = calculator.divide(8, -2);
        expect(result).to.equal(-4);
    })
    it('divide negative numbers, get positive', async () => {
        const calculator = new Calculator();
        const result = calculator.divide(-8, -2);
        expect(result).to.equal(4);
    })
    it('divide 0 by number, get 0', async () => {
        const calculator = new Calculator();
        const result = calculator.divide(0, 8);
        expect(result).to.equal(0);
    })
    it('divide by 0, get Infinity', async () => {
        const calculator = new Calculator();
        const result = calculator.divide(8, 0);
        expect(result).to.equal(Infinity);
    })
    it('exponentiation positive number, get positive', async () => {
        const calculator = new Calculator();
        const result = calculator.exponentiation(8, 8);
        expect(result).to.equal(64);
    })
    it('exponentiation negative number, get positive', async () => {
        const calculator = new Calculator();
        const result = calculator.exponentiation(-8, -8);
        expect(result).to.equal(64);
    })
    it('exponentiation 0, get 0', async () => {
        const calculator = new Calculator();
        const result = calculator.exponentiation(0, 0);
        expect(result).to.equal(0);
    })

})



