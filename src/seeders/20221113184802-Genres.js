'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('genres', [
      { "id": 1, "name": "Synthwave", "urlImage": "https://e-cdns-images.dzcdn.net/images/misc/15df4502c1c58137dae5bdd1cc6f0251/500x500-000000-80-0-0.jpg", "userId": null, "createdAt": new Date(), "updatedAt": new Date() },
      { "id": 2, "name": "Rock and roll", "urlImage": "https://e-cdns-images.dzcdn.net/images/misc/b36ca681666d617edd0dcb5ab389a6ac/500x500-000000-80-0-0.jpg", "userId": null, "createdAt": new Date(), "updatedAt": new Date() },
      { "id": 3, "name": "Latin rock", "urlImage": "https://e-cdns-images.dzcdn.net/images/misc/236d8057751d9c557728400dfe71483a/500x500-000000-80-0-0.jpg", "userId": null, "createdAt": new Date(), "updatedAt": new Date() },
      { "id": 4, "name": "Jazz", "urlImage": "https://e-cdns-images.dzcdn.net/images/misc/01b12a3f3582899a13b664cea703a335/500x500-000000-80-0-0.jpg", "userId": null, "createdAt": new Date(), "updatedAt": new Date() },
      { "id": 5, "name": "Funk-pop", "urlImage": "https://e-cdns-images.dzcdn.net/images/misc/7b901a98628cf879e1465f1dfd697e00/500x500-000000-80-0-0.jpg", "userId": null, "createdAt": new Date(), "updatedAt": new Date() },
      { "id": 6, "name": "Pop", "urlImage": "https://e-cdns-images.dzcdn.net/images/misc/db7a604d9e7634a67d45cfc86b48370a/500x500-000000-80-0-0.jpg", "userId": null, "createdAt": new Date(), "updatedAt": new Date() },
      { "id": 7, "name": "Electropop", "urlImage": "https://e-cdns-images.dzcdn.net/images/misc/fd252ab727d9a3b0b3c29014873f8f57/500x500-000000-80-0-0.jpg", "userId": null, "createdAt": new Date(), "updatedAt": new Date() },
      { "id": 8, "name": "Dance-pop", "urlImage": "https://e-cdns-images.dzcdn.net/images/misc/bd5fdfa1a23e02e2697818e09e008e69/500x500-000000-80-0-0.jpg", "userId": null, "createdAt": new Date(), "updatedAt": new Date() },
      { "id": 9, "name": "Flamenco-pop", "urlImage": "https://e-cdns-images.dzcdn.net/images/misc/f9e070848998df8870ba65cd0d22b2b3/500x500-000000-80-0-0.jpg", "userId": null, "createdAt": new Date(), "updatedAt": new Date() },
      { "id": 10, "name": "Country", "urlImage": "https://e-cdns-images.dzcdn.net/images/misc/6eca3188f724f04843a15e3e575751a5/500x500-000000-80-0-0.jpg", "userId": null, "createdAt": new Date(), "updatedAt": new Date() },
      { "id": 11, "name": "Hip-hop", "urlImage": "https://e-cdns-images.dzcdn.net/images/misc/5c27115d3b797954afff59199dad98d1/500x500-000000-80-0-0.jpg", "userId": null, "createdAt": new Date(), "updatedAt": new Date() },
      { "id": 12, "name": "R&B", "urlImage": "https://e-cdns-images.dzcdn.net/images/misc/68a43aec844708e693cb99f47814153b/500x500-000000-80-0-0.jpg", "userId": null, "createdAt": new Date(), "updatedAt": new Date() },
      { "id": 13, "name": "Pop-rock", "urlImage": "https://e-cdns-images.dzcdn.net/images/misc/fd252ab727d9a3b0b3c29014873f8f57/500x500-000000-80-0-0.jpg", "userId": null, "createdAt": new Date(), "updatedAt": new Date() },
      { "id": 14, "name": "Rock", "urlImage": "https://e-cdns-images.dzcdn.net/images/misc/b36ca681666d617edd0dcb5ab389a6ac/500x500-000000-80-0-0.jpg", "userId": null, "createdAt": new Date(), "updatedAt": new Date() },
      { "id": 15, "name": "Rap", "urlImage": "https://e-cdns-images.dzcdn.net/images/misc/5c27115d3b797954afff59199dad98d1/500x500-000000-80-0-0.jpg", "userId": null, "createdAt": new Date(), "updatedAt": new Date() }
    ])
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('genres', null, {});
  }
};
