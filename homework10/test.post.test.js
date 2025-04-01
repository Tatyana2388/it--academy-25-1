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

    it('should be status 200', async () => {
        await expect(responsePost.status).to.equal(200);
    })

    it('should be valid json schema', async () => {
        const result = await validator.validate(responsePost.data, booksSchema);
        await expect(result.valid).to.equal(true);
    })

    it('should be the status 404 with wong url', async () => {
        try {
            await axios.get('https://fakerestapi.azurewebsites.net/api/v2/Books/jim')
        } catch (error) {
            await expect(error.status).to.equal(404);
        }

    })
});
