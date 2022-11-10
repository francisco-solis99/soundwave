'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('topSongs', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    topId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'tops',
          key: 'id'
        },
        onDelete: 'CASCADE'
    },
    songId: {
        type: Sequelize.INTEGER,
        references: {
            model: 'songs',
            key: 'id'
        },
        onDelete: 'CASCADE'
    },
    createdAt: Sequelize.DATE,
    updatedAt: Sequelize.DATE
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('topSongs');
  }
};
