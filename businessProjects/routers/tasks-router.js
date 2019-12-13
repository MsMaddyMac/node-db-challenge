const express = require('express');

const Tasks = require('../models/tasks-model');

const router = express.Router();

// Endpoint to get all tasks
router.get('/', (req, res) => {
    Tasks.findTasks(req.query)
    .then(tasks => {
        res.status(200).json(tasks);
    })
    .catch(err => {
        console.log('Error retrieving tasks.', err);
        res.status(500).json({
            error: 'Error retrieving tasks.'
        });
    });
});

module.exports = router;