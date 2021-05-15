const { Router } = require('express')
const router = Router()
const {
  getBoat,
  getBoats,
  addBoat,
  editBoat,
  deleteBoat,
} = require('../controllers/boat')

router.get('/', getBoats)
router.get('/:id', getBoat)
router.post('/', addBoat)
router.put('/', editBoat)
router.delete('/', deleteBoat)

module.exports = router
