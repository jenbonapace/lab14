var app = angular.module('Module');


app.controller('lab14controllera', function()
// {   // cool controller stuff
{.when('/dog', {
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
.otherwise({redirectTo:"indexlab14.html"});
$locationProvider.hashPrefix('');
});


});
