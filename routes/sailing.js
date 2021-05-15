const express = require('express')
const router = express.Router()
const {
  getSailing,
  addSailing,
  editSailing,
  deleteSailing,
} = require('../controllers/sailing')

router.get('/', getSailing)
router.post('/', addSailing)
router.put('/', editSailing)
router.delete('/', deleteSailing)
module.exports = router
