angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $window, $location, Links) {
  // Your code here
  console.log($location)
  $scope.url = {
  				text: ''
  			   }
  Links.currenturl
  //TODO shorten the text
  $scope.shorten = function(str){
 	//$window.localStorage.
 	 Links.addToLinks($scope.url)
  }
})

