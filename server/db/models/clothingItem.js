const Sequelize = require('sequelize')
const db = require('../db')

const clothingItem = db.define('clothingItem', {
  category: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      isIn: [['top', 'pants', 'shorts', 'dress', 'skirt', 'underwear', 'socks', 'head', 'accessory', 'other']]
    }
  },
  imageUrl: {
    type: Sequelize.STRING,
    defaultValue: 'https://www.google.com/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwiFopXu3cjhAhWqrFkKHY0nCWsQjRx6BAgBEAU&url=http%3A%2F%2Fclipart-library.com%2Ffree-clothes-cliparts.html&psig=AOvVaw3_3O_2yVU4ip6-HVK8Oh3F&ust=1555095885305746',
    validate: {
      isUrl: true
    }
  },
  dominantColor: {
    type: Sequelize.STRING  //this will be changed to an array of ints when the color thief library is incorporated
  },
  heaviness: {
    type: Sequelize.SMALLINT,
    validate: {
      min: 1,
      max: 5
    }
  }
})

module.exports = Item
