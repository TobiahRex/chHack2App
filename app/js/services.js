'use strict';

angular.module('ourApp')
.service('Posts', function($http, $q, $interval, $timeout) {
  this.dbData;

  $timeout(()=> {
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

    parentInterval.messagesPerInterval.push(this.messageIntervalObj);
    parentInterval.clicksPerInterval.push(this.clickIntervalObj);

    this.clickIntervalObj.time   = moment().format('LTS');
    this.messageIntervalObj.time = moment().format('LTS');

    console.log('parentInterval: ', parentInterval);
    sendData(parentInterval);
  }, 1000);

  let sendData = parentInterval => {
    $http.post('/api/posts', parentInterval)
    .then(res =>{
      console.log('sendData res: ', res.data);
      this.dbData = res.data;
    })
    .catch(()=> console.log('sendData ERROR: '));
  };

  this.firstRender = () => $http.get('/api/posts');
});
  ////////  ARTIFICIAL DATA PUSHING FOR TESTING
  // .service('Data', function($interval){
  //   this.getData = () => $http.get('/api/posts');
  //
  //   this.intervalObjs = [
  //     {
  //       "time": "10:00:00",
  //       "messageCount": 8,
  //       "clickCount": 5
  //     },
  //     {
  //       "time": "10:00:01",
  //       "messageCount": 6,
  //       "clickCount": 7
  //     },
  //     {
  //       "time": "10:00:02",
  //       "messageCount": 2,
  //       "clickCount": 3
  //     },
  //     {
  //       "time": "10:00:03",
  //       "messageCount": 1,
  //       "clickCount": 3
  //     },
  //     {
  //       "time": "10:00:04",
  //       "messageCount": 2,
  //       "clickCount": 1
  //     },
  //     {
  //       "time": "10:00:05",
  //       "messageCount": 3,
  //       "clickCount": 2
  //     },
  //     {
  //       "time": "10:00:06",
  //       "messageCount": 6,
  //       "clickCount": 8
  //     },
  //     {
  //       "time": "10:00:06",
  //       "messageCount": 6,
  //       "clickCount": 8
  //     },
  //     {
  //       "time": "10:00:06",
  //       "messageCount": 6,
  //       "clickCount": 8
  //     },
  //     {
  //       "time": "10:00:06",
  //       "messageCount": 6,
  //       "clickCount": 8
  //     },
  //     {
  //       "time": "10:00:06",
  //       "messageCount": 6,
  //       "clickCount": 8
  //     },
  //     {
  //       "time": "10:00:06",
  //       "messageCount": 6,
  //       "clickCount": 8
  //     },
  //     {
  //       "time": "10:00:06",
  //       "messageCount": 6,
  //       "clickCount": 8
  //     },
  //     {
  //       "time": "10:00:06",
  //       "messageCount": 6,
  //       "clickCount": 8
  //     },
  //     {
  //       "time": "10:00:06",
  //       "messageCount": 6,
  //       "clickCount": 8
  //     },
  //     {
  //       "time": "10:00:06",
  //       "messageCount": 6,
  //       "clickCount": 8
  //     },
  //     {
  //       "time": "10:00:06",
  //       "messageCount": 6,
  //       "clickCount": 8
  //     },
  //     {
  //       "time": "10:00:06",
  //       "messageCount": 6,
  //       "clickCount": 8
  //     },
  //     {
  //       "time": "10:00:06",
  //       "messageCount": 6,
  //       "clickCount": 8
  //     },
  //     {
  //       "time": "10:00:06",
  //       "messageCount": 6,
  //       "clickCount": 8
  //     },
  //   ];
  //   //
  //   // this.addObj = () => {
  //   //   let msgCount = Math.floor(Math.random() * 100);
  //   //   let clickCount = Math.floor(Math.random() * 100);
  //   //
  //   //   let newObj = {
  //   //     "time": "10:00:00",
  //   //     "messageCount": msgCount,
  //   //     "clickCount": clickCount
  //   //   };
  //   //
  //   //   this.intervalObjs.push(newObj);
  //   //
  //   //   if(this.intervalObjs.length > 60) this.intervalObjs.shift();
  //   //
  //   //
  //   //   console.log('data added')
  //   // }
  //   });
