'use strict';

angular.module('ourApp')
.controller('splashController', function($scope, $state, Posts, $timeout) {
  console.log('splashCtrl');
  $timeout(function() {
    $state.go('home');
  }, 2010);
});
