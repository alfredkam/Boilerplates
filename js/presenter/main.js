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
})();
