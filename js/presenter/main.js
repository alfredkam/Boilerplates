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
		shim : {
			'jquery/jquery-ui/js/jquery-ui' : {
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
			'bootstrap/js/bootstrap' : {
				deps : ['jquery/jquery','jquery/jquery-ui/js/jquery-ui'],
			},
			'mustache/mustache' : {
				deps : ['jquery/jquery'],
			},
		},
	});

	require([
		'jquery/jquery',
		'underscore/underscore',
		'backbone/backbone',
		'mustache/mustache',
		'presenter/router',
	],function($, _, Backbone, Mustache, Router) {
		Router.init();
	});
	require(['bootstrap/js/bootstrap']);
	/* using yepnope to load additional scripts if it is a tablet */
	/*
	require([
		'yepnope/yepnope'
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
