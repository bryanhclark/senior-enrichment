//all reoutes pertaining to 

'use strict'
const router = require('express').Router()
const Campus = require('../../db/models/campus.model')



router.get('/', (req, res, next) => {
    Campus.findAll()
        .then(campus => {
            res.send(campus)
        })
        .catch(next);
})



module.exports = router;