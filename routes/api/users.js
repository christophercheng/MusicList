// handle api endpoint that deals with users and user endpoints
const express = require('express');
const User = require('../../models/user');

const router = express.Router();

router.get('/list', (req, res, next) => {
  User.find((err, users) => {
    if (err) { return res.send(err); }
    return res.json(users);
  });
});

module.exports = router;
