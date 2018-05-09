const tokenService = require('../services/tokenService');
const userModel = require('../models/auth');

function receiveToken(req, res, next) {
  if (req.headers.authorization) {
    req.authToken = req.headers.authorization.replace(/^Bearer\s/, '');
  }
  next();
};

function restrict(req, res, next) {
  tokenService.verify(req.authToken)
    .then(data => {
      res.locals.user = data;
      next();
    })
    .catch(err => res.status(401).json({
      status: 'Error',
      message: 'Invalid Credentials'
    }))
}

function register(req, res) {
  console.log(req.body)
  userModel.register(req.body)
    .catch(err => res.status(401).json({
      message: 'Username taken'
    }))
    // .then(data => tokenService.makeToken({
    //   email: data.email,
    //   id: data.id
    // }))
    // .then(token => {
    //   res.json({
    //     token
    //   })
    // });
}

module.exports = {
  receiveToken,
  restrict,
  register
}
