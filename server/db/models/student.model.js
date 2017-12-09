const Sequelize = require('sequelize');
const db = require('../index')



const Student = db.define('students', {
    firstName: { type: Sequelize.STRING, allowNull: false },
    lastName: { type: Sequelize.STRING, allowNull: false },
    email: {
        type: Sequelize.STRING, allowNull: true,
    },

}, {
        getterMethods: {
            fullName() {
                return this.firstName + ' ' + this.lastName
            }
        },
        // hooks: {
        //     beforeValidate: (Student) => {
        //         Student.email = Student.firstName + '.' + Student.lastName + '@gmail.com'
        //     }
        // }
    })



module.exports = Student;