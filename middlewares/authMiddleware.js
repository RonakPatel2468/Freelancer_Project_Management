const jwtHelper = require('../utils/jwtHelper');
const User = require('../models/userModel');

const authMiddleware = async (req, res, next) => {
  const token = req.headers.authorization && req.headers.authorization.split(' ')[1];
  if (!token) return res.status(401).json({ message: 'Authorization token required' });

  try {
    const decoded = jwtHelper.verifyToken(token);
    req.user = await User.findById(decoded.id).select('-password');
    next();
  } catch (err) {
    return res.status(401).json({ message: 'Invalid token' });
  }
};
module.exports = authMiddleware;
