angular.module('holiday', ['hotels', 'ngRoute', 'ngSanitize']);

angular.module('holiday').config(function(votingServiceProvider, $routeProvider) {

	$routeProvider.when('/create', {
		templateUrl: 'partials/create.html'
	})

	$routeProvider.when('/listing', {
		templateUrl: 'partials/listing.html'
	})
	$routeProvider.when('/details', {
		templateUrl: 'partials/details.html'
	})

	$routeProvider.otherwise({
		redirectTo: '/listing'
	})

	votingServiceProvider.setIncrement(7);
})


angular.module('holiday').directive('preview', function() {
	return {
		restrict: 'E',
		templateUrl: 'partials/preview.html',
		scope: {
			feedback: '=fbEntry',
			rows: '@rows'
		}
	}
})


angular.module('holiday').directive('amnityDisplay', function() {
	return {
		restrict: 'E',
		templateUrl: 'partials/amenities.html',
		scope: {
			list: '=',
			editable : '@'
		},
		controller: function($scope) {
			$scope.add = function(amenity) {
				$scope.list.push(angular.copy(amenity));

				$scope.amenity = {}
			}

		}
	}
})

angular.module('holiday').directive('panel', function() {
	return {
		restrict: 'E',
		transclude : true,
		templateUrl: 'partials/panel.html',
		scope: {
			title: '@heading',
			step : '=step'
		}
	}
})


angular.module('holiday').directive('zoom', function() {
	return {
		restrict: 'A',
		link : function(scope, element, attr ){
			element.on('mouseenter', function(){
				element.css({
					'font-size' : '48px'
				})
			})

			element.on('mouseleave', function(){
				element.css({
					'font-size' : '18px'
				})
			})
		}
	}
})


angular.module('holiday').filter('toFeet', function() {
	return function(input) {
		return input * 10.7639;
	}
})