const { Router } = require('express')
const router = Router()
const {
  getPackage,
  addPackage,
  editPackage,
  deletePackage,
} = require('../controllers/package')

router.get('/', getPackage)

router.post('/', addPackage)

router.put('/', editPackage)

router.delete('/', deletePackage)

module.exports = router
