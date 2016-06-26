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
})

////////  ARTIFICIAL DATA PUSHING FOR TESTING
.service('Data', function($interval){
  this.intervalObjs = [
    {
      "time": "10:00:00",
      "messageCount": 8,
      "clickCount": 5
    },
    {
      "time": "10:00:01",
      "messageCount": 6,
      "clickCount": 7
    },
    {
      "time": "10:00:02",
      "messageCount": 2,
      "clickCount": 3
    },
    {
      "time": "10:00:03",
      "messageCount": 1,
      "clickCount": 3
    },
    {
      "time": "10:00:04",
      "messageCount": 2,
      "clickCount": 1
    },
    {
      "time": "10:00:05",
      "messageCount": 3,
      "clickCount": 2
    },
    {
      "time": "10:00:06",
      "messageCount": 6,
      "clickCount": 8
    },
    {
      "time": "10:00:06",
      "messageCount": 6,
      "clickCount": 8
    },
    {
      "time": "10:00:06",
      "messageCount": 6,
      "clickCount": 8
    },
    {
      "time": "10:00:06",
      "messageCount": 6,
      "clickCount": 8
    },
    {
      "time": "10:00:06",
      "messageCount": 6,
      "clickCount": 8
    },
    {
      "time": "10:00:06",
      "messageCount": 6,
      "clickCount": 8
    },
    {
      "time": "10:00:06",
      "messageCount": 6,
      "clickCount": 8
    },
    {
      "time": "10:00:06",
      "messageCount": 6,
      "clickCount": 8
    },
    {
      "time": "10:00:06",
      "messageCount": 6,
      "clickCount": 8
    },
    {
      "time": "10:00:06",
      "messageCount": 6,
      "clickCount": 8
    },
    {
      "time": "10:00:06",
      "messageCount": 6,
      "clickCount": 8
    },
    {
      "time": "10:00:06",
      "messageCount": 6,
      "clickCount": 8
    },
    {
      "time": "10:00:06",
      "messageCount": 6,
      "clickCount": 8
    },
    {
      "time": "10:00:06",
      "messageCount": 6,
      "clickCount": 8
    },
  ];

  this.addObj = () => {
    let msgCount = Math.floor(Math.random() * 100);
    let clickCount = Math.floor(Math.random() * 100);
    let newObj = {
      "time": "10:00:00",
      "messageCount": msgCount,
      "clickCount": clickCount
    };
    this.intervalObjs.push(newObj);
    if(this.intervalObjs.length > 60) this.intervalObjs.shift();
    console.log('data added')
  }

})
