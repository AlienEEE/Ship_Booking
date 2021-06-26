const { sequelize } = require('./database')
const { DataTypes } = require('sequelize')

const Booking = sequelize.define('Booking', {
    value: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    price: {
        type: DataTypes.FLOAT,
        allowNull: false,
    },
    booking_date: {
        type: DataTypes.DATE,
        allowNull: true,
    },
    travel_date: {
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
    package_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
})

module.exports = Booking
