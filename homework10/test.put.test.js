import {expect } from 'chai';
import axios from 'axios';
import validator from 'jsonschema';
import booksSchema from './schema/put-books.json' with { type: "json" };

describe('API test', () => {
    let responsePut;
    beforeEach(async () => {
        responsePut = await axios.put('https://fakerestapi.azurewebsites.net/api/v1/Books/56', {
            id: 0,
            title: "string",
            description: "string",
            pageCount: 0,
            excerpt: "string",
            publishDate: "2025-03-20T13:51:38.904Z"
        }, {
            headers: {
                "Content-Type": "application/json; v=1.0"
            }
        })
    })

    it('should PUT {id} ', async () => {
        await expect(responsePut.status).to.equal(200);
    })

    it('should PUT {id} book ', async () => {
        const result = await validator.validate(responsePut.data, booksSchema);
        await expect(result.valid).to.equal(true);
    })
    it('should get error with missing required field', async () => {
        const result = await validator.validate(responsePut.data, booksSchema);
        await expect(result.valid).to.equal(false);
    });
})