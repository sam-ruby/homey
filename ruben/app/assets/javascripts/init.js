$(function() {
  var homeyApp = angular.module('homeyApp', ['ui.bootstrap', 'ngSanitize']);
  homeyApp.controller('HomeyCtrl', ['$scope', '$http', function($scope, $http) { 
    console.log('All good');
  }]);
});

