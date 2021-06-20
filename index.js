require('dotenv').config()
const express = require('express')
const cors = require('cors')
const helmet = require('helmet')
const compression = require('compression')

const { User, Raft, Boat, Driver } = require('./routes')
const { ENV } = require('./config')

const app = express()

app.use(cors())
app.use(compression())
app.use(helmet())
app.use(express.json())

app.use('/user', User)
app.use('/driver', Driver)
app.use('/boat', Boat)
app.use('/raft', Raft)

app.listen(ENV.NODE_PORT)
