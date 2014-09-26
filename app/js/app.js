angular.module('holiday', ['hotels']);

angular.module('holiday').filter('toFeet', function(){
	return function(input){
		return input * 10.7639;
	}
})
