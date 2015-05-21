angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $window, $location, Links) {
  // Your code here
  console.log($location)
  $scope.link = {
  				text: ''
  			   }
  Links.currenturl
  //TODO shorten the text
  $scope.addLink = function(str){
 	//$window.localStorage.
 	 Links.addToLinks($scope.url)
  }
})

