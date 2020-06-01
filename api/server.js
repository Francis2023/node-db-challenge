const express = require('express');
const helmet = require('helmet');

const projectRouter = require('../projectRout/project-Router.js');

const server = express();

server.use(helmet());
server.use(express.json());

server.use('/project', projectRouter);

server.get('/', (req,res) => {
    res.status(200).json({message: "Hello World"})
})


module.exports = server;