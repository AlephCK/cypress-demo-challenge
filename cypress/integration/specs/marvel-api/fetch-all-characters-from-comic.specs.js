import { hash, apiData } from '../../../support/apiConfig';

context('Fetch All Characters from Comic', () =>  {
  before(() => {
    cy.request({
      method: 'GET',
      url: Cypress.env('apiUrl') + '/comics',
      qs: {
        limit: apiData.limit,
        ts: apiData.timeStamp,
        apikey: apiData.publicKey,
        hash: hash.md5Hash,
        titleStartsWith: apiData.comicSeries
      }
    }).then((response) => {
        expect(response.status).to.eq(200);
        cy.wrap(response.body.data.results[10].id).as('comic_id');
      });
  });

  describe('Valid Scenarios', () => {
    it('GET All Characters from X-Man Comic', function() {
      cy.request({
        method: 'GET',
        url: Cypress.env('apiUrl') + '/comics/' + this.comic_id + '/characters',
        qs: {
          limit: apiData.limit,
          ts: apiData.timeStamp,
          apikey: apiData.publicKey,
          hash: hash.md5Hash
        }
      }).then((response) => {
          expect(response.status).to.eq(200);
          expect(response.body.data.results).to.not.be.empty;
          expect(response.body.data.results[0]).to.have.property('description');
        });
    });
  });

  describe('Invalid Scenarios', () => {

  });
});