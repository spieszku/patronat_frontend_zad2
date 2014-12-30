AppOne = angular.module('AppOne', ['ui.router']);
AppOne.controller('NameController', ['$scope', function($scope){
	$scope.name = 'Aga';
}]);
AppOne.directive('ptrngName', function(){
	return{
		restrict: 'E',
		template: 'Your name is {{name}}'
	};
});
AppOne.config(function($stateProvider, $urlRouterProvider) {
	$urlRouterProvider.otherwise("/name");
	$stateProvider
		.state('name',{
			url: "/name",
			templateUrl: "src/ptrng-name.html",
			controller: 'NameController'
	})
		.state('ambitnie',{
			url: "/ambitnie",
			templateUrl: "src/extra.html"
		})
});
