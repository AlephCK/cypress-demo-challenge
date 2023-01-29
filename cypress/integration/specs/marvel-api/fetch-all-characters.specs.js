import { hash, apiData } from '../../../support/apiConfig';

context('Fetch All Characters', () =>  {
  describe('Valid Scenarios', () => {
    it('GET All Characters', function() {
      cy.request({
        method: 'GET',
        url: Cypress.env('apiUrl') + '/characters',
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
    it('GET All Characters without hash', function() {
      cy.request({
        method: 'GET',
        url: Cypress.env('apiUrl') + '/characters',
        failOnStatusCode: false,
        qs: {
          limit: apiData.limit,
          ts: apiData.timeStamp,
          apikey: apiData.publicKey
        }
      }).then((response) => {
        expect(response.status).to.eq(409);
        expect(response.body.message).to.be.eq('You must provide a hash.');
        });
    });

    it('GET All Characters without hash and apiKey', function() {
      cy.request({
        method: 'GET',
        url: Cypress.env('apiUrl') + '/characters',
        failOnStatusCode: false,
        qs: {
          limit: apiData.limit,
          ts: apiData.timeStamp
        }
      }).then((response) => {
        expect(response.status).to.eq(409);
        expect(response.body.message).to.be.eq('You must provide a user key.');
        });
    });

    it('GET All Characters without timestamp', function() {
      cy.request({
        method: 'GET',
        url: Cypress.env('apiUrl') + '/characters',
        failOnStatusCode: false,
        qs: {
          limit: apiData.limit,
          apikey: apiData.publicKey,
          hash: hash.md5Hash
        }
      }).then((response) => {
        expect(response.status).to.eq(409);
        expect(response.body.message).to.be.eq('You must provide a timestamp.');
        });
    });

    it('GET All Characters without timestamp and apiKey', function() {
      cy.request({
        method: 'GET',
        url: Cypress.env('apiUrl') + '/characters',
        failOnStatusCode: false,
        qs: {
          limit: apiData.limit,
          hash: hash.md5Hash
        }
      }).then((response) => {
        expect(response.status).to.eq(409);
        expect(response.body.message).to.be.eq('You must provide a user key.');
        });
    });

    it('GET All Characters without timestamp and hash', function() {
      cy.request({
        method: 'GET',
        url: Cypress.env('apiUrl') + '/characters',
        failOnStatusCode: false,
        qs: {
          limit: apiData.limit,
          apikey: apiData.publicKey
        }
      }).then((response) => {
        expect(response.status).to.eq(409);
        expect(response.body.message).to.be.eq('You must provide a hash.');
        });
    });

    it('GET All Characters without apiKey', function() {
      cy.request({
        method: 'GET',
        url: Cypress.env('apiUrl') + '/characters',
        failOnStatusCode: false,
        qs: {
          limit: apiData.limit,
          ts: apiData.timeStamp,
          hash: hash.md5Hash
        }
      }).then((response) => {
        expect(response.status).to.eq(409);
        expect(response.body.message).to.be.eq('You must provide a user key.');
        });
    });

    it('GET All Characters without any parameters', function() {
      cy.request({
        method: 'GET',
        url: Cypress.env('apiUrl') + '/characters',
        failOnStatusCode: false
      }).then((response) => {
        expect(response.status).to.eq(409);
        expect(response.body.message).to.be.eq('You must provide a user key.');
        });
    });

    it('GET All Characters with invalid timestamp', function() {
      cy.request({
        method: 'GET',
        url: Cypress.env('apiUrl') + '/characters',
        failOnStatusCode: false,
        qs: {
          limit: apiData.limit,
          ts: 'test',
          apikey: apiData.publicKey,
          hash: hash.md5Hash
        }
      }).then((response) => {
        expect(response.status).to.eq(401);
        expect(response.body.message).to.be.eq('That hash, timestamp and key combination is invalid.');
        });
    });

    it('GET All Characters with invalid timestamp and hash', function() {
      cy.request({
        method: 'GET',
        url: Cypress.env('apiUrl') + '/characters',
        failOnStatusCode: false,
        qs: {
          limit: apiData.limit,
          ts: 'test',
          apikey: apiData.publicKey,
          hash: 'test'
        }
      }).then((response) => {
        expect(response.status).to.eq(401);
        expect(response.body.message).to.be.eq('That hash, timestamp and key combination is invalid.');
        });
    });

    it('GET All Characters with invalid apiKey', function() {
      cy.request({
        method: 'GET',
        url: Cypress.env('apiUrl') + '/characters',
        failOnStatusCode: false,
        qs: {
          limit: apiData.limit,
          ts: apiData.timeStamp,
          apikey: 'Test',
          hash: hash.md5Hash
        }
      }).then((response) => {
        expect(response.status).to.eq(401);
        expect(response.body.message).to.be.eq('The passed API key is invalid.');
        });
    });

    it('GET All Characters with invalid timestamp and apiKey', function() {
      cy.request({
        method: 'GET',
        url: Cypress.env('apiUrl') + '/characters',
        failOnStatusCode: false,
        qs: {
          limit: apiData.limit,
          ts: apiData.timeStamp,
          apikey: 'Test',
          hash: hash.md5Hash
        }
      }).then((response) => {
        expect(response.status).to.eq(401);
        expect(response.body.message).to.be.eq('The passed API key is invalid.');
        });
    });

    it('GET All Characters with invalid hash and apiKey', function() {
      cy.request({
        method: 'GET',
        url: Cypress.env('apiUrl') + '/characters',
        failOnStatusCode: false,
        qs: {
          limit: apiData.limit,
          ts: apiData.timeStamp,
          apikey: 'Test'
        }
      }).then((response) => {
        expect(response.status).to.eq(401);
        expect(response.body.message).to.be.eq('The passed API key is invalid.');
        });
    });

    it('GET All Characters with invalid parameters', function() {
      cy.request({
        method: 'GET',
        url: Cypress.env('apiUrl') + '/characters',
        failOnStatusCode: false,
        qs: {
          limit: apiData.limit,
          ts: 'Test',
          apikey: 'Test',
          hash: 'Test'
        }
      }).then((response) => {
        expect(response.status).to.eq(401);
        expect(response.body.message).to.be.eq('The passed API key is invalid.');
        });
    });
  });
});