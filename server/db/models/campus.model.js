const Sequelize = require('sequelize');
const db = require('../index')



const Campus = db.define('campuses', {
    name: { type: Sequelize.STRING, allowNull: false },
    imageUrl: { type: Sequelize.STRING, defaultValue: "https://imgur.com/gallery/2obUI" },
    description: { type: Sequelize.TEXT }

})



module.exports = Campus;