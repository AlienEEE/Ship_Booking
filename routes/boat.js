const { Router } = require('express')
const router = Router()
const {
    getBoat,
    getBoats,
    addBoat,
    editBoat,
    deleteBoat,
} = require('../controllers/boat')
const multer = require('multer')
const m = multer({
    storage: multer.memoryStorage(),
})
router.get('/', getBoats)
router.get('/:id', getBoat)
router.post('/', m.single('file'), addBoat)
router.put('/', editBoat)
router.delete('/:id', deleteBoat)

module.exports = router
