'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('songs', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
      },
      year: {
        type: Sequelize.INTEGER
      },
      linkYT: {
        type: Sequelize.TEXT,
        validate: {
          isUrl: true
        }
      },
      artistId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'artists',
          key: 'id'
        },
        onDelete: 'CASCADE'
      },
      genreId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'genres',
          key: 'id'
        },
        onDelete: 'CASCADE'
      },
      userId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'users',
          key: 'id'
        },
        onDelete: 'CASCADE'
      },
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE
    })
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('songs');
  }
};
