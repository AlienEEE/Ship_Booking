const express = require('express')
const router = express.Router()
const { getReview, getReviews, addReview } = require('../controllers/review')

router.get('/:id', getReview)
router.get('/', getReviews)
router.post('/', addReview)
module.exports = router
