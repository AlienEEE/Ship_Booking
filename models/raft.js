const { sequelize } = require('./database')
const { DataTypes } = require('sequelize')

const Raft = sequelize.define('Raft', {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    img: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    des: {
        type: DataTypes.STRING,
        allowNull: false,
    },
})

module.exports = Raft
