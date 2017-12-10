//all reoutes pertaining to 
'use strict'
const router = require('express').Router()
const Student = require('../../db/models/student.model')
const Campus = require('../../db/models/campus.model')



router.get('/', (req, res, next) => {
    Student.findAll({
        include: [{
            all: true, nested: true
        }]
    })
        .then(students => {
            res.send(students)
        })
        .catch(next);
})

router.get('/:studentId', (req, res, next) => {
    Student.findById(req.params.studentId, {
        include: {
            all: true
        }
    })
        .then(foundStudent => {
            res.send(foundStudent)
        })
        .catch(next)
})

router.post('/', (req, res, next) => {

    Campus.findById(req.body.campus)
        .then(campus => {
            let campusName = campus.name.split(' ').join('.')
            return Student.create({
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                campusId: req.body.campus,
                email: req.body.firstName + '.' + req.body.lastName + '@' + (campus.name.split(' ').join('.')) + ".com",
                gpa: req.body.gpa
            })
        })
        .then(createdStudent => {
            return Student.findById(createdStudent.id, {
                include: {
                    all: true, nested: true
                }
            })
        })
        .then(foundStudent => {
            res.send(foundStudent)
        })
        .catch(next)
})

router.put('/:studentId', (req, res, next) => {
    Student.update(req.body,
        {
            where: {
                id: req.params.studentId
            },
            returning: true
        })
        .spread((numUpdates, updatedStudent) => {
            const theStudent = updatedStudent[0]
            console.log(theStudent)
            return Student.findById(theStudent.id, {
                include: {
                    all: true, nested: true
                }
            })
        })
        .then(foundStudent => {
            res.send(foundStudent)
        })
        .catch(next);
})

router.delete('/:studentId', (req, res, next) => {
    Student.destroy({
        where: {
            id: req.params.studentId
        }
    })
        .then(() => {
            console.log('here');
            res.send('something')
        })
        .catch(next)
})




module.exports = router;