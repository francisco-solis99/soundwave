'use strict';
const sequelize = require('../config/db');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await sequelize.models.users.bulkCreate([
      {"id": 1, "name": "Marcela", "surname": "Contreras", "nickName": "marcon", "email": "marcon@hotmail.com", "password": "SVNJn994M$", "typeuserId": 1, "createdAt":new Date(),"updatedAt":new Date()},
      {"id": 2, "name": "Francisco", "surname": "Solis", "nickName": "fransol", "email": "frasol@hotmail.com", "password": "57PEGdR#9@", "typeuserId": 2, "createdAt":new Date(),"updatedAt":new Date()},
    ])
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('users', null, {});
  }
};
