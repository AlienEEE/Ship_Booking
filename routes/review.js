const { Router } = require('express')
const router = Router()
const { getReview, getReviews } = require('../controllers/review')

router.get('/:id', getReview)
router.get('/', getReviews)
module.exports = router
