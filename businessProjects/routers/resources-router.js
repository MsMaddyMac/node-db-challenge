const express = require('express');

const Resources = require('../models/resources-model');

const router = express.Router();

router.get('/', (req, res) => {
    Resources.getResources(req.query)
    .then(resources => {
        res
        .status(200)
        .json(resources);
    })
    .catch(err => {
        console.log('Error retrieving resources.', err);
        res
        .status(500)
        .json({ error: 'Error retrieving resources.' })
    });
});

router.post('/', (req, res) => {
    Resources.add(req.body)
    .then(resource => {
        res.status(201).json(resource);
    })
    .catch(err => {
        console.log('Could not add resource', err);
        res.status(500).json({
            error: 'Error adding resource.'
        });
    });
});


module.exports = router;