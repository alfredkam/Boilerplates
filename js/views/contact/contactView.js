//contact view 

(function() {
	define([
		'jquery',
		'underscore',
		'backbone',
		'mustache',
		'text!tpl/contact.mustache',
	],function($, _, Backbone, Mustache, tpl) {

		var contactView = Backbone.View.extend({
			render : function(lang) {
				console.log(lang);
				$("#body").html(tpl);
			},
		});	

		return contactView;
	});
})();
