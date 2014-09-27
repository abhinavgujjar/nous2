angular.module('hotels')
	.factory('hotelsDb', function($http) {

		var config = {
					headers: {
						'X-Parse-Application-Id': 'WiVHbxOmum94S0EiLQ6WTZH3LIxUAEzeU9fhEbxV',
						'X-Parse-REST-API-Key': 'OaFoJjSaTBun4N6zkBet2xizONcGfxB5uLj8UF6z',
					}
				};

		return {
			getHotels: function(callback) {
				var hotels;
				var resp = $http.get('https://api.parse.com/1/classes/hotel', config).success(function(data) {
					callback(data.results);
				});
			},
			addHotel: function(hotel) {
				

				$http.post('https://api.parse.com/1/classes/hotel', hotel, config);
			}
		}
	})