const Sequelize = require('sequelize');
const sequelize = require('./db.js');
const Locale = require('../models/Locale');
const Organization = require('../models/Organization')

const Character = sequelize.define('Character', {
  // Model attributes are defined here
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  nickname:{
    type: Sequelize.STRING,
    allowNull: true
  },
  mainSkill:{
    type: Sequelize.STRING,
    allowNull: false
  },
});

Character.belongsTo(Locale)
Character.belongsTo(Organization)

Character.sync();

module.exports = Character