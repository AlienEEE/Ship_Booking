const { Router } = require('express')
const { getBoats } = require('../controllers/boat')
const router = Router()
const { getBooking, getBookings } = require('../controllers/booking')

router.get('/', getBooking)
router.get('/:id', getBookings)
module.exports = router
