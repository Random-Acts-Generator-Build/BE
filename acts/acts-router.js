const express = require('express');

const Acts = require('./acts-model.js');

const router = express.Router();

router.get('/', (req, res) => {
  Acts.find()
  .then(acts => {
    res.json(acts);
  })
  .catch(err => {
    res.status(500).json({ message: 'Failed to get acts' });
  });
});

router.get('/:id', (req, res) => {
  const { id } = req.params;

  Acts.findById(id)
  .then(act => {
    if (act) {
      res.json(act);
    } else {
      res.status(404).json({ message: 'Could not find act with given id.' })
    }
  })
  .catch(err => {
    res.status(500).json({ message: 'Failed to retrieve act' });
  });
});

router.post('/', (req, res) => {
  const actData = req.body;

  Acts.add(actData)
  .then(act => {
    res.status(201).json(act);
  })
  .catch (err => {
    res.status(500).json({ message: 'Failed to create new act' });
  });
});

module.exports = router;