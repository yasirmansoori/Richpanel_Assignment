// Dependencies
const createError = require('http-errors');
const Page = require('../models/page.model');
const User = require('../models/user.model');

// Module scaffolding
const pageController = {};

// Get page from facebookId
pageController.getPage = async (req, res, next) => {
  try {
    // Get the user id from the params
    const { facebookId } = req.params;
    // Check if the user exists
    const user = await User.findOne({ facebookId });
    if (!user) {
      return next(createError(404, 'User not found'));
    }
    // Get the page for the user
    const page = await Page.findOne({ facebookId });
    if (!page) {
      return next(createError(404, 'Page not found'));
    }
    // Send the response
    const payload = {
      pageId: page.pageId,
      pageName: page.pageName,
      accessToken: page.accessToken,
    };
    res.status(200).json(payload);
  } catch (error) {
    next(error);
  }
}
// Export module
module.exports = pageController;

