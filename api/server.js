const express = require('express');


const projectRouter = require('../projectRout/project-Router.js');

const server = express();


server.use(express.json());

server.use('/projects', projectRouter);

server.get('/', (req,res) => {
    res.status(200).json({message: "Hello World"})
})


module.exports = server;