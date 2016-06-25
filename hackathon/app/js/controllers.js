'use strict';

app.module('myApp')

// SPLASH controller
.controller('splashCtrl', function($scope, $state, Posts) {

  $timeout(function() {
    $state.go('home');
  }, 3000);

})


.controller('homeController', function($scope, $state, Posts, $moment, uuid){

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


  // GET posts
  Posts.getClicks()
    .then(res=> {
      console.log('res:', res);
    })
    .catch(err => {
      console.log('err:', err);
    

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
    lat     : $scope.message.lat,
    long    : $scope.message.long,
    date    : $moment().format('LTS')
  }


  // SET click object 
  let clickIntervalObj = {
    arr: [],
    count: arr.length,
    time: $moment().format('LTS')
  }


  // SET new click object 
  let newClick = {
    lat: $scope.click.lat,
    long: $scope.click.long
  }


  // SET parent object 
  let parentInterval = {
    messagesPerInterval: [],
    messagesCount: messagesPerInterval.length,
    clicksPerInterval: [],
    clicksCount: clicksPerInterval.length,
    IntervalTime: $moment().format('LTS')
  };


  // PUSH new messages into message object's array
  messageIntervalObj.arr.push(newMessage);


  // PUSH new messages into click object's array
  clickIntervalObj.arr.push(newClick);


  // post every 1 second
  refresh = $interval(function() {
  Posts.updatePosts(parentInterval)
    .then(res => {
      $scope.parentInterval = res.data;
    })
  })
}, 1000);

})







