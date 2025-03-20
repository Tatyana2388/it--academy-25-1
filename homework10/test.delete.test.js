import {expect } from 'chai';
import axios from 'axios';

describe('API test', () => {
    let responseDelete;


    beforeEach(async () => {
        responseDelete = await axios.delete('https://fakerestapi.azurewebsites.net/api/v1/Books/3')
    })

    it('should GET all the books', async () => {
        console.log(responseDelete);
        await expect(responseDelete.status).to.equal(200);
    })

    it('should GET error with incorrect url', async () => {
        console.log(responseDelete);
        await expect(responseDelete.status).to.equal(404);
    })

});