const { sequelize } = require('./database')
const { DataTypes } = require('sequelize')

const Package = sequelize.define('Package', {
    price: {
        type: DataTypes.FLOAT,
        allowNull: false,
    },
    value: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    image: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: true,
    },
    raft_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
})
module.exports = Package
