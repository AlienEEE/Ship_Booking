const { execute } = require('../models/db')
const connection = require('../models/db')

//check
async function getPackage(req, res) {
  await connection.execute(
    `SELECT package_id, raft.raft_name, package_price, package_value, package_photo, package_description 
     FROM package, raft 
     WHERE package.raft_id = raft.raft_id`,
    (error, result, field) => {
      if (error) throw error
      res.send(result)
    }
  )
}

//add
async function addPackage(req, res) {
  let raftid = req.body.raft_id
  let pricepackage = req.body.price
  let valuepackage = req.body.value
  let photopackage = req.body.photo
  let despackage = req.body.des
  await connection.execute(
    `INSERT INTO package (package_price, package_photo, package_description, raft_id) 
     VALUES ('${pricepackage}', '${photopackage}', '${despackage}', '${raftid}')`,
    (error, result, field) => {
      if (error) throw error
      res.send(result)
    }
  )
}

// //edit
async function editPackage(req, res) {
  let id = req.body.id
  let raftid = req.body.raft_id
  let pricepackage = req.body.price
  let valuepackage = req.body.value
  let photopackage = req.body.photo
  let despackage = req.body.des
  await connection.execute(
    `UPDATE package 
     SET    raft_id = '${raftid}', package_price = '${pricepackage}', package_photo = '${photopackage}',
            package_description = '${despackage}' 
     WHERE  package_id = ${id}`,
    (error, result, field) => {
      if (error) throw error
      res.send(result)
    }
  )
}

// //delete
async function deletePackage(req, res) {
  let id = req.body.id
  await connection.execute(
    `DELETE FROM package WHERE package_id = ${id}`,
    (error, result, field) => {
      if (error) throw error
      res.send(result)
    }
  )
}

module.exports = { getPackage, addPackage, editPackage, deletePackage }
