angular

	.module('myApp', [])
	
	.controller('myController', ['$scope', function($scope) {
  		$scope.images = [
  		{title: "Autumn", file: "images/autumn.jpg"},
  		{title: "Coffee", file: "images/coffee.jpg"},
  		{title: "Gardening", file: "images/gardening.jpg"},
  		{title: "Up North", file: "images/upnorth.jpg"},
  		{title: "Detroit", file: "images/detroit.jpg"},
  		{title: "Photography", file: "images/photography.jpg"},
  		{title: "A2", file: "images/belltower.jpg"},
  		{title: "Maddy", file: "images/maddydance.jpg"},
  		{title: "Joe", file: "images/band.jpg"},
  		{title: "Family", file: "images/family.jpg"},
  		{title: "Art", file: "images/vang.jpg"},
  		{title: "Babies", file: "images/pups.jpg"}

  		]
 	}]);