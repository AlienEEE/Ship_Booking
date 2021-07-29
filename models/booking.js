const { sequelize } = require('./database')
const { DataTypes } = require('sequelize')

const Booking = sequelize.define(
    'Booking',
    {
        value: {
            field: 'booking_value',
            type: DataTypes.INTEGER,
            allowNull: false
        },
        price: {
            field: 'booking_price',
            type: DataTypes.FLOAT,
            allowNull: false
        },
        booking_date: {
            field: 'booking_date',
            type: DataTypes.DATE,
            allowNull: false
        },
        travel_date: {
            field: 'travel_date',
            type: DataTypes.DATE,
            allowNull: false
        },
        payment: {
            field: 'booking_payment',
            type: DataTypes.TEXT,
            allowNull: false
        },
        status: {
            field: 'booking_status',
            type: DataTypes.STRING(15),
            allowNull: false
        },
        package_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    },
    {
        tableName: 'bookings'
    }
)

module.exports = Booking
