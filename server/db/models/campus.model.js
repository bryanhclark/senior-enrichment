const Sequelize = require('sequelize');
const db = require('../index')



const Campus = db.define('campuses', {
    name: { type: Sequelize.STRING, allowNull: false },
    imageUrl: { type: Sequelize.STRING, defaultValue: "https://vignette.wikia.nocookie.net/en.futurama/images/9/99/PlanetVinci.jpg/revision/latest?cb=20100801225456" },
    description: { type: Sequelize.TEXT }

})



module.exports = Campus;