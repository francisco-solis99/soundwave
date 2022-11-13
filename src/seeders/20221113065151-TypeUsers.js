'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('typeusers', [
      {"id": 1, "name": "Admin", "createdAt":new Date(),"updatedAt":new Date()},
      {"id": 2, "name": "Premium", "createdAt":new Date(),"updatedAt":new Date()}
    ])
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('typeusers', null, {});
  }
};
