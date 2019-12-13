const express = require('express');

const Projects = require('../models/projects-model');

const router = express.Router();

router.get('/', (req, res) => {
    Projects.getProjects(req.query)
    .then(projects => {
        res
        .status(200)
        .json(projects);
    })
    .catch(err => {
        console.log('Could not get projects.', err);
        res
        .status(500)
        .json({ error: 'Could not get projects.' })
    });
});

router.post('/', (req, res) => {
    Projects.add(req.body)
    .then(project => {
        res.status(201).json(project);
    })
    .catch(err => {
        console.log('Could not add project.');
        res.status(500).json({

            error: 'Could not add project.'
        });
    });
});

module.exports = router;