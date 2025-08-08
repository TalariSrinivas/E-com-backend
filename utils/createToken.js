// utils/createToken.js
import jwt from 'jsonwebtoken';

const createToken = (res, userId) => {
  const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: '30d',
  });

  res.cookie('jwt', token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production', // true on Render
    sameSite: 'None', // REQUIRED for cross-site
    maxAge: 30 * 24 * 60 * 60 * 1000, // 30 days
  });
};

export default createToken;
