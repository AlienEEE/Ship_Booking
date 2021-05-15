const { execute } = require('../models/db')
const connection = require('../models/db')

//check
async function getBoat(req, res) {
  await connection.execute('SELECT * FROM boat', (error, result, field) => {
    if (error) throw error
    res.send(result)
  })
}

//add
async function addBoat(req, res) {
  let typeboat = req.body.type
  let valueboat = req.body.value
  let nameboat = req.body.name
  await connection.execute(
    `INSERT INTO boat (boat_name, boat_type, boat_value) 
     VALUES ('${nameboat}', '${typeboat}', '${valueboat}')`,
    (error, result, field) => {
      if (error) throw error
      res.send(result)
    }
  )
}

//edit
async function editBoat(req, res) {
  let id = req.body.id
  let nameboat = req.body.name
  let typeboat = req.body.type
  let valueboat = req.body.value
  await connection.execute(
    `UPDATE boat 
     SET    boat_name = '${nameboat}', boat_type = '${typeboat}', boat_value = '${valueboat}' WHERE boat_id = ${id}`,
    (error, result, field) => {
      if (error) throw error
      res.send(result)
    }
  )
}

//delete
async function deleteBoat(req, res) {
  let id = req.body.id
  await connection.execute(
    `DELETE FROM boat WHERE boat_id = ${id}`,
    (error, result, field) => {
      if (error) throw error
      res.send(result)
    }
  )
}

module.exports = { getBoat, addBoat, editBoat, deleteBoat }
