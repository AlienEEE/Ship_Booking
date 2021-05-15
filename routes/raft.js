const { Router } = require('express')
const router = Router()
const {
  getRaft,
  addRaft,
  editRaft,
  deleteRaft,
} = require('../controllers/raft')

router.get('/', getRaft)

router.post('/', addRaft)

router.put('/', editRaft)

router.delete('/', deleteRaft)

module.exports = router
