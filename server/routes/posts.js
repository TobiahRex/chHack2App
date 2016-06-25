'use strict';

const express = require('express');
const router  = express.Router();
const Post    = require('../models/post');

router.route('/posts?create=true')
.get((req, res)=> Post.find({}, res.handle))
.post((req, res)=> {
  req.query.create ? Post.createDatabase(res.handle) : null;
})
.post((req, res)=> Post.addInterval(req.body, res.handle));

module.exports = router;
