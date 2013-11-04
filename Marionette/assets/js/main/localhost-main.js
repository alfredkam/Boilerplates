require.config({

	baseUrl : "../../assets/",

	paths : {
		// Require Plugins
		text : "bower_components/requirejs-text/text",

		// Others
		json : "bower_components/json2/json2",
		jquery: "bower_components/jquery/jquery",
		underscore : "bower_components/underscore/underscore",
		backbone : "bower_components/backbone/backbone",
		marionette : "bower_components/marionette/lib/core/backbone.marionette.min",		
		"backbone.wreqr" : "bower_components/backbone.wreqr/lib/backbone.wreqr.min",
		"backbone.babysitter" : "bower_components/marionette/public/javascript/backbone.babysitter",
		"backbone.eventbinder" : "bower_components/backbone.eventbinder/src/eventbinder",
		mustache : "bower_components/mustache/mustache",
		spectrum: "bower_components/spectrum/spectrum",
		flot : "bower_components/flot/jquery.flot",
		"flot.time" : "bower_components/flot/jquery.flot.time",
		"flot.pie" : "bower_components/flot/jquery.flot.pie",
		"flot.threshold" : "bower_components/flot/jquery.flot.threshold",
		"flot.stack" : "bower_components/flot/jquery.flot.stack",
		"flot.crosshair" : "bower_components/flot/jquery.flot.crosshair",
		"moment" : "bower_components/momentjs/moment",
		"dust" : "bower_components/dustjs/dist/dust-full-0.3.0.min",
		"bootstrap" : "bower_components/bootstrap/dist/js/bootstrap.min" 
	},

	/*
	 * shim is used to export js files that do not follow the AMD module style
	 * It is also used to define dependencies for scripts that DO follow the
	 * module style.
	 */
	shim : {

		json : {
			exports : "JSON"
		},

		jquery : [ "json" ],

		underscore : {
			deps : [ "json" ],
			exports : "_"
		},

		backbone : {
			deps : [ "json", "underscore", "jquery" ],
			exports : "Backbone"
		},
		bootstrap : {
			deps : ["jquery"],
			exports : "Bootstrap"
		},
		marionette : {
			deps : [ "jquery", "backbone", "underscore" ],
			exports : "Marionette"		
		},
		"backbone.wreqr" : {
			deps : [ "backbone" ]
		},
		mustache : [ "json" ],
		spectrum: ['jquery'],
		
		flot : {
			deps : [ "json", "jquery" ],
			exports : "jQuery"
		},
		"flot.time" : {
			deps : [ "json", "jquery", "flot" ],
			exports : "jQuery"
		},
		"flot.crosshair" : {
			deps : [ "json", "jquery", "flot" ],
			exports : "jQuery"
		},
		"flot.pie" : {
			deps : [ "json", "jquery", "flot" ],
			exports : "jQuery"
		},
		"flot.threshold" : {
			deps : [ "json", "jquery", "flot", "flot.time" ],
			exports : "jQuery"
		},
		"flot.stack" : {
			deps : [ "json", "jquery", "flot", "flot.time", "flot.crosshair" ],
			exports : "jQuery"
		}
	}
});

require([ "marionette", "mustache", "js/App", "js/util/WebConsoleUtils","bootstrap"], function(Marionette,
		Mustache, App, WebConsoleUtils) {
	var consoleUtils = new WebConsoleUtils({
		debug: true //config.DEBUG
	});
	//	
	// consoleUtils.initConsole();

	// var dashboard = new DashboardRouter();
	// Backbone.history.start();
	// Assigning Renderer
	Backbone.Marionette.Renderer.render = function(template, data) {
		//console.log("rendering with this now:");
//		console.log(data);
		if (typeof template === "function") {
			return Mustache.render(template(), data);
		}
		return Mustache.render(template, data);
	};	
	
	App.start();
});
