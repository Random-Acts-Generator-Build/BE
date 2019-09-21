const express = require('express');

const server = express();

const UserRouter = require('./users/users-router')

server.use(express.json());

server.use('/api/users', UserRouter);

server.get('/', (req, res) => {
    res.status(200).json({ api: 'up' });
  });

module.exports = server;