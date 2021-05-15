const { Router } = require('express')
const router = Router()
const {
  getPackage,
  getPackages,
  addPackage,
  editPackage,
  deletePackage,
} = require('../controllers/package')

router.get('/:id', getPackage)

router.get('/', getPackages)

router.post('/', addPackage)

router.put('/', editPackage)

router.delete('/', deletePackage)

module.exports = router
