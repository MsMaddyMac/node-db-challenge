const express = require('express');
const helmet = require('helmet');

const projectsRouter = require('../businessProjects/routers/projects-router');
const resourcesRouter = require('../businessProjects/routers/resources-router');

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
server.use('/api/resources', resourcesRouter);

module.exports = server;