const { Router } = require('express')
const router = Router()
const {
    getReview,
    getReviews,
    addReview,
    deleteReview,
} = require('../controllers/review')

router.get('/:id', getReview)
router.get('/', getReviews)
router.post('/', addReview)
router.delete('/:id', deleteReview)

module.exports = router
