angular.module('holiday', ['hotels', 'ngRoute']);

angular.module('holiday').config(function(votingServiceProvider, $routeProvider){

	$routeProvider.when('/create', {
		templateUrl : 'partials/create.html'
	})

	$routeProvider.when('/listing', {
		templateUrl : 'partials/listing.html'
	})
$routeProvider.when('/details', {
		templateUrl : 'partials/details.html'
	})

	$routeProvider.otherwise({
		redirectTo : '/listing'
	})

	votingServiceProvider.setIncrement(7);
})


angular.module('holiday').directive('preview', function(){
    return {
        restrict : 'E',
        templateUrl : 'preview.html',
        scope :{
            
        }
    }
})

angular.module('holiday').filter('toFeet', function(){
	return function(input){
		return input * 10.7639;
	}
})
