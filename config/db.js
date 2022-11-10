const { Sequelize } = require('sequelize')

const userModel = require('./src/models/users.model')

const sequelize = new Sequelize(
  'soundwave',
  'root',
  'jejeje.',
  {
    host: 'localhost',
    dialect: 'mysql',
    port: 3306,
    logging: false
  }
)

const models = [ userModel ]

for(let model of models)
  model(sequelize)


//Relations between models  
const { users,typeofusers } = sequelize.models;
users.hasMany(typeofusers);
typeofusers.belongsTo(users); // Relation one-to-many in typeofusers table */

module.exports = sequelize