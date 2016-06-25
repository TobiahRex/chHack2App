'use strict';

var app = angular.module('myApp', ['ui.router']);

app.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('splash', {
    url:'/welcome',
    templateUrl: '/html/splash.html',
    controller:'splashCtrl'
    })
    .state('home', {
      url: '/',
      templateUrl: '/html/home.html',
      controller:'mainCtrl'
    })

  $urlRouterProvider.otherwise('/');

})
