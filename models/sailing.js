const { sequelize } = require('./database')
const { DataTypes } = require('sequelize')
const Sailing = sequelize.define(
    'Sailing',
    {
        depart_date: {
            field: 'sailing_depart_date',
            type: DataTypes.DATEONLY,
            allowNull: false,
        },
        return_date: {
            field: 'sailing_return_date',
            type: DataTypes.DATEONLY,
            allowNull: false,
        },
        driver_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        boat_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        booking_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
    },
    {
        tableName: 'sailings',
    }
)
module.exports = Sailing
