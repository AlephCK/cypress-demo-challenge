import { hash, apiData } from '../../../support/apiConfig';

context('Fetch All Characters', () =>  {
  describe('Valid Scenarios', () => {
    it('GET All Characters', function() {
      cy.request({
        method: 'GET',
        url: Cypress.env('apiUrl') + '/comics/18231/characters',
        qs: {
          limit: apiData.limit,
          ts: apiData.timeStamp,
          apikey: apiData.publicKey,
          hash: hash.md5Hash
        }
      }).then((response) => {
          expect(response.status).to.eq(200);
          expect(response.body.data.results).length.to.be.greaterThan(1);
          expect(response.body.data.results[0]).to.have.property('comics');
        });
    });
  });

  describe('Invalid Scenarios', () => {

  });
});