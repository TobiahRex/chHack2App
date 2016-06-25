'use strict';

angular.module('ourApp')
.service('Posts', function($http, $q) {

  // GET all
  this.getMessages = () => $http.get('/posts');


  // POST posts
  this.updatePosts = parentInterval => $http.post('/posts', parentInterval)


  // POST database
  this.createDatabase = () => $http.post('/posts?create=true');

})
