require('dotenv').config()
const express = require('express')
const cors = require('cors')
const helmet = require('helmet')
const compression = require('compression')

const { Users, Rafts, Boats, Drivers } = require('./routes')
const { ENV } = require('./config')
const {
    syncAll,
    syncOneToMany,
    Raft,
    Package,
    Boat,
    Driver,
    Sailing,
} = require('./models')

async function startApp() {
    const app = express()

    app.use(cors())
    app.use(compression())
    app.use(helmet())
    app.use(express.json())

    app.use('/user', Users)
    app.use('/driver', Drivers)
    app.use('/boat', Boats)
    app.use('/raft', Rafts)

    await syncOneToMany(Raft, Package, 'raft_id')
    await syncOneToMany(Driver, Sailing, 'driver_id')
    await syncOneToMany(Boat, Sailing, 'boat_id')
    await syncAll(true)

    try {
        app.listen(ENV.PORT)
        console.log(`Server is running on http://localhost:${ENV.PORT}`)
    } catch (error) {
        console.error(error)
    }
}

startApp()
