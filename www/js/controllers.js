(function() {
  'use strict';

  angular.module('starter.controllers', [])

  .controller('HomeCtrl', EmptyCtrl)

  .controller('SearchCtrl', EmptyCtrl)

  .controller('CameraCtrl', EmptyCtrl)

  .controller('MapCtrl', EmptyCtrl)

  .controller('AccountCtrl', AccountCtrl);

  //////

  function EmptyCtrl($scope) {}

  function AccountCtrl($scope) {
    $scope.settings = {
      enableFriends: true
    };
  }
})();
