const { sequelize } = require('./database')
const { DataTypes } = require('sequelize')

const Booking = sequelize.define(
    'Booking',
    {
        value: {
            field: 'booking_value',
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        price: {
            field: 'booking_price',
            type: DataTypes.FLOAT,
            allowNull: false,
        },
        travel_date: {
            field: 'travel_date',
            type: DataTypes.DATE,
            allowNull: false,
        },
        travelback_date: {
            field: 'travelback_date',
            type: DataTypes.DATEONLY,
            allowNull: false,
        },
        payment: {
            field: 'booking_payment',
            type: DataTypes.TEXT,
            allowNull: false,
        },
        status: {
            field: 'booking_status',
            type: DataTypes.STRING(20),
            allowNull: false,
            defaultValue: 'กำลังตรวจสอบ',
        },
        package_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
    },
    {
        tableName: 'bookings',
    }
)
module.exports = Booking
