'use strict';

angular.module('ourApp')
.controller('mainController', function($scope, $state, Posts, moment, ngSocket, $timeout){
  console.log('maintCtrl');


  $scope.toggleOn = true;

  $scope.activateButton = (event) => {
    if($scope.toggleOn) {
      $scope.switchButton = true;
    }
    $timeout(() => {
      $scope.switchButton = false;
    }, 1000)
  }
})
