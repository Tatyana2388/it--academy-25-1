import {expect } from 'chai';
import axios from 'axios';

describe('API test', () => {
    let responseGet;

    beforeEach(async () => {
        responseGet = await axios.get('https://fakerestapi.azurewebsites.net/api/v1/Books/98')
    })

    it('should GET books {id} ', async () => {
        await expect(responseGet.status).to.equal(200);
    })
    it('should GET error with error incorrect url ', async () => {
        await expect(responseGet.status).to.equal(404);
    })
});