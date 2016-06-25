'use strict';

const express = require('express');
const router  = express.Router();

router.route('/')
.get((req, res)=> {
  res.send('all the data');
});

module.exports = router;
