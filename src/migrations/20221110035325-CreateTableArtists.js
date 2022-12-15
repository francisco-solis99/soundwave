'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('artists', {
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
      country: {
        type: Sequelize.STRING,
        allowNull: false
      },
      ytchannel: {
        type: Sequelize.STRING,
        unique: true,
        validate: {
          isUrl: true
        }
      },
      urlImage: {
        type: Sequelize.STRING,
        validate: {
          isUrl: true
        }
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
    await queryInterface.dropTable('artists');
  }
};
