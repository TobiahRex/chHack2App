'use strict';

var app = angular.module('ourApp', ['ui.router', 'angular-momentjs', 'angular-socket-io']);


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
