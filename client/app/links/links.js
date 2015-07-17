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

})
.directive('pizza', function(){
	return function(scope, ele, attr){
	    ele.on('click', function(){
	    	alert('woohoo pizza')
	    })
	}
})
.directive('slide', function(){
	return {
		enter: function(){}, 
		leave: function(){}


	}
	// function(scope, ele, attr){
	// 	ele.on('click', function(){

	// 	})
	// }

	// }
})

