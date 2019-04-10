const Sequelize = require('sequelize')
const db = require('../db')

const Item = db.define('item', {
  text: {
    type: Sequelize.TEXT,
    allowNull: false
  },
  done: {
    type: Sequelize.BOOLEAN,
    defaultValue: false
  }
})

module.exports = Item
