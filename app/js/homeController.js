'use strict';

angular.module('ourApp')
.controller('homeController', function($scope, $interval, $timeout, $state, Posts, moment, ngSocket){
  console.log('homeCtrl');
  let yo = 'yo!';
  ngSocket.emit('hello', yo);

  var refresh;

  Posts.firstRender()
  .then(res => {
    console.log('render data: ', res.data);
  })
  .catch(err => {
    console.log('render err: ', err);
  });

  $scope.newEvent = event => {
    let latitude, longitude;
    navigator.geolocation.getCurrentPosition((position)=> {
      latitude  = position.coords.latitude;
      longitude = position.coords.longitude;
    });

    if(event.click){
      let newClick = {
        lat     : latitude,
        long    : longitude,
        date    : moment().format('LTS')
      }
      Posts.clickIntervalObj.clicks.push(newClick);
    } else if(event.message){
      let newMesssage = {
        message : $scope.message,
        lat     : latitude,
        long    : longitude,
        date    : moment().format('LTS')
      };
      Posts.messageIntervalObj.messages.push(newMessage);
    }
  };


});
