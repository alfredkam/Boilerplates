(function() {
	define([
		'jquery/jquery',
		'underscore/underscore',
		'backbone/backbone',
		'mustache/mustache',
		'views/site.view',
	],function($, _, Backbone, Mustache, Views) {
		var Routes = Backbone.Router.extend({
			routes : {
				'!/about' : 'about',
				'!/contact' : 'contact',
				'!/:lang/about' : 'about',
				'!/:lang/contact' : 'contact',
				'!/:lang' : 'anotherDefaultRoute',
				'*actions' : 'defaultRoute',
			}
		});

		var init = function() {
			var route = new Routes;
			
			route.on('route:about', function(lang) {
				if(!lang) 
					lang = "EN";
				var aboutView = new Views.About;
				aboutView.render(lang);
			});	
			route.on('route:contact', function(lang) {
				if(!lang) 
					lang = "EN";
				var contactView = new Views.Contact;
				contactView.render(lang);
			});	
			route.on('route:anotherDefaultRoute', function(lang) {
				if(!lang) 
					lang = "EN";
				var defaultView = new Views.Default;
				defaultView.render(lang);
			});

			route.on('route:defaultRoute', function() {
				var defaultView = new Views.Default;
				defaultView.render("EN");
			});
			//start backbone history tracker
			Backbone.history.start();
		
			//loads the tempate for footer
			$.ajax({
				type :"POST",
				url : "templates/footer.mustache",
			}).done(function(tmp) {
				$("#footer").html(tmp);
			});
			
		};

		return {
			init : init,
		}

	}); 
})();
