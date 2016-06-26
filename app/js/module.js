'use strict';

var app = angular.module('ourApp', ['ui.router', 'angularMoment' ,'btford.socket-io']);

app.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('splash', {
      url         : '/welcome',
      templateUrl : 'html/splash.html',
      controller  : 'splashController'
    })
    .state('home', {
      url         : '/home',
      templateUrl : 'html/home.html',
      controller  :'homeController'
    });

  $urlRouterProvider.otherwise('/');
});
