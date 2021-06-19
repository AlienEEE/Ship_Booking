const express = require('express')
const router = express.Router()
const {
    getSailing,
    getSailings,
    addSailing,
    editSailing,
    deleteSailing,
} = require('../controllers/sailing')

router.get('/:id', getSailing)
router.get('/', getSailings)
router.post('/', addSailing)
router.put('/', editSailing)
router.delete('/', deleteSailing)
module.exports = router
