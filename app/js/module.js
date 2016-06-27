'use strict';

var app = angular.module('ourApp', ['ui.router', 'angularMoment' ,'btford.socket-io']);

app.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('splash', {
      url         : '/',
      templateUrl : '/html/splash.html',
      controller  : 'splashController'
    })
    .state('home', {
      url         : '/home',
      templateUrl : '/html/home.html',
      controller  : 'homeController'
    })
    .state('map', {
      url         : '/map',
      templateUrl : '/html/map.html',
      controller  :'mapController'
    })
    .state('history', {
      url         : '/history',
      templateUrl : '/html/history.html',
      controller  :'homeController'
    })

  $urlRouterProvider.otherwise('/');
});
