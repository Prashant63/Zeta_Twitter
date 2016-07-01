store.controller("twitterController",["$scope", "tweeterService",
								 function($scope, tweeterService){

		$scope.getTweetData = function(){
			if($scope.tweets != null){
				$scope.userTweets = $scope.tweets;
			}
		};


		var init = function(){
			$scope.tweets = [];
			tweeterService.get().then(function (data){
				$scope.tweets = data.data;
				console.log($scope.tweets);
				$scope.getTweetData();
			});
			console.log($scope.tweets);
		}
		
		init();
}]);