'use strict';

angular.module('ourApp')
.service('Posts', function($http, $q) {

  this.messageIntervalObj = {
    messages  : [],
    time      : moment().format('LTS')
  }
  let parentInterval = {
    messagesPerInterval: [],
    clicksPerInterval: [],
    IntervalTime: moment().format('LTS')
  };

  parentInterval.messagesCount = parentInterval.messagesPerInterval.length;
  parentInterval.clicksCount   = parentInterval.clicksPerInterval.length;

  // GET all
  this.getMessages = () => $http.get('/posts');

  // POST posts
  this.updatePosts = parentInterval => $http.post('/posts', parentInterval)

  // POST database
  this.createDatabase = () => $http.post('/posts?create=true');
});

// setTimeout(() => {
//   this.sendPosts(newMessage);
// }, 5000)
