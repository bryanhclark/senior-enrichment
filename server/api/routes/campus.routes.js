//all reoutes pertaining to 

'use strict'
const router = require('express').Router()
const Campus = require('../../db/models/campus.model')
const Student = require('../../db/models/student.model')



router.get('/', (req, res, next) => {
    Campus.findAll()
        .then(campus => {
            res.send(campus)
        })
        .catch(next);
})

router.get('/:campusId', (req, res, next) => {
    Campus.findById(Number(req.params.campusId))
        .then(campus => {
            res.send(campus)
        })
        .catch(next);
})

router.get('/:campusId/students', (req, res, next) => [
    Student.findAll({
        where: {
            campusId: req.params.campusId
        }
    })
        .then(students => {
            res.send(students)
        })
        .catch(next)
])



module.exports = router;