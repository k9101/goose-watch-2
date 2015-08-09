'use strict';

/**
 * @ngdoc function
 * @name parkingApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the parkingApp
 */
angular.module('parkingApp')
  .controller('MainCtrl', function ($scope, events, parking) {
    $scope.events = events;
    $scope.parking = parking;
  });
