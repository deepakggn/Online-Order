function liveCtrl($scope){
	$scope.live_services_order = [
		{
			name: 'Apple',
			price: 1500,
			current:true
		},{
			name: 'Orange',
			price: 2000,
			current:false
		},{
			name: 'Pineapple',
			price: 3000,
			current:false
		},{
			name: 'Water Melon',
			price: 3500,
			current:false
		}
	];

	$scope.btntoggleAct = function(s){
		s.current = !s.current;
	};

	$scope.order_total = function(){

		var order_total = 0;

		angular.forEach($scope.live_services_order, function(s){
			if (s.current){
				order_total+= s.price;
			}
		});

		return order_total;
	};
}