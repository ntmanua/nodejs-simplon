const express = require('express');
const app = express();

const data = require('./data.json');


app.use('/api/data', (req, res, next) => {
    res.status(200).json(data)
});

module.exports = app;