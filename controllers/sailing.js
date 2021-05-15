const connection = require('../models/db')
async function getSailing(req, res) {
  let id = req.params.id
  await connection.execute(
    `SELECT sailing_id,driver.driver_name,driver.driver_sname,boat.boat_name,boat.boat_type,
            sailing_date,sailingback_date 
     FROM   sailing,driver,boat  
     WHERE  sailing.driver_id = driver.driver_id AND sailing.boat_id = boat.boat_id AND sailing_id = '${id}'  `,
    (error, results, flelds) => {
      if (error) throw error
      res.send(results)
    }
  )
}

async function getSailings(req, res) {
  await connection.execute(
    `SELECT sailing_id,driver.driver_name,driver.driver_sname,boat.boat_name,boat.boat_type,
            sailing_date,sailingback_date 
     FROM   sailing,driver,boat  
     WHERE  sailing.driver_id = driver.driver_id AND sailing.boat_id = boat.boat_id  `,
    (error, results, flelds) => {
      if (error) throw error
      res.send(results)
    }
  )
}

async function addSailing(req, res) {
  let driverid = req.body.driver_id
  let boatid = req.body.boat_id
  let sailingdate = req.body.sailing_date
  let backdate = req.body.back_date
  await connection.execute(
    `INSERT INTO sailing (driver_id,boat_id,sailing_date,sailingback_date) 
     VALUES ('${driverid}','${boatid}','${sailingdate}','${backdate}')`,
    (error, results, flelds) => {
      if (error) throw error
      res.send(results)
    }
  )
}

async function editSailing(req, res) {
  let id = req.body.id
  let driverid = req.body.driver_id
  let boatid = req.body.boat_id
  let sailingdate = req.body.sailing_date
  let backdate = req.body.back_date
  await connection.execute(
    `UPDATE sailing 
     SET    driver_id = '${driverid}', boat_id = '${boatid}',sailing_date = '${sailingdate}', sailingback_date = '${backdate}' 
     WHERE  sailing_id = ${id}`,
    (error, result, field) => {
      if (error) throw error
      res.send(result)
    }
  )
}

async function deleteSailing(req, res) {
  let id = req.body.id
  await connection.execute(
    `DELETE FROM sailing WHERE sailing_id = ${id}`,
    (error, result, field) => {
      if (error) throw error
      res.send(result)
    }
  )
}

module.exports = {
  getSailing,
  getSailings,
  addSailing,
  editSailing,
  deleteSailing,
}
