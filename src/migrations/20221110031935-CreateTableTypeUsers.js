'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    up: async(queryInterface, Sequelize) => {
      await queryInterface.createTable('typeusers', {
        id: { 
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true 
        },
        name: { 
          type: Sequelize.STRING,
          allowNull:false,
          unique: true
        },
        createdAt: Sequelize.DATE,
        updatedAt: Sequelize.DATE
        })
    }, 
    
    down: async(queryInterface, Sequelize) => {
      await queryInterface.dropTable('typeusers');
    }
  };  
