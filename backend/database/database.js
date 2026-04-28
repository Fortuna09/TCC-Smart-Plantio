const Sequelize = require("sequelize");
require('dotenv').config();

const connection = new Sequelize(
    process.env.DB_NAME || 'smartplantio', 
    process.env.DB_USER || 'root', 
    process.env.DB_PASSWORD || 'renan123456789',
    {
        host: process.env.DB_HOST || 'localhost',
        dialect: 'mysql',
        timezone: "-03:00",
        logging: false // Remove logs de SQL no console
    }
);

module.exports = connection