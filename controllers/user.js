const connection = require('../models/db')
async function getUser(req, res) {
  await connection.execute('SELECT *  FROM user', (error, results, flelds) => {
    if (error) throw error
    res.send(results)
  })
}

async function addUser(req, res) {
  let nameuser = req.body.name
  let snameuser = req.body.sname
  let phoneuser = req.body.phone
  let usernameuser = req.body.username
  let passworduser = req.body.password
  await connection.execute(
    `INSERT INTO user (name,sname,phone,username,password) 
     VALUES ('${nameuser}','${snameuser}','${phoneuser}','${usernameuser}','${passworduser}')`,
    (error, results, flelds) => {
      if (error) throw error
      res.send(results)
    }
  )
}

async function editUser(req, res) {
  let newname = req.body.name
  let newsname = req.body.sname
  let newphone = req.body.phone

  let newusername = req.body.username
  let newpassword = req.body.password
  let id = req.body.id
  await connection.execute(
    `UPDATE user 
     SET    name = '${newname}',sname = '${newsname}',phone = '${newphone}',
            username = '${newusername}',password = '${newpassword}' 
     WHERE user_id = ${id}`,
    (error, results, flelds) => {
      if (error) throw error
      res.send(results)
    }
  )
}

async function deleteUser(req, res) {
  let id = req.body.id
  await connection.execute(
    `DELETE  FROM user WHERE user_id = ${id}`,
    (error, results, flelds) => {
      if (error) throw error
      res.send(results)
    }
  )
}

module.exports = { getUser, addUser, editUser, deleteUser }
