angular.module('hotels')
	.controller('createController', function($scope, hotelsDb) {
		$scope.addHotel = function(hotel) {
			var newHotel = angular.copy(hotel);

			hotelsDb.addHotel(newHotel)
			

			$scope.hotel = {};
		}

	})