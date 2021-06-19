const { Router } = require('express')
const router = Router()
const {
    getBoat,
    getBoats,
    addBoat,
    editBoat,
    deleteBoat,
    uploadBoat,
} = require('../controllers/boat')
const multer = require('multer')
const m = multer({
    storage: multer.memoryStorage(),
})
router.get('/', getBoats)
router.get('/:id', getBoat)
router.post('/', addBoat)
router.put('/', editBoat)
router.delete('/:id', deleteBoat)
router.post('/:id', m.single('file'), uploadBoat)

module.exports = router
