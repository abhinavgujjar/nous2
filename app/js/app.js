angular.module('holiday', ['hotels', 'ngRoute']);

angular.module('holiday').config(function(votingServiceProvider, $routeProvider){

	$routeProvider.when('/create', {
		templateUrl : 'partials/create.html'
	})

	$routeProvider.when('/listing', {
		templateUrl : 'partials/listing.html'
	})

	$routeProvider.otherwise({
		redirectTo : '/listing'
	})

	votingServiceProvider.setIncrement(7);
})

angular.module('holiday').filter('toFeet', function(){
	return function(input){
		return input * 10.7639;
	}
})
