const express = require('express');
const {
  registerUser,
  loginUser,
  getUser,
  forgotPassword,
  verifyOTP,
  resetPassword
} = require('../controllers/authController');
const { protect, admin } = require('../middlewares/authMiddleware');

const router = express.Router();

// Public Routes
router.post('/register', registerUser);
router.post('/login', loginUser);
router.post('/forgot-password', forgotPassword);
router.post('/verify-otp', verifyOTP);
router.post('/reset-password', resetPassword);

// Protected Routes (Only Admin can access /user)
router.get('/user', protect, admin, getUser);

module.exports = router;
