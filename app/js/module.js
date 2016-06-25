'use strict';

var app = angular.module('myApp', ['ui.router', 'angular-momentjs', 'angular-uuid']);

app.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('splash', {
    url:'/welcome', 
    controller:'splashCtrl'
    })  
    .state('home', {
      url: '/', 
      controller:'mainCtrl'
    })

  $urlRouterProvider.otherwise('/');

})