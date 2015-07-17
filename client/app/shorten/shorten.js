angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $window, $route, $location, Links) {
  // Your code here
  console.log($location)
  $scope.link = {
  					url: ''
  			    }
  // Links.currenturl
  //TODO shorten the text
  $scope.addLink = function(){
 	//$window.localStorage.
 	 Links.addToLinks($scope.link)
 	 $location.path('/links')

  }
})

