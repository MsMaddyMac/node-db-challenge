const express = require('express');
const helmet = require('helmet');

const projectsRouter = require('../businessProjects/routers/projects-router');

const server = express();

server.get('/', (req, res) => {
    res.send("<h2>Sprint time!!<h2>");
});

//custom middleware
function logger(req, res, next) {
    console.log(`[${new Date().toISOString()}] ${req.method} to ${req.originalUrl}`)

    next();
};

server.use(helmet());
server.use(express.json());
server.use(logger);

server.use('/api/projects', projectsRouter);

module.exports = server;