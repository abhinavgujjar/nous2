function greetingController($scope) {
	//based on time of day, figure out Good morning / afteroon / evening.

	$scope.greeting = 'Good Morning Nous!';
}

function hotelsController($scope) {

	$scope.addHotel = function(hotel){
		var newHotel = angular.copy(hotel);

		$scope.hotels.push(newHotel);

		$scope.hotel = {};
	}

	$scope.showHotels = true;

	var hotels = [{
		name: 'Mariott',
		location: 'MG Road',
		price: 20000,
		imgUrl: 'OjfuHD0.jpg'
	}, {
		name: 'Leela Palace',
		location: 'Old Airport Road',
		price: 34000,

		imgUrl: 'GYLTUfE.jpg'
	}, {
		name: 'Taj Vivanta',
		location: 'MG Road',
		price: 15000,
		imgUrl: 'GYLTUfE.jpg'

	}, {
		name: 'Oberoi',
		location: 'Ulsoor Road',
		price: 15000,

		imgUrl: 'GYLTUfE.jpg'
	}];



	$scope.hotels = hotels;


}