import { hash, apiData } from '../../../support/apiConfig';

context('Fetch All Comics from Character', () =>  {
  before(() => {
    cy.request({
      method: 'GET',
      url: Cypress.env('apiUrl') + '/characters',
      qs: {
        limit: apiData.limit,
        ts: apiData.timeStamp,
        apikey: apiData.publicKey,
        hash: hash.md5Hash,
        nameStartsWith: apiData.characterName
      }
    }).then((response) => {
        expect(response.status).to.eq(200);
        cy.wrap(response.body.data.results[10].id).as('character_id');
      });
  });

  describe('Valid Scenarios', () => {
    it('GET All Comics from Spider-Man', function() {
      cy.request({
        method: 'GET',
        url: Cypress.env('apiUrl') + '/characters/' + this.character_id + '/comics',
        qs: {
          limit: apiData.limit,
          ts: apiData.timeStamp,
          apikey: apiData.publicKey,
          hash: hash.md5Hash
        }
      }).then((response) => {
          expect(response.status).to.eq(200);
          expect(response.body.data.results).length.to.be.greaterThan(1);
          expect(response.body.data.results[0]).to.have.property('issueNumber');
        });
    });
  });

  describe('Invalid Scenarios', () => {

  });
});