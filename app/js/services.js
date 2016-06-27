'use strict';

angular.module('ourApp')
.service('Posts', function($http, $q, $interval, $timeout) {
  this.dbData;

  this.doInterval = () => {
    return $q((resolve, reject) => {
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

      let sendData = parentInterval => {
        $http.post('/api/posts', parentInterval)
        .then(res =>{
          resolve(res.data);
        })
        .catch(()=> console.log('sendData ERROR: '));
      };
      sendData(parentInterval);
    });
  };
  this.firstRender = () => $http.get('/api/posts');
});
