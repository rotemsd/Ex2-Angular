var app = angular.module('myApp', ['ngRoute']);

app.config(function($routeProvider) {
  $routeProvider

   .when('/', {
    templateUrl : 'pages/main.html',
    controller  : 'mainController'
  })
  
  .when('/movingLights', {
    templateUrl : 'pages/movingLights.html',
    controller  : 'movingLightsController'
  })

  .when('/ledMovingLights', {
    templateUrl : 'pages/ledMovingLights.html',
    controller  : 'ledMovingLightsController'
  })

  .when('/parLed', {
    templateUrl : 'pages/parLed.html',
    controller  : 'parLedController'
  })
  
  .when('/led', {
    templateUrl : 'pages/led.html',
    controller  : 'ledController'
  })

  .otherwise({redirectTo: '/'});
});

app.controller('mainController', function($scope) {
	
	$scope.title = "בחר פנס בתפריט מצד ימין שברצונך לראות";
});

app.controller('movingLightsController', function($scope) {
	$scope.title = "פנס ספוט 360";
	$scope.imgae = "images/robe.jpg";
  
});

app.controller('ledMovingLightsController', function($scope) {
	$scope.title = "פנס שטיפה לד 360";
	$scope.imgae = "images/robin300.jpg";
  
});

app.controller('parLedController', function($scope) {
	$scope.title = "פנס פאר 56 ארוך כסוף";
    $scope.imgae = "images/par.jpg";
  
});

app.controller('ledController', function($scope) {
	$scope.title = "תאורת לדים";
    $scope.imgae = "images/led.jpg";
  
});
