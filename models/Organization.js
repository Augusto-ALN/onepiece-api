const Sequelize = require('sequelize');
const sequelize = require('./db.js')

const Organization = sequelize.define('Organization', {
  // Model attributes are defined here
  name: {
    type: Sequelize.STRING,
    allowNull: false
  }
});


Organization.sync();

module.exports = Organization