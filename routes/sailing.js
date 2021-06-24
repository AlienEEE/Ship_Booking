const { Router } = require('express')
const router = Router()
const { getSailing } = require('../controllers/sailing')

router.get('/:id', getSailing)
module.exports = router
