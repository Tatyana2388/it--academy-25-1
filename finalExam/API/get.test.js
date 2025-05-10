import {expect} from 'chai';
import axios from 'axios';

describe('API test', () => {
    let responseGet;
    beforeEach(async () => {
        responseGet = await axios.get('https://www.lamoda.by/women-home/')
    })

    it('should be the status 200', async () => {
        await expect(responseGet.status).to.equal(200);
    })

    it('should be the status 404 with wong url', async () => {
        try {
            await axios.get('https://www.lamoda.by/women-home/fail')
        } catch (error) {
            await expect(error.status).to.equal(404);
        }

    })
    it('should have correct field in the response ', async () => {
        const resp = await axios.get('https://www.lamoda.by/c/517/clothes-muzhskie-bryuki/?page=1&json=1');
        expect(resp.data.page_is_premium).to.equal(false);
        expect(resp.data.header.menu_gender).to.equal("men");
        expect(resp.data.payload.seo.header).to.equal("Мужские брюки");
    })

})