'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('topSongs', [
      {"id":1,"topId":1,"songId":1, "createdAt":new Date(),"updatedAt":new Date()},
      {"id":2,"topId":1,"songId":2, "createdAt":new Date(),"updatedAt":new Date()},
      {"id":3,"topId":1,"songId":3, "createdAt":new Date(),"updatedAt":new Date()},
      {"id":4,"topId":1,"songId":4, "createdAt":new Date(),"updatedAt":new Date()},
      {"id":5,"topId":1,"songId":5, "createdAt":new Date(),"updatedAt":new Date()},
      {"id":6,"topId":1,"songId":6, "createdAt":new Date(),"updatedAt":new Date()},
      {"id":7,"topId":1,"songId":7, "createdAt":new Date(),"updatedAt":new Date()},
      {"id":8,"topId":1,"songId":8, "createdAt":new Date(),"updatedAt":new Date()},
      {"id":9,"topId":1,"songId":9, "createdAt":new Date(),"updatedAt":new Date()},
      {"id":10,"topId":1,"songId":10, "createdAt":new Date(),"updatedAt":new Date()},
      {"id":11,"topId":2,"songId":3, "createdAt":new Date(),"updatedAt":new Date()},
      {"id":12,"topId":2,"songId":11, "createdAt":new Date(),"updatedAt":new Date()},
      {"id":13,"topId":2,"songId":12, "createdAt":new Date(),"updatedAt":new Date()},
      {"id":14,"topId":2,"songId":13, "createdAt":new Date(),"updatedAt":new Date()},
      {"id":15,"topId":2,"songId":14, "createdAt":new Date(),"updatedAt":new Date()},
      {"id":16,"topId":2,"songId":15, "createdAt":new Date(),"updatedAt":new Date()},
      {"id":17,"topId":2,"songId":16, "createdAt":new Date(),"updatedAt":new Date()},
      {"id":18,"topId":2,"songId":17, "createdAt":new Date(),"updatedAt":new Date()},
      {"id":19,"topId":2,"songId":18, "createdAt":new Date(),"updatedAt":new Date()},
      {"id":20,"topId":2,"songId":19, "createdAt":new Date(),"updatedAt":new Date()},
      {"id":21,"topId":3,"songId":20, "createdAt":new Date(),"updatedAt":new Date()},
      {"id":22,"topId":3,"songId":21, "createdAt":new Date(),"updatedAt":new Date()},
      {"id":23,"topId":3,"songId":22, "createdAt":new Date(),"updatedAt":new Date()},
      {"id":24,"topId":3,"songId":23, "createdAt":new Date(),"updatedAt":new Date()},
      {"id":25,"topId":3,"songId":24, "createdAt":new Date(),"updatedAt":new Date()},
      {"id":26,"topId":3,"songId":25, "createdAt":new Date(),"updatedAt":new Date()},
      {"id":27,"topId":3,"songId":26, "createdAt":new Date(),"updatedAt":new Date()},
      {"id":28,"topId":3,"songId":27, "createdAt":new Date(),"updatedAt":new Date()},
      {"id":29,"topId":3,"songId":28, "createdAt":new Date(),"updatedAt":new Date()},
      {"id":30,"topId":3,"songId":29, "createdAt":new Date(),"updatedAt":new Date()}
    ])
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('topSongs', null, {});
  }
};
