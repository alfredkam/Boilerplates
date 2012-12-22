(function() {
	define([
		'jquery/jquery',
		'underscore/underscore',
		'backbone/backbone',
		'mustache/mustache',
	],function($, _, Backbone, Mustache) {

		var aboutView = Backbone.View.extend({
			render : function(lang) {
				$.ajax({
					url : "templates/about.mustache",
					type : "POST",
				}).done(function(tmp) {
					$("#body").html(tmp);
				});
			},	
		});

		var contactView = Backbone.View.extend({
			render : function(lang) {
				console.log(lang);
				$.ajax({
					url : "templates/contact.mustache",
					type : "POST",
				}).done(function(tmp) {
					$("#body").html(tmp);
				});
			},
		});
		
		var defaultView = Backbone.View.extend({
			render : function(lang) {
				console.log(lang);
				$.ajax({
					url : "templates/main.mustache",
					type : "POST",
				}).done(function(tmp) {
					$("#body").html(tmp);
				});
			},
		});

		return {
			Default : defaultView,
			About : aboutView,
			Contact : contactView,
		};
	});
})();
