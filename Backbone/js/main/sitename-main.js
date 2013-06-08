require.config({
	
	baseUrl: "../..",
	
	paths: {
		//Require Plugins
		text: "lib/require/text",
		
		//Core API / Framework / Plugins
		json: "lib/json/json2",
		jquery: "lib/jquery/jquery-1.9.1",
		underscore: "lib/underscore/underscore",
		backbone: "lib/backbone/backbone",
		mustache: "lib/mustache/mustache",
		marionette : "/lib/marionette/marionette.min",
		"backbone.babysitter" : "/lib/backbone.babysitter/Backbone.babysitter",
		"backbone.wreqr" : "/lib/backbone.Wreqr/Backbone.Wreqr"
		//TODO : include others here if you want to use them
		//"bootstrap" : "/lib/bootstrap/bootstrap.min"
	},
	
	/*
	 * shim is used to export js files that do not follow the AMD module style
	 * It is also used to define dependencies for scripts that DO follow the module style.
	 */
	shim: {
		json: {
			exports: "JSON"
		},
		jquery: ["json"],
		
		underscore: {
			deps: ["json"],
			exports: "_"
		},
		backbone: {
			deps: ["json", "underscore", "jquery"],
			exports: "Backbone"
		},
		mustache: ["json"],
		marionette : {
			deps : ["json", "jquery", "underscore","backbone"],
			exports : "Marionette"
		}
		/*
		bootstrap : {
			deps : ["jquery"]
		}*/
	}
});

require([
        "js/util/WebConsoleUtils", 
        "backbone", 
        "js/Router"
], function(
		WebConsoleUtils, 
		Backbone, 
		Router
){
	
	//TODO: Starting point
	var config = window.sitename.getConfig();
	var configDebug = config.DEBUG;
	
	//TODO: Choose if you want to follow the current config debug flag, or your own.
	var consoleUtils = new WebConsoleUtils({
		//debug: debug flag here
	});
	
	var router = new Router();
	console.log("test");
	Backbone.history.start();
	
	consoleUtils.initConsole(/*debgu flag here*/);
});