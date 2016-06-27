'use strict';

let express = require('express');
let router  = express.Router();
let Post    = require('../models/post');

router.post('/createDB', (req, res)=> Post.createDB(res.handle));

router.route('/')
.get((req, res)=> {
  Post.find({}, res.handle);
})
.post((req, res)=> Post.addInterval(req.body, res.handle))
.delete((req, res)=> Post.remove({}, res.handle));
module.exports = router;
