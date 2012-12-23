//boilerplate 
//this file is a common js template 

(function() {
	define([
		'jquery/jquery',
		'underscore/underscore',
		'backbone/backbone',
		'mustache/mustache',
		'text!tpl/main.mustache'
	],function($, _, Backbone, Mustache, tpl) {
		
		var homeView = Backbone.View.extend({
			render : function(lang) {
				$("#body").html(tpl);
			},
		});	

		return homeView;
	});
})();
