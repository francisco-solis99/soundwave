'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async(queryInterface, Sequelize) => {
    await queryInterface.createTable('users', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      name: {
        type: Sequelize.STRING,
        allowNull:false
      },
      surname: Sequelize.STRING,
      nickName: Sequelize.STRING,
      email: {
        type: Sequelize.STRING,
        allowNull:false,
        unique: true,
        validate: {
          isEmail:true
        }
       },
      password:{
        type: Sequelize.STRING,
        allowNull:false
      },
      typeuserId:{
        type: Sequelize.INTEGER,
        references:{
          model: 'typeusers',
          key: 'id'
       },
       onDelete: 'CASCADE'
     },
     createdAt: Sequelize.DATE,
     updatedAt: Sequelize.DATE,
    })
  },

  down: async(queryInterface, Sequelize) => {
    await queryInterface.dropTable('users');
  }
};
