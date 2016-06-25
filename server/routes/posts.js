'use strict';

let express = require('express');
let router  = express.Router();
let Post    = require('../models/post');


router.route('/')
.get((req, res)=> {
  Post.find({}, res.handle);
})
.post((req, res)=> Post.addInterval(req.body, res.handle));

module.exports = router;
