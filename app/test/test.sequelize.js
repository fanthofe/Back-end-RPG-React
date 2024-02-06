require('dotenv').config();
const sequelize = require('../sequelize.client');
const Character = require('../models/sequelize/Character');

async function testConnection(){
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
      } catch (error) {
        console.error('Unable to connect to the database:', error);
      }
}

async function syncCharacterModel() {
    await Character.sync({ force: true });
    console.log("The table for the User model was just (re)created!");  
  }


async function main(){
    await syncCharacterModel();
}

main();