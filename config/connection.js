const Sequelize = require('sequelize');
require('dotenv').config();

let sequelize;

if (process.env.JAWSDB_URL) {
  sequelize = new Sequelize(
    process.env.JAWSDB_NAME,
    process.env.JAWSDB_USER,
    process.env.JAWSDB_PASSWORD,
    {
      host:process.env.JAWSDB_HOST,
      dialect:'mysql',
      port:process.env.JAWSDB_PORT
    }
);
} else {
  sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
      host: 'localhost',
      dialect: 'mysql',
      port: 3306
    }
  );
}

module.exports = sequelize;