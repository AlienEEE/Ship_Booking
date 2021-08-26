const { Router } = require('express')
const router = Router()
const {
    getBooking,
    getBookings,
    addBooking,
    deleteBooking,
} = require('../controllers/booking')
const multer = require('multer')
const formData = multer({
    storage: multer.memoryStorage(),
})

router.get('/:id', getBooking)
router.get('/', getBookings)
router.post('/', formData.single('file'), addBooking)
router.delete('/:id', deleteBooking)

module.exports = router
