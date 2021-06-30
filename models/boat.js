const { sequelize } = require('./database')
const { DataTypes } = require('sequelize')

const Boat = sequelize.define('Boat', {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    img: {
        type: DataTypes.TEXT,
        allowNull: true,
    },
    type: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    value: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
})

module.exports = Boat
