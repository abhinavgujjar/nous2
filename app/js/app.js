angular.module('holiday', ['hotels', 'ngRoute']);

angular.module('holiday').config(function(votingServiceProvider, $routeProvider){

	$routeProvider.when('/create', {
		templateUrl : 'partials/create.html'
	})

	$routeProvider.when('/listing', {
		template : '<div><h1>LISTING PAGE</h1></div>'
	})

	votingServiceProvider.setIncrement(7);
})

angular.module('holiday').filter('toFeet', function(){
	return function(input){
		return input * 10.7639;
	}
})
