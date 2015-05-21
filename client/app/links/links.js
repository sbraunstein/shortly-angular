angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links) {
	// console.log($scope)
	$scope.data = {links: [{},{},{}]};
	// console.log($scope)
	$scope.getLinks = function () {
		return $scope.data.links
	}
	// $scope.getLinks()

 //  // Your code here

});
