require('dotenv').config()
const express = require('express')
const cors = require('cors')
const helmet = require('helmet')
const compression = require('compression')

const {
  Users,
  Rafts,
  Boats,
  Drivers,
  Packages,
  Bookings,
  Sailings,
  Reviews
} = require('./routes')
const { ENV } = require('./config')
const {
  syncAll,
  syncOneToMany,
  Raft,
  Package,
  Boat,
  Driver,
  Sailing,
  Booking,
  Review,
  User
} = require('./models')

async function startApp () {
  const app = express()

  app.use(cors())
  app.use(compression())
  app.use(helmet())
  app.use(express.json())

  app.use('/user', Users)
  app.use('/driver', Drivers)
  app.use('/boat', Boats)
  app.use('/raft', Rafts)
  app.use('/package', Packages)
  app.use('/booking', Bookings)
  app.use('/sailing', Sailings)
  app.use('/review', Reviews)

  await syncOneToMany(Raft, Package, 'raft_id')
  await syncOneToMany(Package, Booking, 'package_id')
  await syncOneToMany(User, Booking, 'user_id')
  await syncOneToMany(Driver, Sailing, 'driver_id')
  await syncOneToMany(Boat, Sailing, 'boat_id')
  await syncOneToMany(Booking, Sailing, 'booking_id')
  await syncOneToMany(User, Review, 'user_id')

  await syncAll()

  try {
    app.listen(ENV.PORT)
    console.log(`Server is running on http://localhost:${ENV.PORT}`)
  } catch (error) {
    console.error(error)
  }
}

startApp()
