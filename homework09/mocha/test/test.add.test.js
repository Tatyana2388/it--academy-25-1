import {Calculator} from '../calculator.js';
import {expect} from 'chai';

describe('Addition', () => {
    it('Should be able to add two positive integers numbers', async () => {
        const calculator = new Calculator();
        const result = calculator.add(1, 2);
        expect(result).to.equal(3);
    })

    it('Should be able to add zero and a positive integer', async () => {
        const calculator = new Calculator();
        const result = calculator.add(3, 0);
        expect(result).to.equal(3);
    })
    it('Should be able to add a negative integer and zero', async () => {
        const calculator = new Calculator();
        const result = calculator.add(-3, 0);
        expect(result).to.equal(-3);
    })

    it('Should be able to add a negative integer with a positive number', async () => {
        const calculator = new Calculator();
        const result = calculator.add(-5, 3);
        expect(result).to.equal(-2);
    })

    it('Should be able to add a negative integer to a positive floating point number', async () => {
        const calculator = new Calculator();
        const result = calculator.add(-1, 1.00);
        expect(result).to.equal(0);
    })
    it('Should be able to add a floating point number to an integer', async () => {
        const calculator = new Calculator();
        const result = calculator.add(10.1, 2);
        expect(result).to.equal(12.1);
    })
    it('Should be able to add an integer to a floating point number', async () => {
        const calculator = new Calculator();
        const result = calculator.add(9.9, 10);
        expect(result).to.equal(19.9);
    })

    it('Should be able to add two floating point numbers', async () => {
        const calculator = new Calculator();
        const result = calculator.add(9.9, 1.12);
        expect(result).to.equal(11.02);
    })

    it('Should be able to add a negative floating point and a positive integer', async () => {
        const calculator = new Calculator();
        const result = calculator.add(-9.9, 5);
        expect(result).to.equal(-4.9);
    })

    it('Should be able to add an integer to a negative floating point number', async () => {
        const calculator = new Calculator();
        const result = calculator.add(20, -5.15);
        expect(result).to.equal(14.85);
    })

    it('Should be able to add two negative floating point numbers', async () => {
        const calculator = new Calculator();
        const result = calculator.add(-20.45, -5.15);
        expect(result).to.equal(-25.6);
    })

    it('Should be able to add an integer to a negative integer number', async () => {
        const calculator = new Calculator();
        const result = calculator.add(20, -5);
        expect(result).to.equal(15);
    })

    it('Should be able to add two negative integer numbers', async () => {
        const calculator = new Calculator();
        const result = calculator.add(-20, -5);
        expect(result).to.equal(-25);
    })

})