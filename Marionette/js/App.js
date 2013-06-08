define([
	"js/config", 
	"js/util/WebConsoleUtils", 
	//LIBRARY
	"backbone",
	"marionette",
	"mustache",
	//CONTROLLER
	"js/DashboardController",
	//ROUTER
	"js/DashboardRouter",
	//LAYOUT
	"js/views/dashboard/DashboardLayout",
	//MODELS
	"js/models/core/api/actor/Developer",
	//OTHERS
	"js/vent/vent"
], function(
		config, WebConsoleUtils, 
		Backbone, Marionette, Mustache, 
		AppController, AppRouter, AppLayout,
		vent
){
	
	var App = new Marionette.Application();
	
	App.addInitializer(function(){	
		
		// Assigning controller
		var controller = new AppController();
		var router = new AppRouter({ controller : controller });		
		
	});
	
	App.on('initialize:after', function(){
		Backbone.history.start();
	});
	
	return App;
});	