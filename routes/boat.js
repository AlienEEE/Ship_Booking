const { Router } = require('express')
const router = Router()
const {
  getBoat,
  addBoat,
  editBoat,
  deleteBoat,
} = require('../controllers/boat')

router.get('/', getBoat)

router.post('/', addBoat)

router.put('/', editBoat)

router.delete('/', deleteBoat)

module.exports = router
