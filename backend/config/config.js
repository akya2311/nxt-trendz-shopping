const dotenv = require('dotenv');

dotenv.config();

// Validate required environment variables
const requiredEnv = ['PORT', 'JWT_SECRET', 'DB_NAME', 'DB_USER', 'DB_PASS'];

requiredEnv.forEach((envVar) => {
  if (!process.env[envVar]) {
    console.warn(`⚠️ Warning: Missing environment variable ${envVar}`);
  }
});

module.exports = {
  port: process.env.PORT || 5000, // Default port if not set
  jwtSecret: process.env.JWT_SECRET || 'default_jwt_secret', // Avoid crashes if missing
  db: {
    name: process.env.DB_NAME || 'default_db',
    user: process.env.DB_USER || 'default_user',
    pass: process.env.DB_PASS || 'default_pass',
  },
};
