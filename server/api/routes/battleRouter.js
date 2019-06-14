const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const fs = require('fs');

var team1Model = require('../models/team1Model.js');

var team2Model = require('../models/team2Model.js');

var algorithms = require('../models/algorithms.js');
router.get('/', (req, res, next) => {
    
});

module.exports = router;