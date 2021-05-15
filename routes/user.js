const express = require('express')
const router = express.Router()
const {
  getUser,
  getUsers,
  addUser,
  editUser,
  deleteUser,
} = require('../controllers/user')

router.get('/:id', getUser)
router.get('/', getUsers)
router.post('/', addUser)
router.put('/', editUser)
router.delete('/', deleteUser)

module.exports = router
