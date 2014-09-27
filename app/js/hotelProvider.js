angular.module('hotels')
	.factory('hotelsDb', function($http) {


		return {
			getHotels: function(callback) {
				var hotels;
				var resp = $http({
					method: 'GET',
					url: 'data/hotels.json'
				}).success(function(data) {
					callback(data.results);
				});


			},
			addHotel: function(hotel) {
				hotels.push(hotel);
			}
		}
	})