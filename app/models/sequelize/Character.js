const { DataTypes } = require('sequelize');
const sequelize = require('../../sequelize.client');

const Character = sequelize.define('Character', {
  // Pas besoin de mettre l'id car autogénéré
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  level: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  maxHealth: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  img: {
    type: DataTypes.STRING,
    allowNull: false
  },
  magic: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  attack: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  defense: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  magicDefense: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
}, {
    tableName: "character"
  });

  module.exports = Character;