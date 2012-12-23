//this script defines the dependencies
(function() {
	requirejs.config({
		waitSeconds: 15,
		baseUrl : 'lib',
		paths : {
			views : '../js/views',
			models : '../js/models',
			presenter : '../js/presenter',
			tpl : '../templates',
		},
		//set up the dependecies here
		shim : {
			'jquery-ui' : {
				deps : ['jquery'],
			},
			'jquery' : {
				exports : "$",
			},
			'yepnope' : {
				exports : 'yepnope',
			},
			'underscore' : {
				exports : 'underscore',
			},
			'backbone' : {
				deps : ['underscore', 'jquery'],
				exports : 'Backbone',	
			},
			'bootstrap' : {
				deps : ['jquery','jquery-ui'],
			},
			'mustache' : {
				deps : ['jquery'],
			},
			'bootbox' : {
				deps : ['jquery', 'bootstrap'],	
			},
			'jquery-notify' : {
				deps : ['jquery', 'jquery-ui'],
			},
		},
	});

	require([
		'jquery',
		'underscore',
		'backbone',
		'mustache',
		'presenter/router',
		'bootstrap',
	//	'bootbox',           			/* enable these lines if to use them */
	//	'jquery-notify',			/* enable these lines if to use them */
	],function($, _, Backbone, Mustache, Router) {
		Router.init();
	});
	/* using yepnope to load additional scripts if it is a tablet */
	/*
	require([
		'yepnope'
	], function(yepnope) {
		var isTablet = navigator.userAgent.match(/(iPad|Android .* Chrome\/[.0-9]* (?!Mobile)|Opera Tablet|Android .* (?!Mobile)|Tablet|silk|kindle fire)/i) != null;
		yepnope({
			test : yepnope,
			yep : //do something,
			nope : //else do something else
		});
	});
	*/

})();
