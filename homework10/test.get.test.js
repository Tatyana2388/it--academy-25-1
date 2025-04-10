import {expect} from 'chai';
import axios from 'axios';

describe('API test', () => {
    let responseGet;
    beforeEach(async () => {
        responseGet = await axios.get('https://fakerestapi.azurewebsites.net/api/v1/Books')
    })

    it('should be the status 200', async () => {
        await expect(responseGet.status).to.equal(200);
    })

    it('should be the status 404 with wong url', async () => {
        try {
            await axios.get('https://fakerestapi.azurewebsites.net/api/v2/Books/fail')
        } catch (error) {
            await expect(error.status).to.equal(404);
        }

    })
})





