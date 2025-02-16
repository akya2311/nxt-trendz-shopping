const { Sequelize, DataTypes } = require('sequelize');
const { sequelize } = require('../config/db');

const User = sequelize.define('User', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  role: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: 'employee',
  },
  otp: {
    type: DataTypes.STRING,
    allowNull: true, // Will store OTP temporarily
  },
  otpExpires: {
    type: DataTypes.DATE,
    allowNull: true, // Expiry time for OTP validation
  }
}, {
  timestamps: true,
});

module.exports = User;
