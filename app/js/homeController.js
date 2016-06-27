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


  //
  // $scope.$on('gps', function(event, location) {
  //   gps = location;
  // });


  $scope.newClick = () => {
    let newClick = {
      date    : moment().format('LTS')
    }
    // if(!gps.latitude){
    //   newClick.lat = 37.4953984;
    //   newClick.long =  -121.91771039999999;
    // } else{
    //   newClick.lat = gps.latitude;
    //   newClick.long =  gps.longitude;
    // };
    ngSocket.emit('addClick', newClick);
  };


  $scope.newMessage = () => {
    let newMessage = {
      message : $scope.message,
      date    : moment().format('LTS')
    }
    // if(!gps.latitude){
    //   newMessage.lat = 37.4953984;
    //   newMessage.long =  -121.91771039999999;
    // } else{
    //   newMessage.lat = gps.latitude;
    //   newMessage.long =  gps.longitude;
    // };
    ngSocket.emit('addMessage', newMessage);
  };



  $scope.cancelMessage = () => {
    $scope.message = '';
  };


});
