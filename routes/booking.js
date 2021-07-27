const { Router } = require('express')
const router = Router()
const {
  getBooking,
  getBookings,
  addBooking,
  deleteBooking
} = require('../controllers/booking')

router.get('/:id', getBooking)
router.get('/', getBookings)
router.post('/', addBooking)
router.delete('/:id', deleteBooking)

module.exports = router
