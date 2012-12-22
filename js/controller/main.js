(function() {
	requirejs.config({
		waitSeconds: 15,
		baseUrl : 'lib',
		paths : {
			views : '../js/views',
			models : '../js/models',
			controller : '../js/controller',
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
		'controller/router',
	],function($, _, Backbone, Mustache, Router) {
		Router.init();
	});
	require(['bootstrap/js/bootstrap']);
})();
