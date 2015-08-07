var app = angular.module('MyApp', ['ui.router', 'ui.bootstrap']);

app.directive('redText', function(){
	return {
		restrict: 'E',
		template: '<h1 ng-transclude></h1>',
		transclude: true,
		replace: true,
		link: function(scope, element, attr){
			element.on('click', function(){
				element.toggleClass('red');
			});
		}
	}
})