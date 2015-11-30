angular
	.module('myApp')

	.directive('myimg', function(){
	    return{
	      restrict: "EA",
	      template: '<p>{{image.title}}</p><img ng-src="{{image.file}}"/>',
	      replace: false
	    };
  });