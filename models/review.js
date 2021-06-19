const { sequelize } = require('./db')
const { DataTypes } = require('sequelize')

const Review = sequelize.define('Review', {
    rank: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    detail: {
        type: DataTypes.TEXT,
        allowNull: false,
    },

    userId: {
        type: DataTypes.INTEGER,
        references: { model: 'users', key: 'id' },
    },
})

module.exports = Review
