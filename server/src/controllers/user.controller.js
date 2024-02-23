// Dependencies
const bcrypt = require('bcrypt');
const { authSchemaRegister, authSchemaLogin } = require('../validations/user.validation');
const { signAccessToken } = require('../config/tokenGenerator')
const createError = require('http-errors');
const User = require('../models/user.model')
require('dotenv').config('../../.env');

// Module scaffolding
const userController = {};

// Register user controller for registration using email and password
userController.register = async (req, res, next) => {
  try {
    // Check if email already exists
    const result = await authSchemaRegister.validateAsync(req.body)
    await User.findOne({ email: result.email }).then((user) => {
      if (user) throw createError.Conflict("This email has already an account. Please login")
    })
    // Hash password and register user
    result.password = await hashPassword(result.password);
    const user = new User(result)
    const savedUser = await user.save()
    // Generate tokens
    const accessToken = await signAccessToken(savedUser.id)
    // Send response
    const payload = {
      _id: user._id,
      name: user.name,
      email: user.email,
      password: user.password,
      pageId: user.pageId,
      facebookId: user.facebookId,
      accessToken,
    };
    res.status(201).send(payload)
  } catch (error) {
    // Unprocessable Entity, means the server understands the content type of the request entity, and the syntax of the request entity is correct, but it was unable to process the contained instructions.
    if (error.isJoi === true) error.status = 422
    next(error);
  }
};
// Login user controller for login using email and password
userController.login = async (req, res, next) => {
  try {
    const result = await authSchemaLogin.validateAsync(req.body)
    // Check if email exists
    const user = await User.findOne({ email: result.email })
    // If email not found
    if (!user) throw createError.NotFound("User not registered")
    // Check if password is valid
    const isMatch = await user.isValidPassword(result.password)
    if (!isMatch) throw createError.Unauthorized("Email/Password not valid")
    // Generate tokens
    const accessToken = await signAccessToken(user.id)
    // Set cookies
    const date = new Date(Date.now() + 1 * 24 * 60 * 60 * 1000)// 1 day * 24 hours * 60 minutes * 60 seconds * 1000 milliseconds
    res.cookie('access_token', accessToken, { expires: date, httpOnly: true })
    // Send response
    const userDetails = {
      _id: user._id,
      name: user.name,
      username: user.username,
      email: user.email,
      pageId: user.pageId,
      facebookId: user.facebookId,
      accessToken,
    };
    res.send(userDetails)
  } catch (error) {
    if (error.isJoi === true) return next(createError.BadRequest("Invalid Email/Password"))
    next(error)
  }
};
// Get user controller
userController.getUser = async (req, res, next) => {
  try {
    // get userId from params
    const userId = req.params.userId
    // find user by userId
    const user = await User.findById(userId)
    // send response
    const payload = {
      _id: user._id,
      name: user.name,
      email: user.email,
      password: user.password,
      pageId: user.pageId,
      facebookId: user.facebookId,
    };
    res.status(200).json(payload)
  } catch (error) {
    next(error)
  }
}
// Helper Function to hash password
async function hashPassword(password) {
  const salt = await bcrypt.genSalt(10);
  return bcrypt.hash(password, salt);
}

// Export module
module.exports = userController;

