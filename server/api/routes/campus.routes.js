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

router.post('/', (req, res, next) => {

    Campus.create(req.body)
        .then(campus => res.send(campus))
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
        },
        include: {
            all: true
        }

    }).then(students => {
        res.send(students)
    })
        .catch(next)
])

router.put('/:campusId', (req, res, next) => {
    console.log(req.body);
    Campus.update(req.body, {
        where: {
            id: req.params.campusId
        },
        returning: true
    })
        .spread((numUpdates, updatedCampus) => {
            const theCampus = updatedCampus[0]
            res.send(theCampus)
        })
        .catch(next);
})


router.delete('/:campusId', (req, res, next) => {
    Campus.destroy({
        where: {
            id: req.params.campusId
        }
    })
        .then(() => {
            res.send('something')
        })
        .catch(next);
})



module.exports = router;