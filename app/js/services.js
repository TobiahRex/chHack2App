'use strict';

angular.module('myApp')
.service('Posts', function($http, $q) {

  // GET all
  this.getMessages = () => $http.get('/posts');


  // POST posts
  this.updatePosts = finalObj => $http.post('/posts', finalObj)

  
  // POST database
  this.createDatabase = () => $http.post('/posts?create=true');

})

