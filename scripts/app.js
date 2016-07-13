var app = angular.module("app", ["ngRoute"]);

app.config(function($routeProvider)
{
	$routeProvider.when("/", {templateUrl: "partials/home.html"});
	$routeProvider.when("/serveur", {templateUrl: "partials/server.html"});
	$routeProvider.when("/carte", {templateUrl: "partials/map.html", controller: "map_ctrl"});
	$routeProvider.when("/clans", {templateUrl: "partials/clans.html"});
	$routeProvider.when("/mods", {templateUrl: "partials/mods.html"});
	// $routeProvider.otherwise({templateUrl: "partials/notfound.html", controller: "notfound_ctrl"});
});
