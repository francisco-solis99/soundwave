'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('tops', [
      {"id": 1, "name": "All-time hits", "description": "Billboard ranking of the 10 best songs over the last 50 years", "userId": 1, "createdAt":new Date(),"updatedAt":new Date()},
      {"id": 2, "name": "2000's hits", "description": "Billboard top 10 hits of 2000", "userId": 2, "createdAt":new Date(),"updatedAt":new Date()},
      {"id": 3, "name": "2007's hits", "description": "Billboard top 10 hits of 2007", "userId": 2, "createdAt":new Date(),"updatedAt":new Date()},
    ])
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('tops', null, {});
  }
};
