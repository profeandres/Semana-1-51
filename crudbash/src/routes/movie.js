'use strict'

var express = require('express')
var MovieController = require('../controllers/MovieController')

var router = express.Router()

router.get('/movie', MovieController.index)
router.get('/movie/:id?', MovieController.show)
router.post('/movie', MovieController.store)
router.put('/movie/:id?', MovieController.update)
router.delete('/movie/:id?', MovieController.delete)

module.exports = router