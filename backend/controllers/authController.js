const asyncHandler = require('express-async-handler');
const bcrypt = require('bcryptjs');
const nodemailer = require('nodemailer');
const generateToken = require('../utils/generateToken');
const User = require('../models/userModel');
require('dotenv').config();

// Setup Nodemailer Transporter
const transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: process.env.EMAIL_USER,  // Use environment variables
    pass: process.env.EMAIL_PASS,
  },
});

// @desc Get all users (Only for Admin users)
// @route GET /api/auth/users
// @access Private (Admin only)
const getUser = asyncHandler(async (req, res) => {
  const users = await User.findAll();
  res.json(users);
});

// @desc Register new user
// @route POST /api/auth/register
// @access Public
const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password, role } = req.body;

  if (!name || !email || !password) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  const passwordRegex = /^.{8,}$/;
  if (!passwordRegex.test(password)) {
    return res.status(400).json({ message: 'Password must be at least 8 characters long.' });
  }

  const userExists = await User.findOne({ where: { email } });
  if (userExists) {
    return res.status(400).json({ message: 'User already exists' });
  }

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  const user = await User.create({
    name,
    email,
    password: hashedPassword,
    role: role || 'user',
  });

  res.status(201).json({
    id: user.id,
    name: user.name,
    email: user.email,
    role: user.role,
    token: generateToken(user.id, user.role),
  });
});

// @desc Authenticate user & get token
// @route POST /api/auth/login
// @access Public
const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ where: { email } });

  if (!user) {
    return res.status(401).json({ message: 'Invalid email or password' });
  }

  const passwordMatch = await bcrypt.compare(password, user.password);
  if (!passwordMatch) {
    return res.status(401).json({ message: 'Invalid email or password' });
  }

  res.json({
    id: user.id,
    name: user.name,
    email: user.email,
    role: user.role,
    token: generateToken(user.id, user.role),
  });
});

// @desc Forgot Password - Send OTP
// @route POST /api/auth/forgot-password
// @access Public
const forgotPassword = asyncHandler(async (req, res) => {
  const { email } = req.body;

  const user = await User.findOne({ where: { email } });
  if (!user) {
    return res.status(404).json({ message: 'User not found' });
  }

  const otp = Math.floor(100000 + Math.random() * 900000).toString();
  user.otpCode = otp;
  user.otpExpires = new Date(Date.now() + 10 * 60 * 1000);
  await user.save();

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: user.email,
    subject: 'Password Reset OTP',
    text: `Your OTP for password reset is: ${otp}. It is valid for 10 minutes.`,
  };

  await transporter.sendMail(mailOptions);
  res.json({ message: 'OTP sent to email' });
});

// @desc Verify OTP
// @route POST /api/auth/verify-otp
// @access Public
const verifyOTP = asyncHandler(async (req, res) => {
  const { email, otp } = req.body;

  const user = await User.findOne({ where: { email, otpCode: otp } });

  if (!user || user.otpExpires < new Date()) {
    return res.status(400).json({ message: 'Invalid or expired OTP' });
  }

  res.json({ message: 'OTP verified successfully' });
});

// @desc Reset Password
// @route POST /api/auth/reset-password
// @access Public
const resetPassword = asyncHandler(async (req, res) => {
  const { email, otp, newPassword } = req.body;

  const user = await User.findOne({ where: { email, otpCode: otp } });

  if (!user || user.otpExpires < new Date()) {
    return res.status(400).json({ message: 'Invalid or expired OTP' });
  }

  const salt = await bcrypt.genSalt(10);
  user.password = await bcrypt.hash(newPassword, salt);
  user.otpCode = null;
  user.otpExpires = null;
  await user.save();

  res.json({ message: 'Password reset successful' });
});

module.exports = { registerUser, loginUser, getUser, forgotPassword, verifyOTP, resetPassword };
