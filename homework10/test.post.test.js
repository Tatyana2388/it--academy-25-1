import {expect } from 'chai';
import axios from 'axios';
import validator from 'jsonschema';
import booksSchema from './schema/post-books.json' with { type: "json" };

describe('API test', () => {
    let responsePost;
    beforeEach(async () => {
        responsePost = await axios.post('https://fakerestapi.azurewebsites.net/api/v1/Books', {
            id: 0,
            title: "string",
            description: "string",
            pageCount: 0,
            excerpt: "string",
            publishDate: "2025-03-19T12:28:04.875Z"
        }, {
            headers: {
                "Content-Type": "application/json; v=1.0"
            }
        })
    })

    it('should POST all the books ', async () => {

        console.log(responsePost);
        await expect(responsePost.status).to.equal(200);
    })

    it('should POST all the books ', async () => {
        const result = await validator.validate(responsePost.data, booksSchema);
        console.log(result)
        await expect(result.valid).to.equal(true);
    })
    it('should get error with missing required field', async () => {
        const result = await validator.validate(responsePost.data, booksSchema);
        console.log(result)
        await expect(result.valid).to.equal(false);
    });
})