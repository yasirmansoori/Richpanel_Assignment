// Dependencies
const express = require('express');

// Controller
const pageController = require('../controllers/page.controller');

// Module scaffolding
const pageRouter = express.Router();

// Get page by facebookId
pageRouter.get('/page/:facebookId', pageController.getPage);

// Export module
module.exports = pageRouter;
