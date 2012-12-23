//this script defines the dependencies
(function() {
	requirejs.config({
		waitSeconds: 15,
		baseUrl : 'lib',
		paths : {
			views : '../js/views',
			models : '../js/models',
			presenter : '../js/presenter',
			text : 'requirejs/text',
			tpl : '../templates',
		},
		//set up the dependecies here
		shim : {
			'jquery-ui/jquery-ui' : {
				deps : ['jquery/jquery'],
			},
			'jquery/jquery' : {
				exports : "$",
			},
			'yepnope/yepnope' : {
				exports : 'yepnope',
			},
			'underscore/underscore' : {
				exports : 'underscore',
			},
			'backbone/backbone' : {
				deps : ['underscore/underscore', 'jquery/jquery'],
				exports : 'Backbone',	
			},
			'bootstrap/bootstrap' : {
				deps : ['jquery/jquery','jquery-ui/jquery-ui'],
			},
			'mustache/mustache' : {
				deps : ['jquery/jquery'],
				exports : 'mustache',
			},
			'bootbox/bootbox' : {
				deps : ['jquery/jquery', 'bootstrap/bootstrap'],	
			},
			'jquery-notify/jquery-notify' : {
				deps : ['jquery/jquery', 'jquery-ui/jquery-ui'],
			},
		},
	});

	require([
		'jquery/jquery',
		'underscore/underscore',
		'backbone/backbone',
		'mustache/mustache',
		'presenter/router',
		'bootstrap/bootstrap',
	//	'bootbox/bootbox',           			/* enable these lines if to use them */
	//	'jquery-notify/jquery-notify',			/* enable these lines if to use them */
	],function($, _, Backbone, mustache, Router) {
		Router.init();
	});
	/* using yepnope to load additional scripts if it is a tablet */
	/*
	require([
		'yepnope/yepnope'
	], function(yepnope) {
		var isTablet = navigator.userAgent.match(/(iPad|Android .* Chrome\/[.0-9]* (?!Mobile)|Opera Tablet|Android .* (?!Mobile)|Tablet|silk|kindle fire)/i) != null;
		yepnope({
			test : isTablet,
			yep : //do something,
			nope : //else do something else
		});
	});
	*/

})();
