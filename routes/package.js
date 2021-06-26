const { Router } = require('express')
const router = Router()
const {
    getPackage,
    getPackages,
    addPackage,
    editPackage,
    deletePackage,
} = require('../controllers/package')

const multer = require('multer')
const m = multer({
    storage: multer.memoryStorage(),
})

router.get('/:id', getPackage)
router.get('/', getPackages)
router.post('/', m.single('file'), addPackage)
router.put('/', editPackage)
router.delete('/:id', deletePackage)
module.exports = router
