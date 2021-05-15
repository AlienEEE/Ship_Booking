const connection = require('../models/db')

async function getBooking(req, res) {
  await connection.execute(
    `SELECT  booking_id,user.username,user.name,user.sname,package.package_id,boat.boat_name, 
    booking_value, booking_price, booking_date,travel_date,booking_payment, booking_status
     FROM booking,package,user,boat  WHERE booking.package_id = package.package_id AND 
     booking.boat_id = boat.boat_id AND booking.user_id = user.user_id `,
    (error, results, flelds) => {
      if (error) throw error
      res.send(results)
    }
  )
}

module.exports = { getBooking }
