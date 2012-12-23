//boilerplate 
//this file is a common js template 

(function() {
	define([
		'jquery',
		'underscore',
		'backbone',
		'mustache',
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
