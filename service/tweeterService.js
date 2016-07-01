store.factory('tweeterService',function($http){
	return {
		get: function(){
			return $http.get('json/tweets.json');
		}
	};
});