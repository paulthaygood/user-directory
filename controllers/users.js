const express = require('express');
const router = express.Router();
const dataFile = require('../models/data.js');

router.get('/:userId', (request, response) => {
    var user = dataFile.users[request.params.userId - 1]
    response.render("profile", user);
});

router.post('/views/profile', (request, response) =>{
    response.redirect('profile', dataFile);
});

module.exports = router;