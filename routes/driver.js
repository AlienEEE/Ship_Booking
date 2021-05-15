const { Router } = require('express')
const router = Router()
const {
  getDriver,
  addDriver,
  editDriver,
  deleteDriver,
} = require('../controllers/driver')

router.get('/', getDriver)
router.post('/', addDriver)
router.put('/', editDriver)
router.delete('/', deleteDriver)

module.exports = router
