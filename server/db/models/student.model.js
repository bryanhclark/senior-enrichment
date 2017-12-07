const Sequelize = require('sequelize');
const db = require('../index')



const Student = db.define('students', {
    firstName: { type: Sequelize.STRING, allowNull: false },
    lastName: { type: Sequelize.STRING, allowNull: false },
    email: {
        type: Sequelize.STRING, allowNull: false, validate: {
            isEmail: true
        }
    },

}, {
        getterMethods: {
            fullName() {
                return this.firstName + ' ' + this.lastName
            }
        }
    })



module.exports = Student;