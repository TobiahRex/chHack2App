'use strict';

angular.module('ourApp')
.factory('ngSocket', function(socketFactory){

  let server = socketFactory();
  service.forward('error');
  return service;
});
