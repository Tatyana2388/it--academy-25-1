import {Calculator} from '../calculator.js';
import {expect} from 'chai';

describe('Division', () => {
    it('Should be able to divide two positive integers', async () => {
        const calculator = new Calculator();
        const result = calculator.divide(8, 2);
        expect(result).to.equal(4);
    })

    it('Should be able to divide a negative dividend by a positive divisor', async () => {
        const calculator = new Calculator();
        const result = calculator.divide(-8, 2);
        expect(result).to.equal(-4);
    })

    it('Should be able to divide a negative dividend by a negative divisor', async () => {
        const calculator = new Calculator();
        const result = calculator.divide(-8, -2);
        expect(result).to.equal(4);
    })

    it('Should be able to divide 0 by an integer divisor', async () => {
        const calculator = new Calculator();
        const result = calculator.divide(0, 10);
        expect(result).to.equal(0);
    })

    it('Should be able to divide a negative floating point dividend by a positive divisor', async () => {
        const calculator = new Calculator();
        const result = calculator.divide(-3.5, 5);
        expect(result).to.equal(-0.7);
    })

    it('Should be able to divide a negative integer dividend by a positive floating point divisor', async () => {
        const calculator = new Calculator();
        const result = calculator.divide(-20, 0.5);
        expect(result).to.equal(-40);
    })

    it('Should be able to divide an floating point dividend by an integer divisor', async () => {
        const calculator = new Calculator();
        const result = calculator.divide(4.5, 10);
        expect(result).to.equal(0.45);
    })

    it('Should be able to divide an integer dividend by a floating point divisor', async () => {
        const calculator = new Calculator();
        const result = calculator.divide(30, 0.5);
        expect(result).to.equal(60);
    })

    it('Should be able to divide two floating point numbers', async () => {
        const calculator = new Calculator();
        const result = calculator.divide(4.5, 2.5);
        expect(result).to.equal(1.8);
    })

    it('Should be able to divide two floating point numbers', async () => {
        const calculator = new Calculator();
        const result = calculator.divide(4.5, 2.5);
        expect(result).to.equal(1.8);
    })

    it('Should be able to divide two floating point numbers', async () => {
        const calculator = new Calculator();
        const result = calculator.divide(4.5, 2.5);
        expect(result).to.equal(1.8);
    })

    it('Should get Infinity for division by 0', async () => {
        const calculator = new Calculator();
        const result = calculator.divide(8, 0);
        expect(result).to.equal(Infinity);
    })

    })