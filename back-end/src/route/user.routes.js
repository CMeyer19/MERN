'use strict';

const { Router } = require('express');
const bodyParser = require('body-parser');
const User = require('../model/user.js');
const router = module.exports = new Router();

router.post('/api/hello', bodyParser, (req, res, next) => {
  console.log('hit /api/hello');

  User.create(req.body)
    .then(token => res.send(token))
    .catch(next);
});
