Raven.config(SENTRY_DSN, {
}).install();

Raven.setUserContext({
    email: 'sainath.b@practo.com'
});

var app = angular.module('imagesearch', []);
var bodycontroller = app.controller("body", function($scope, $http){

	$http({
		method: 'GET',
	  	url: 'https://api.gettyimages.com:443/v3/search/images',
	  	headers: {
			'Api-Key': 'd7bat97kdsgcxq9uu7t23u7n'
		},
		params: {
			phrase: 'cat',
			page_size: 100
		}
	})
	.then(
	function successCallback(result) {
		var images = [];
		
		var result_images = result.data.images;
		console.log(result_images);
		
		for(var i = 0;i < 100;i++) {

			var ds = result_images[i].display_sizes[0];

			console.log(ds.uri);
			images.push({url: ds.uri});
		}
		
		$scope.images = images;		
	}, 
	function errorCallback(result) {
	});
	
});

	





