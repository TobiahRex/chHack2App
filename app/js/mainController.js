'use strict';

angular.module('ourApp')
.controller('mainController', function($scope, $q, $state, Posts, moment, ngSocket){
  console.log('maintCtrl');
  //
  // let calculateLocation = () => {
  //   return $q((resolve, reject) => {
  //     let location = {};
  //     navigator.geolocation.getCurrentPosition((position)=> {
  //       location.latitude  = position.coords.latitude;
  //       location.longitude = position.coords.longitude;
  //       resolve(location);
  //     });
  //   })
  // }
  //
  // calculateLocation()
  //   .then( location => {
  //      $scope.$broadcast('gps', location);
  //   })


});
