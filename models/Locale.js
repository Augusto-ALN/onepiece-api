const Sequelize = require('sequelize');
const sequelize = require('./db.js')

const Locale = sequelize.define('Locale', {
  // Model attributes are defined here
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  sea:{
    type: Sequelize.STRING,
    allowNull: false
  }
});


Locale.sync();

module.exports = Locale