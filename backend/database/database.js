const Sequelize = require("sequelize");
require('dotenv').config();

const dbOptions = {
    host: process.env.DB_HOST || 'localhost',
    port: Number(process.env.DB_PORT) || 3306,
    dialect: 'mysql',
    timezone: "-03:00",
    logging: false, // Remove logs de SQL no console
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
};

// Enable SSL when requested by provider (Aiven/managed MySQL)
if (process.env.DB_SSL === 'true') {
    dbOptions.dialectOptions = {
        ssl: 'Amazon RDS',
        supportBigNumbers: true,
        bigNumberStrings: true
    };
}

const connection = new Sequelize(
    process.env.DB_NAME || 'smartplantio', 
    process.env.DB_USER || 'root', 
    process.env.DB_PASSWORD || 'renan123456789',
    dbOptions
);

module.exports = connection