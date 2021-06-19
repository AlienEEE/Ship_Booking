const mysql = require('mysql2')
const fs = require('fs')
// const connection = mysql.createConnection({
//     host: process.env.HOST_DB,
//     user: process.env.USER,
//     password: process.env.PASSWORD_DB,
//     port: process.env.PORT_DB,
//     database: 'project',
//     ssl: {
//         ca: fs.readFileSync(__dirname + '/ca-certificate.crt'),
//     },
// })
const { Sequelize } = require('sequelize')
const sequelize = new Sequelize('project', 'root', 'yobyim5598', {
    host: 'localhost',
    dialect: 'mysql',
    logging: false,
})

module.exports = { sequelize }
