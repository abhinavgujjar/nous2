angular.module('hotels', [])

angular.module('hotels', [])
	.value('uiConfig', {
		descLimit: 200,
		greetingLimit: 20
	});

angular.module('hotels')
	.controller('hotelsController', function($scope, uiConfig, hotelsProvider) {

		$scope.descLimit = uiConfig.descLimit;

		$scope.addHotel = function(hotel) {
			var newHotel = angular.copy(hotel);

			$scope.hotels.push(newHotel);

			$scope.hotel = {};
		}

		$scope.upVote = function(hotel) {
			if (!hotel.rating) {
				hotel.rating = 0;
			}

			hotel.rating++;

		}

		$scope.downVote = function(hotel) {

			if (!hotel.rating) {
				hotel.rating = 0;
			}


			hotel.rating--;
		}

		$scope.startEditing = function(hotel) {
			hotel.editMode = true;
		}

		$scope.onlyAvailable = function(hotel, index) {
			return true;

			// if (hotel.availableForBook && hotel.price > 10000) {
			// 	return true;
			// } else {
			// 	return false;
			// }
		}

		$scope.showHotels = true;

		$scope.orderOptions = [{
			name: 'name',
			display: 'Hotel Name'
		}, {
			name: 'price',
			display: 'Price per night'
		}, {
			name: 'location',
			display: 'Location'
		}];

		// $scope.orderOptions = ['name', 'location', 'price'];

		var hotels = hotelsProvider.getHotels();



		$scope.hotels = hotels;


	});