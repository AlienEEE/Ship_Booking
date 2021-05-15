const express = require('express')
const router = express.Router()
const {
  getUser,
  addUser,
  editUser,
  deleteUser,
} = require('../controllers/user')

router.get('/', getUser)
router.post('/', addUser)
router.put('/', editUser)
router.delete('/', deleteUser)

module.exports = router
