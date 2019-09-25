const router = require('express').Router();
const bcrypt = require('bcryptjs');

const secrets = require('../config/secrets.js')

const Users = require('../users/users-model');

const jwt = require('jsonwebtoken');

router.post('/register', (req, res) => {
    const creds = req.body;
    const hash = bcrypt.hashSync(creds.password, 10);
    creds.password = hash;
  
    Users.add(creds)
      .then(saved => {
        const token = generateToken(saved)
        res.status(201).json({
					user: saved,
					token
        });
      })
      .catch(error => {
        res.status(500).json(error);
      });
  });

router.post('/login', (req, res) => {
	let { username, password } = req.body;

	Users.findBy({ username })
		.first()
		.then(user => {
			if (user && bcrypt.compareSync(password, user.password)) {
				// a jwt should be generated
				const token = generateToken(user);

				res.status(200).json({
					message: `Welcome ${user.username}!`,
					token
				});
			} else {
				res.status(401).json({ message: 'Invalid Credentials' });
			}
		})
		.catch(error => {
			res.status(500).json(error);
		});
});

function generateToken(user) {

  const payload = {
    sub: user.id,
    username: user.username,
  };

  const options = {
    expiresIn: '1d'
  };
 
  return jwt.sign(payload, secrets.jwtSecret, options);
}

module.exports = router;