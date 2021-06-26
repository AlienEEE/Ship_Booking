const { Router } = require('express')
const router = Router()
const {
    getBooking,
    getBookings,
    addBooking,
    editBooking,
    deleteBooking,
} = require('../controllers/booking')

router.get('/:id', getBooking)
router.get('/', getBookings)
router.post('/', addBooking)
router.put('/', editBooking)
router.delete('/:id', deleteBooking)
module.exports = router
