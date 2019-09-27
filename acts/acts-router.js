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

router.put('/:id', (req, res) => {
  const { id } = req.params;
  const changes = req.body;

  Acts.findById(id)
  .then(act => {
    if (act) {
      Acts.updateAct(changes, id)
      .then(updatedAct => {
        res.json(updatedAct);
      });
    } else {
      res.status(404).json({ message: 'Could not find an act with the given id' });
    }
  })
  .catch (err => {
    res.status(500).json({ message: 'Failed to update act' });
  });
});

router.delete('/:id', (req, res) => {
  const { id } = req.params;

  Acts.deleteAct(id)
  .then(deleted => {
    if (deleted) {
      res.json({ removed: deleted });
    } else {
      res.status(404).json({ message: 'Could not find an act with the given id' });
    }
  })
  .catch(err => {
    res.status(500).json({ message: 'Failed to delete act' });
  });
});

module.exports = router;