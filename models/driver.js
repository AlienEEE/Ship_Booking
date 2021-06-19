const { sequelize } = require('./db')
const { DataTypes } = require('sequelize')

const Driver = sequelize.define('Driver', {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    sname: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    phone: {
        type: DataTypes.STRING,
        allowNull: false,
    },
})

module.exports = Driver
