const { Sequelize, DataTypes } = require('sequelize');
const db = require('../dao/connect_db');
const Users = require('./users');

const Order = db.define('Oders', {
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
  
}, {
});
Order.belongsTo(Users,{foreignKey:"user_id"})
db.sync();
module.exports = Order;