'use strict';

angular.module('ourApp')
.controller('mainController', function($scope, $state, ngSocket){
  console.log('maintCtrl');


})
.controller('splashController', function($scope, $state, Posts, $timeout) {
  console.log('splashCtrl');
  $timeout(function() {
    $state.go('home');
  }, 3000);
})
.controller('homeController', function($scope, $state, Posts, moment, ngSocket){
  console.log('homeCtrl');
  let yo = 'yo!';
  ngSocket.emit('hello', yo);

  var refresh;

  Posts.getMessages()
  .then(res => {
    console.log('res:', res);
  })
  .catch(err => {
    console.log('err:', err);
  });
  //////////////////////////////////////////////////////////////////////

  messageIntervalObj.count = messageIntervalObj.messages.length;
  $scope.submitMessage = message => {

  }

  // SET message object
  // SET Lat & Long
  let latitude, longitude;
  navigator.geolocation.getCurrentPosition((position)=> {
    latitude = position.coords.latitude;
    longitude = position.coords.longitude;
  });
  // SET new message object
  let newMesssage = {
    message : $scope.message,
    lat     : latitude,
    long    : longitude,
    date    : moment().format('LTS')
  };


  // SET click object
  let clickIntervalObj = {
    clicks  : [],
    time    : moment().format('LTS')
  };
  clickIntervalObj.count = clickIntervalObj.clicks.length;


  // SET new click object
  let newClick = {
    lat   : latitude,
    long  : longitude
  };

  // SET parent object
  
  // PUSH new messages into message object's array
  messageIntervalObj.messages.push(newMessage);


  // PUSH new messages into click object's array
  clickIntervalObj.clicks.push(newClick);


  // post every 1 second
  refresh = $interval(function() {
    Posts.updatePosts(parentInterval)
    .then(res => {
      $scope.parentInterval = res.data;
    })
  }, 1000);
});
