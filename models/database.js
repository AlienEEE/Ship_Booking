const { Sequelize } = require('sequelize')
const { ENV } = require('../config')

const sequelize = new Sequelize(ENV.DB_NAME, ENV.DB_USER, ENV.DB_PASS, {
    host: ENV.DB_HOST,
    dialect: 'mysql',
    logging: false,
})

async function syncAll(force = false) {
    await sequelize.sync({ force: force })
}
async function syncOne(model, force = false) {
    await model.sync({ force: force })
}

module.exports = { sequelize, syncAll, syncOne }
