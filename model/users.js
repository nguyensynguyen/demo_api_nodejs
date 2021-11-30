const { Sequelize, DataTypes } = require('sequelize');
const db = require('../dao/connect_db');
const Order = require('./order');

const Users = db.define('Users', {
    id:{
        primaryKey:true,
        type:DataTypes.INTEGER,
        allowNull:false
    },
  firstName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  lastName: {
    type: DataTypes.STRING
  },
}, {
});
db.sync();
module.exports = Users;