// Dependencies
const express = require('express');
const passport = require('passport');

// module scaffolding
const authRouter = express.Router();

// To authenticate with Facebook
authRouter.get('/facebook', passport.authenticate('facebook-login', {
  scope: ['email', 'public_profile',]
}));
// To handle the callback
authRouter.get('/facebook/callback', passport.authenticate('facebook-login',
  {
    failureRedirect: '/login/failed',
    successRedirect: 'http://localhost:5173/connect'
  }));
// To handle the failed login
authRouter.get('/login/failed', (req, res) => {
  res.status(401).json({
    status: 'failed',
    message: 'user failed to login'
  });
});
// To handle the success login
authRouter.get('/login/success', (req, res) => {
  if (req.user) {
    res.status(200).json({
      status: 'success',
      user: req.user,
    });
  } else {
    res.status(401).json({
      status: 'failed',
      message: 'user failed to login'
    });
  }
});
// Export module
module.exports = authRouter;