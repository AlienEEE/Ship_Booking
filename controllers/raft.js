const { execute } = require('../models/db')
const connection = require('../models/db')

//check
async function getRaft(req, res) {
  await connection.execute('SELECT * FROM raft', (error, result, field) => {
    if (error) throw error
    res.send(result)
  })
}

//add
async function addRaft(req, res) {
  let nameraft = req.body.name
  let photoraft = req.body.photo
  let desraft = req.body.des
  await connection.execute(
    `INSERT INTO raft (raft_name, raft_photo, raft_description) VALUES ('${nameraft}', '${photoraft}', '${desraft}')`,
    (error, result, field) => {
      if (error) throw error
      res.send(result)
    }
  )
}

//edit
async function editRaft(req, res) {
  let id = req.body.id
  let nameraft = req.body.name
  let photoraft = req.body.photo
  let desraft = req.body.des
  await connection.execute(
    `UPDATE raft SET raft_name = '${nameraft}', raft_photo = '${photoraft}', raft_description = '${desraft}' WHERE raft_id = ${id}`,
    (error, result, field) => {
      if (error) throw error
      res.send(result)
    }
  )
}

//delete
async function deleteRaft(req, res) {
  let id = req.body.id
  await connection.execute(
    `DELETE FROM raft WHERE raft_id = ${id}`,
    (error, result, field) => {
      if (error) throw error
      res.send(result)
    }
  )
}

module.exports = { getRaft, addRaft, editRaft, deleteRaft }
