const { DataTypes} = require('sequelize');


const TopsSongs =  (sequelize) => sequelize.define('topSongs', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    topId: {
        type: DataTypes.INTEGER,
        references: {
          model: 'tops',
          key: 'id'
        },
        onDelete: 'CASCADE'
    },
    songId: {
        type: DataTypes.INTEGER,
        references: {
            model: 'songs',
            key: 'id'
        },
        onDelete: 'CASCADE'
    },
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE
}, {
    hooks: {
        beforeCreate: function (topSong, options) {
            topSong.createdAt = new Date();
            topSong.updatedAt = new Date();
        },
        beforeUpdate: function(topSong, options) {
            topSong.updatedAt = new Date();
        },
    },
});


module.exports = TopsSongs;


