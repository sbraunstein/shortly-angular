angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links) {
	// console.log($scope)
	$scope.data = {links: [{},{},{}]};
	// console.log($scope)
	$scope.getLinks = function () {
		console.log('calling Links.getLinks inside LinksController')
		Links.getLinks()
		.then(function(res){
			$scope.data.links = res
		})
	}
	$scope.getLinks()

 //  // Your code here

});
