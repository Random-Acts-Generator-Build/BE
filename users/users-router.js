const express = require('express');
const bcrypt = require('bcryptjs');

const Users = require('./users-model');
const router = express.Router();

router.get('/', (req, res) => {
    Users.find()
      .then(users => {
        res.json(users);
      })
      .catch(err => res.send(err));
  });

router.post('/register', (req, res) => {
    const creds = req.body;
    const hash = bcrypt.hashSync(creds.password, 10);
    creds.password = hash;
  
    Users.add(creds)
      .then(user => {
        res.status(201).json(user);
      })
      .catch(error => {
        res.status(500).json(error);
      });
  });
  
router.post('/login', (req, res) => {
	const { username, password } = req.body;

	Users.findBy({ username })
		.first()
		.then(user => {
			if (user && bcrypt.compareSync(password, user.password)) {
				res.status(200).json({
					message: `Welcome ${user.username}!`,
				});
			} else {
				res.status(401).json({ message: 'Invalid Credentials' });
			}
		})
		.catch(error => {
			res.status(500).json(error);
		});
});

router.get('/:id', (req, res) => {
  const { id } = req.params;

  Users.findById(id)
  .then(user => {
    if (user) {
      res.json(user);
    } else {
      res.status(404).json({ message: 'Could not find user with given id.' })
    }
  })
  .catch(err => {
    res.status(500).json({ message: 'Failed to get user' });
  });
});
  
module.exports = router;