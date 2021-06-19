const { sequelize } = require('./db')
const { DataTypes } = require('sequelize')

const Package = sequelize.define('Package', {
    price: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    value: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    img: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    des: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    raftId: {
        type: DataTypes.INTEGER,
        references: { model: 'rafts', key: 'id' },
    },
})

module.exports = Package
