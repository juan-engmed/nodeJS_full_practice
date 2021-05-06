const { Sequelize } = require('sequelize');

const connection = new Sequelize('blognode','root','Light100!', {
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = connection;

