const connection = require('../models/db')
async function getReview(req, res) {
  await connection.execute(
    `SELECT  review_id,user.username,review_detail,review_rank FROM user,review WHERE review.user_id = user.user_id `,
    (error, results, flelds) => {
      if (error) throw error
      res.send(results)
    }
  )
}

async function addReview(req, res) {
  let userid = req.body.user_id
  let userreview = req.body.review
  let reviewrank = req.body.rank
  await connection.execute(
    `INSERT INTO review (user_id,review_detail,review_rank) VALUES ('${userid}','${userreview}','${reviewrank}')`,
    (error, results, flelds) => {
      if (error) throw error
      res.send(results)
    }
  )
}

module.exports = { getReview, addReview }
