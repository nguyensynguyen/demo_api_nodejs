const { Sequelize } = require('sequelize');
const sequelize = new Sequelize('demo_db_nodejs', 'root', '', {
    host: 'localhost',
    port: 3306,
    dialect: 'mysql'
});

module.exports = { sequelize }