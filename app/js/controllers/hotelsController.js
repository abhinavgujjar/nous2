angular.module('hotels', [])


angular.module('hotels', [])
	.value('uiConfig', {
		descLimit: 200,
		greetingLimit: 20
	});


angular.module('hotels')
	.controller('hotelsController', function($scope, uiConfig, hotelsDb, votingService, $location, $rootScope) {

		$scope.descLimit = uiConfig.descLimit;

		$scope.selectedHotel = function(hotel){
			hotelsDb.selectedHotel = hotel;
			$location.url('/details');
		}


		$scope.upVote = function(hotel) {
			votingService.upVote(hotel);
		}

		$scope.downVote = function(hotel) {
			votingService.downVote(hotel);
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

		hotelsDb.getHotels(function(hotels){
			$scope.hotels = hotels;
		});

	


	});