// Dependencies
const jwt = require('jsonwebtoken');
const User = require('../models/user.model');
const createError = require('http-errors');

// Authentication middleware
const authenticationMiddleware = async (req, res, next) => {
  const token = req.header('Authorization');
  console.log(token, 'token');
  if (!token) {
    return next(createError.Unauthorized());
  }

  try {
    const decoded = jwt.verify(token, process.env.SECRET_KEY);
    const user = await User.findById(decoded.userId);

    if (!user) {
      return next(createError.Unauthorized());
    }

    req.user = { userId: user._id };
    next();
  } catch (error) {
    console.error(error);
    return next(createError.Unauthorized());
  }
};

module.exports = authenticationMiddleware;
