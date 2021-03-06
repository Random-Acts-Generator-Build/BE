const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const secrets = require('../config/secrets');

const Users = require('../users/users-model');

module.exports = (req, res, next) => {
    const token = req.headers.authorization;
  
    if (token) {
      jwt.verify(token, secrets.jwtSecret, (err, decodedToken) => {
        if (err) {
          res.status(401).json({
            message: 'You are not authorized to view this page'
          })
        } else {
          // token is valid
          req.decodedToken = decodedToken;
          next();
        }
      });
    } else {
      res.status(400).json({ message: 'no token provided' });
    }
  };