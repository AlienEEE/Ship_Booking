const { Router } = require('express')
const router = Router()
const {
    getRaft,
    getRafts,
    addRaft,
    editRaft,
    deleteRaft,
} = require('../controllers/raft')

router.get('/:id', getRaft)
router.get('/', getRafts)
router.post('/', addRaft)
router.put('/', editRaft)
router.delete('/:id', deleteRaft)

module.exports = router
