angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, $http, Links) {
  $scope.link = {};

  $scope.addLink = function() {
    return $http({
      method: 'POST',
      data: $scope.link,
      url: '/api/links'
    })
    .catch(function(err){
      console.error(err);
    })
    .then(function(){
      // Links.getLinks();
      $location.path('/links');
    })
    .catch(function(err){
      console.error(err);
    });
  };
});
