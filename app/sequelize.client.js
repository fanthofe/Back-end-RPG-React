const { Sequelize } = require('sequelize');

const sequelizeClient = new Sequelize(process.env.PG_URL);

module.exports = sequelizeClient;