'use strict'

var express = require('express')
var UserController = require('../controllers/UserController')

var router = express.Router()

router.get('/user', UserController.index)
router.get('/user/:id?', UserController.show)
router.post('/user', UserController.store)
router.put('/user/:id?', UserController.update)
router.delete('/user/:id?', UserController.delete)

module.exports = router
