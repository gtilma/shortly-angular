angular.module('shortly.logout', [])

.controller('LogoutController', function ($scope, Auth) {
  angular.extend($scope, Auth);
  $scope.signout();
});
