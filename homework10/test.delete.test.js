import {expect } from 'chai';
import axios from 'axios';

describe('API test', () => {
    let responseDelete;

    beforeEach(async () => {
        responseDelete = await axios.delete('https://fakerestapi.azurewebsites.net/api/v1/Books/3')
    })

    it('should be the status 200 delete book {id}', async () => {
        await expect(responseDelete.status).to.equal(200);
    })

    it('should be the status 404 with wong url', async () => {
        try {
            await axios.get('https://fakerestapi.azurewebsites.net/api/v2/Books/huhu')
        } catch (error) {
            await expect(error.status).to.equal(404);
        }

    })
});