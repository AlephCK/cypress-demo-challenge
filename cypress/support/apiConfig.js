import md5 from 'blueimp-md5';

const date = new Date();

export const apiData = {
  timeStamp: date.getTime(),
  publicKey: Cypress.env('marvel').publicKey,
  privateKey: Cypress.env('marvel').privateKey,
  limit: 100,
  comicSeries: 'X-Man',
  characterName: 'Spider-Man'
};

export const hash = {
  md5Hash: md5(apiData.timeStamp + apiData.privateKey + apiData.publicKey)
};