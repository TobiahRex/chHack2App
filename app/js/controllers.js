'use strict';

app.module('myApp')

// SPLASH controller
.controller('splashCtrl', function($scope, $state, Posts) {

  $timeout(function() {
    $state.go('home');
  }, 3000);

})


.controller('mainCtrl', function($scope, $state, Posts, $moment, uuid){

  // defined later
  var refresh;


  // GET messages
  Posts.getMessages()
    .then(res => {
      console.log('res:', res);
    })
    .catch(err => {
      console.log('err:', err);
    }) 

    

  // SET message object  
  let messageIntervalObj = {
    messages  : [],
    count     : messages.length,
    time      : $moment().format('LTS')
  }


  // SET new message object 
  let newMesssage = {
    id      : uuid(),
    messages: $scope.message,
    lat     : $scope.message.latitude,
    long    : $scope.message.longitude,
    date    : $moment().format('LTS')
  }


  // SET click object 
  let clickIntervalObj = {
    arr    : [],
    count  : arr.length,
    time   : $moment().format('LTS')
  }


  // SET new click object 
  let newClick = {
    id      : uuid(),
    lat     : $scope.click.latitude,
    long    : $scope.click.longitude,
    date    : $moment().format('LTS')
  }

  // SET graph array and map array
  let graphArr =[];
  let mapArr = [];

  // SET parent object 
  let parentInterval = {
    messagesPerInterval: [],
    messagesCount: messagesPerInterval.length,
    clicksPerInterval: [],
    clicksCount: clicksPerInterval.length,
    IntervalTime: $moment().format('LTS')
  };


  // SET data array for map/graph
  let mapObj = {
    title: [],
    latitude: $scope.message.latitude || $scope.click.latitude,
    longtidue: $scope.message.longtidue || $scope.click.longtidue,
    type: "circle",
    description: newMessage.date || newClick.date,
    scale: 0.3,
    color: $6c00ff
  }


  let finalObj = {
    data: parentInterval,
    graph: mapObj
  }


  // pushing each into arrays
  graphArr.push(parentInterval);
  mapArr.push(mapObj);


  // PUSH new messages into message object's array
  messageIntervalObj.arr.push(newMessage);


  // PUSH new messages into click object's array
  clickIntervalObj.arr.push(newClick);

  function sendInfo() {
    Posts.updatePosts(finalObj)
      .then(res => {

        let arr = {
          data: res.parentData,
          graph: res.mapData
        };

        return arr;
      })
      .catch(err => {
        console.log('err:', err);
      })
  }

//   post every 1 second
  refresh = $interval(function(finalObj) {
    sendInfo();
}, 1000);

})






