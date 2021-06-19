require('dotenv').config()
const express = require('express')
const cors = require('cors')
const {
    User,
    Review,
    Raft,
    Boat,
    Driver,
    Package,
    Review,
} = require('./routes')

const app = express()
const port = process.env.PORT_NODE

app.use(cors())
app.use(express.json())
app.use('/user', User)
app.use('/driver', Driver)
app.use('/review', Review)
app.use('/boat', Boat)
app.use('/raft', Raft)
app.use('/package', Package)

app.listen(port)
