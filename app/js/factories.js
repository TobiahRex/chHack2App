'use strict';

angular.module('ourApp')
.factory('ngSocket', function(socketFactory){

  let service = socketFactory();
  service.forward('error');
  return service;
});
