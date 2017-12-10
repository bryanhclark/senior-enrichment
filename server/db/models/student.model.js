const Sequelize = require('sequelize');
const db = require('../index')



const Student = db.define('students', {
    firstName: { type: Sequelize.STRING, allowNull: false },
    lastName: { type: Sequelize.STRING, allowNull: false },
    email: {
        type: Sequelize.STRING, allowNull: true,
    },
    gpa: {
        type: Sequelize.DECIMAL, allowNull: false, validate: {
            min: 0.0,
            max: 4.0
        }
    }

}, {
        getterMethods: {
            fullName() {
                return this.firstName + ' ' + this.lastName
            }
        },
        hooks: {
            beforeValidate: (Student) => {
                if (!Student.gpa) {
                    Student.gpa = 2.2
                } else if (Student.gpa > 4.0) {
                    Student.gpa = 4.0
                } else if (Student.gpa < 0) {
                    Student.gpa = 0.0
                }
            }
        }
    })



module.exports = Student;