'use strict';

angular.module('ourApp')
.service('Posts', function($http, $q) {
  this.dbData;
  $interval(()=> {
    let parentInterval = {
      time                : moment().format('LTS'),
      messagesPerInterval : [],
      clicksPerInterval   : [],
      messageCount        : 0,
      clickCount          : 0
    };

    this.clickIntervalObj = {
      clicks : []
    };

    this.messageIntervalObj = {
      messages  : []
    };
    parentInterval.messageCount  = parentInterval.messagesPerInterval.length;
    parentInterval.clickCount    = parentInterval.clicksPerInterval.length;
    this.clickIntervalObj.time   = moment().format('LTS');
    this.messageIntervalObj.time = moment().format('LTS');
    sendData(parentInterval);
  };
}, 2000);

let sendData = parentInterval => {
  $http.post('/posts', parentInterval)
  .then(res => this.dbData = res.data)
  .catch(err=> console.log('sendData ERROR: ', err));
};


// GET all
this.getMessages = () => $http.get('/posts');

// POST posts

// POST database
this.createDatabase = () => $http.post('/posts?create=true');
})

////////  ARTIFICIAL DATA PUSHING FOR TESTING
.service('Data', function($interval){
  this.getData = () => $http.get('/api/posts');

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
  //
  // this.addObj = () => {
  //   let msgCount = Math.floor(Math.random() * 100);
  //   let clickCount = Math.floor(Math.random() * 100);
  //
  //   let newObj = {
  //     "time": "10:00:00",
  //     "messageCount": msgCount,
  //     "clickCount": clickCount
  //   };
  //
  //   this.intervalObjs.push(newObj);
  //
  //   if(this.intervalObjs.length > 60) this.intervalObjs.shift();
  //
  //
  //   console.log('data added')
  // }

})
