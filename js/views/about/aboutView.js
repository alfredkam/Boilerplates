//aboutView 

(function() {
	define([
		'jquery',
		'underscore',
		'backbone',
		'mustache',
		'text!tpl/about.mustache',
	],function($, _, Backbone, Mustache,tpl) {
		var aboutView = Backbone.View.extend({
			render : function(lang) {
				$("#body").html(tpl);
			},	
		});
		return aboutView;
	});
})();
