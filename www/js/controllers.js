angular.module('starter.controllers', [])

.controller('HomeCtrl', function($scope) {})

.controller('SearchCtrl', function($scope) {})

.controller('CameraCtrl', function($scope) {
})

.controller('MapCtrl', function($scope) {})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
