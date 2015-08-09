'use strict';

describe('Controller: GooseCtrl', function () {

  // load the controller's module
  beforeEach(module('parkingApp'));

  var GooseCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    GooseCtrl = $controller('GooseCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
