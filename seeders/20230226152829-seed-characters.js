'use strict';
const charactersData = require('../data/characters.json');

const formatedCharactersData = charactersData.map((item) => {
  return{
    // spread operator ... = j'ajoute toutes les infos existants plus ceux après la virgule
    ...item,
    createdAt: new Date(),
    updatedAt: new Date()
  }
});

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
     return queryInterface.bulkInsert('character', formatedCharactersData);
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
