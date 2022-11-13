'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('genres', [
      {"id":1,"name":"Synthwave", "createdAt":new Date(),"updatedAt":new Date()},
      {"id":2,"name":"Rock and roll", "createdAt":new Date(),"updatedAt":new Date()},
      {"id":3,"name":"Latin rock", "createdAt":new Date(),"updatedAt":new Date()},
      {"id":4,"name":"Jazz", "createdAt":new Date(),"updatedAt":new Date()},
      {"id":5,"name":"Funk-pop", "createdAt":new Date(),"updatedAt":new Date()},
      {"id":6,"name":"Pop", "createdAt":new Date(),"updatedAt":new Date()},
      {"id":7,"name":"Electropop", "createdAt":new Date(),"updatedAt":new Date()},
      {"id":8,"name":"Dance-pop", "createdAt":new Date(),"updatedAt":new Date()},
      {"id":9,"name":"Flamenco-pop", "createdAt":new Date(),"updatedAt":new Date()},
      {"id":10,"name":"Country", "createdAt":new Date(),"updatedAt":new Date()},
      {"id":11,"name":"Hip-hop", "createdAt":new Date(),"updatedAt":new Date()},
      {"id":12,"name":"R&B", "createdAt":new Date(),"updatedAt":new Date()},
      {"id":13,"name":"Pop-rock", "createdAt":new Date(),"updatedAt":new Date()},
      {"id":14,"name":"Rock", "createdAt":new Date(),"updatedAt":new Date()},
      {"id":15,"name":"Rap", "createdAt":new Date(),"updatedAt":new Date()}
    ])
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('genres', null, {});
  }
};
