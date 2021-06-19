const { sequelize } = require('./db')
const { DataTypes } = require('sequelize')
const Raft = sequelize.define('Raft', {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    img: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    des: {
        type: DataTypes.STRING,
        allowNull: false,
    },
})

module.exports = Raft
