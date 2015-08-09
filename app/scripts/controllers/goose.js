'use strict';

/**
 * @ngdoc function
 * @name parkingApp.controller:GooseCtrl
 * @description
 * # GooseCtrl
 * Controller of the parkingApp
 */
angular.module('parkingApp')
  .controller('GooseCtrl', function ($scope, goosewatch) {
    $scope.map = {
      center: {
        latitude: 43.472249,
        longitude: -80.544837
      },
      zoom: 15
    };

    $scope.goose = goosewatch;

    $scope.launchModal = function(goose){
      $('#modalHeader').html("Goose Nest: #" + goose.id);
      $('#modalDesc').html("Location: " + goose.location);
      $('#markerDataModal').modal('show');
    };
  });
