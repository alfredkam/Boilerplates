require.config({
	
	baseUrl: "../..",
	
	paths: {
		//Require Plugins
		text: "lib/require/text",
		
		//Others
		json: "lib/json/json2",
		jquery: "lib/jquery/jquery-1.9.1",
		underscore: "lib/underscore/underscore",
		backbone: "lib/backbone/backbone",
		mustache: "lib/mustache/mustache"
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
		
		mustache: ["json"]
	}
});

require(["js/util/WebConsoleUtils"], function(WebConsoleUtils){
	
	//TODO: Starting point
	var config = window.sitename.getConfig();
	var configDebug = config.DEBUG;
	
	//TODO: Choose if you want to follow the current config debug flag, or your own.
	var consoleUtils = new WebConsoleUtils({
		//debug: debug flag here
	});
	
	consoleUtils.initConsole(/*debgu flag here*/);
});