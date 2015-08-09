'use strict';

/**
 * @ngdoc overview
 * @name parkingApp
 * @description
 * # parkingApp
 *
 * Main module of the application.
 */

 var uWaterlooUrl = 'https://api.uwaterloo.ca/v2/';
 var uWaterlooAPIKey = '?key=6a0b68420a653fd70590d7af6e73d4fc';

angular
  .module('parkingApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'uiGmapgoogle-maps'
  ])
  .config(function ($routeProvider) {

    $routeProvider
  /*    .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        resolve:{
          events: function($http, $q){

            var deferred = $q.defer();

            $http.get(uWaterlooUrl + 'events.json' + uWaterlooAPIKey)
                  .success(function(data){
                    deferred.resolve(data);
                  })
                  .error(function(data){
                    deferred.resolve(data);
                  });

            return deferred.promise;
          },
          goosewatch: function($http, $q){
            var deferred = $q.defer();

            $http.get(uWaterlooUrl + 'resources/goosewatch.json' +uWaterlooAPIKey)
              .success(function(data){
                deferred.resolve(data);
              })
              .error(function(data){
                deferred.resolve(data);
              });

            return deferred.promise;
          }
        }
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })*/
      .when('/', {
        templateUrl: 'views/goose.html',
        controller: 'GooseCtrl',
        resolve: {
          goosewatch: function($http, $q){
            var deferred = $q.defer();

            $http.get(uWaterlooUrl + 'resources/goosewatch.json' +uWaterlooAPIKey)
              .success(function(data){
                deferred.resolve(data);
              })
              .error(function(data){
                deferred.resolve(data);
              });

            return deferred.promise;
          }
        }
      })
      .otherwise({
        redirectTo: '/'
      });
  });
