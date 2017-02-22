var app = angular.module('Module', ['ngRoute']);
app.config(function($routeProvider, $locationProvider){
  $routeProvider .when('/dog', {
    controller:"lab14controllera",
    templateUrl:"dog.html"
  })
  .when("/cat", {
    controller: "lab14controllera",
    templateUrl: "cat.html"
  })
  .when("/fish", {
    controller: "lab14controllera",
    templateUrl: "fish.html"
})
.when("/horse", {
  controller: "lab14controllera",
  templateUrl: "horse.html"
})
.when("/whale", {
  controller: "lab14controllera",
  templateUrl: "whale.html"
})
.otherwise({redirectTo:"indexlab14.html"});
$locationProvider.hashPrefix('');
});
