'use strict';

var app = angular.module('ourApp', ['ui.router', 'angular-momentjs', 'btford.socket-io']);


app.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('splash', {
    url:'/welcome',
    templateUrl: '/html/splash.html',
    controller:'splashController'
    })
    .state('home', {
      url: '/',
      templateUrl: '/html/home.html',
      controller:'homeController'
    })

  $urlRouterProvider.otherwise('/');

})
