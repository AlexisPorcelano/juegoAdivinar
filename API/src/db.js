require('dotenv').config({ path: '../.env' });

const { Sequelize } = require('sequelize');
const characterModel = require('./models/character');

const { DB_USER, DB_PASSWORD, DB_HOST, DB_PORT } = process.env;

const sequelize = new Sequelize(
  `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/guessgame`,
  {
    logging: false,
    native: false,
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000,
    }
  }
);

// Initialize the model with the sequelize instance
characterModel(sequelize);

// Access the model from sequelize.models
const { Character } = sequelize.models;

module.exports = {
  Character,
  conn: sequelize,
};
