/*
* by PKatariya 28/06/16
* render nav bar on browser
*/

store.directive('userTweets',function(){
	return {
		restrict: 'E',
		scope:{
			tweets: '='
		},
		templateUrl: 'controller/userTweetsView.html'
	};
});