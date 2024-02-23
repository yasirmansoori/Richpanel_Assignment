const JWT = require('jsonwebtoken');
const createError = require('http-errors');

module.exports = {
  // This function will generate a new access token and return it
  signAccessToken: (userId) => {
    return new Promise((resolve, reject) => {
      const payload = {};
      const secret = process.env.ACCESS_TOKEN_SECRET;
      const options = {
        expiresIn: '10s',
        issuer: 'localhost',
        audience: userId
      }
      JWT.sign(payload, secret, options, (err, token) => {
        if (err) {
          console.log(err.message);
          reject(createError.InternalServerError());
        }
        resolve(token);
      })
    })
  },
}