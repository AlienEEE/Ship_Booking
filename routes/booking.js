const { Router } = require('express')
const router = Router()
const { getBooking } = require('../controllers/booking')

router.get('/', getBooking)

module.exports = router
