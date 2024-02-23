const Joi = require('joi');

// Register validation schema
const authSchemaRegister = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().email().lowercase().required().messages({
    'string.email': 'Please enter a valid email address'
  }),
  password: Joi.string().min(4).required()
})

// Login validation schema
const authSchemaLogin = Joi.object({
  email: Joi.string().email().lowercase().required().messages({
    'string.email': 'Please enter a valid email address'
  }),
  password: Joi.string().min(4).required()
})

module.exports = { authSchemaRegister, authSchemaLogin }