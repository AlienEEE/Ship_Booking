require('dotenv').config()
const express = require('express')
const cors = require('cors')
const helmet = require('helmet')
const compression = require('compression')

const { User, Raft, Boat, Driver } = require('./routes')
const { ENV } = require('./config')
const { syncAll } = require('./models')

async function startApp() {
    const app = express()

    app.use(cors())
    app.use(compression())
    app.use(helmet())
    app.use(express.json())

    app.use('/user', User)
    app.use('/driver', Driver)
    app.use('/boat', Boat)
    app.use('/raft', Raft)

    await syncAll(true)

    try {
        app.listen(ENV.NODE_PORT)
        console.log(`Server is running on http://localhost:${ENV.NODE_PORT}`)
    } catch (error) {
        console.error(error)
    }
}

startApp()
