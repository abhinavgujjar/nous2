angular.module('hotels')
	.controller('createController', function($scope, hotelsDb, $location) {

		$scope.hotel = {
			price : 5000,
			amenities : [{
				name : 'Swimming Pool',
				available : true
			}]
		}		

		$scope.step = 1;

		$scope.add = function(amenity){
			$scope.hotel.amenities.push(angular.copy(amenity));

			$scope.amenity = {}
		}


		$scope.addHotel = function(hotel) {
			var newHotel = angular.copy(hotel);

			if (this.hotelsForm.$invalid) {
				alert('not properly filled');
			} else {

				hotelsDb.addHotel(newHotel)
				$scope.hotel = {};

				$location.url('/listing');
			}
		}

	})