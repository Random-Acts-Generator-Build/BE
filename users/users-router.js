const express = require('express');
const bcrypt = require('bcryptjs');

const Users = require('./users-model');
const restricted = require('../auth/auth-middleware')

const router = express.Router();

router.get('/', restricted, (req, res) => {
  Users.find()
    .then(users => {
      res.json(users);
    })
    .catch(err => res.send(err));
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

router.post('/:id/contacts', (req, res) => {
  const contactData = req.body;
  const { id } = req.params; 

  Users.findById(id)
  .then(contact => {
    if (contact) {
      Users.addContact(contactData, id)
      .then(contact => {
        res.status(201).json(contact);
      })
    } else {
      res.status(404).json({ message: 'Could not find user with given id.' })
    }
  })
  .catch (err => {
    res.status(500).json({ message: 'Failed to create new contact' });
  });
});

router.post('/:id/acts', (req, res) => {
  const actData = req.body;
  const { id } = req.params; 

  Users.findById(id)
  .then(act => {
    if (act) {
      Users.addAct(actData, id)
      .then(act => {
        res.status(201).json(act);
      })
    } else {
      res.status(404).json({ message: 'Could not find user with given id.' })
    }
  })
  .catch (err => {
    res.status(500).json({ message: 'Failed to create new act' });
  });
});

router.get('/:id/contacts', (req, res) => {
  const { id } = req.params;
  const userId = id;

  Users.getContacts(userId)
  .then(contacts => {
    if (userId) {
      res.json(contacts);
    } else {
      res.status(404).json({ message: 'Could not find contacts for given user' })
    }
  })
  .catch(err => {
    res.status(500).json({ message: 'Failed to get contacts' });
  });
});

router.get('/:id/contacts/:id', (req, res) => {
	const { id } = req.params
	
	Users.getContactById(id)
	.then(contact => {
		if(id) {
			res.status(200).json(contact)
		} else {
			res.status(404).json({
				message: "The contact with the specified ID does not exist."
			})
		}
	})
	.catch(err => {
		res.status(500).json({
			err: err,
			message: "The contact information could not be retrieved."
		})
	})
})

router.put('/:id/contacts/:id', (req, res) => {
  const { id } = req.params;
  const changes = req.body;

  Users.getContactById(id)
  .then(contact => {
    if (contact) {
      Users.updateContact(changes, id)
      .then(updatedContact => {
        res.json(updatedContact);
      });
    } else {
      res.status(404).json({ message: 'Could not find a contact with given id' });
    }
  })
  .catch (err => {
    res.status(500).json({ message: 'Failed to update contact' });
  });
});

router.delete('/:id/contacts/:id', (req, res) => {
  const { id } = req.params;

  Users.deleteContact(id)
  .then(deletedContact => {
    if (deletedContact) {
      res.json({ deleted: deletedContact });
    } else {
      res.status(404).json({ message: 'Could not find contact with given id' });
    }
  })
  .catch(err => {
    res.status(500).json({ message: 'Failed to delete contact' });
  });
});
  
module.exports = router;