const { sequelize } = require('./db')
const { DataTypes } = require('sequelize')
const Boat = sequelize.define('Boat', {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    img: {
        type: DataTypes.STRING,
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
