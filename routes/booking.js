const { Router } = require('express')

const router = Router()
const {
    getBooking,
    getBookings,
    addBooking,
    editBooking,
    deleteBooking,
} = require('../controllers/booking')

router.get('/', getBookings)
router.get('/:id', getBooking)
router.post('/', addBooking)
router.put('/', editBooking)
router.delete('/', deleteBooking)
module.exports = router
