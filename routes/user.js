const { Router } = require('express')
const router = Router()
const {
    getUser,
    getUsers,
    addUser,
    editUser,
    deleteUser,
    // loginUser,
} = require('../controllers/user')

router.get('/:id', getUser)
router.get('/', getUsers)
router.post('/', addUser)
router.put('/', editUser)
router.delete('/:id', deleteUser)

// router.post('/', loginUser)

module.exports = router
