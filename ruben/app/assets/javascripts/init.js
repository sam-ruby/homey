$(function() {
  var homeyApp = angular.module('homeyApp', ['ui.bootstrap', 'ngSanitize']);
  homeyApp.controller('HomeyCtrl', ['$scope', '$http', function($scope, $http) { 
    console.log('All good');
    // In high level; what u need here is 
    // - Call the server and get the list of all the photos; just an array of photo 
    // filename.
    // - Then u need to construct the photo_rows 2 dimensional array; to go over and
    // show the photo thumbnails
    // - Clues : use the $http service to make the ajax calls to the server.
    // Some thing like '/home/get_photos
  }]);
});

