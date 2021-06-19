const { Sequelize } = require('sequelize')
const sequelize = new Sequelize('project', 'root', 'yobyim5598', {
    host: 'localhost',
    dialect: 'mysql',
    logging: false,
})

module.exports = { sequelize }
