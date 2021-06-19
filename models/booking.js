const { sequelize } = require('./db')
const { DataTypes } = require('sequelize')
const Booking = sequelize.define('Booking', {
    price: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    value: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    date_booking: {
        type: DataTypes.DATE,
        allowNull: true,
    },
    date_travel: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    payment: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    status: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    userId: {
        type: DataTypes.INTEGER,
        references: { model: 'users', key: 'id' },
    },
    packageId: {
        type: DataTypes.INTEGER,
        references: { model: 'packages', key: 'id' },
    },
})

module.exports = Booking
