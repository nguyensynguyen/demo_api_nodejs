const { Sequelize, DataTypes } = require('sequelize');
const db = require('../dao/connect_db');
const Order = require('./order');
const Users = require('./users');

const Role = db.define('Role', {
    id:{
        primaryKey:true,
        type:DataTypes.INTEGER,
        allowNull:false
    },
  order_name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  price: {
    type: DataTypes.STRING
  },
  user_id: {
    type: DataTypes.INTEGER
  },
  order_id: {
    type: DataTypes.INTEGER
  },
  
}, {
});
Role.belongsTo(Users,{foreignKey:"user_id"})
Role.belongsTo(Order,{foreignKey:"order_id"})
db.sync();
module.exports = Role;