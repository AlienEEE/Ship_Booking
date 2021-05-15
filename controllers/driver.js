const connection = require('../models/db')
const { execute } = require('../models/db')
async function getDriver(req, res) {
  await connection.execute(
    'SELECT *  FROM driver',
    (error, results, flelds) => {
      if (error) throw error
      res.send(results)
    }
  )
}

async function addDriver(req, res) {
  let name = req.body.drivername
  let sname = req.body.driversname
  let phone = req.body.driverphone
  await connection.execute(
    `INSERT INTO driver (driver_name,driver_sname,driver_phone) 
     VALUES ('${name}','${sname}','${phone}')`,
    (error, results, flelds) => {
      if (error) throw error
      res.send(results)
    }
  )
}

async function editDriver(req, res) {
  let newname = req.body.drivername
  let newsname = req.body.driversname
  let newphone = req.body.driverphone
  let id = req.body.id
  await connection.execute(
    `UPDATE driver 
     SET    driver_name = '${newname}',driver_sname = '${newsname}',driver_phone = '${newphone}' WHERE driver_id = ${id}`,
    (error, results, flelds) => {
      if (error) throw error
      res.send(results)
    }
  )
}

async function deleteDriver(req, res) {
  let id = req.body.id
  await connection.execute(
    `DELETE  FROM driver WHERE driver_id = ${id}`,
    (error, results, flelds) => {
      if (error) throw error
      res.send(results)
    }
  )
}

module.exports = { getDriver, addDriver, editDriver, deleteDriver }
