const { sequelize } = require('./database')
const { DataTypes } = require('sequelize')

const Review = sequelize.define('Review', {
    detail: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    rank: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
})

module.exports = Review
