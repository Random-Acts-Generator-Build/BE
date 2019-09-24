const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
require('dotenv').config()

const server = express();

const UserRouter = require('./users/users-router')
const ActsRouter = require('./acts/acts-router')

server.use(helmet());
server.use(express.json());
server.use(cors());

server.use('/api/users', UserRouter);
server.use('/api/acts', ActsRouter);

server.get('/', (req, res) => {
    res.status(200).json({ api: 'up' });
  });

module.exports = server;