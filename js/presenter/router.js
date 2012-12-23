//this script defines the routes set up
(function() {
	define([
		'jquery',
		'underscore',
		'backbone',
		'mustache',
		'views/site.view',
		'text!tpl/footer.mustache',
	],function($, _, Backbone, Mustache, Views, tpl) {
		var Routes = Backbone.Router.extend({
			//routes setup
			routes : {
				'!/about' : 'about',
				'!/contact' : 'contact',
				'!/:lang/about' : 'about',
				'!/:lang/contact' : 'contact',
				'!/:lang' : 'anotherDefaultRoute',
				'*actions' : 'defaultRoute',
			}
		});

		//depending on the routes condition 
		var init = function() {
			var selectTab = function(tab) {
				$(".nav li").each(function() {
					$(this).removeClass("active");
				});
				
				$(".nav li").each(function() {
					if($(this).children("a").attr("href").trim() == "#" && tab == "_default") 
						$(this).addClass("active");
					else if($(this).children("a").attr("href").toLowerCase().search(tab.toLowerCase()) > -1)
						$(this).addClass("active");
				});		
			};

			var route = new Routes;
			route.on('route:about', function(lang) {
				if(!lang) 
					lang = "EN";
				selectTab("about");
				var aboutView = new Views.About;
				aboutView.render(lang);
			});	
			route.on('route:contact', function(lang) {
				if(!lang) 
					lang = "EN";
				selectTab("contact");
				var contactView = new Views.Contact;
				contactView.render(lang);
			});	
			route.on('route:anotherDefaultRoute', function(lang) {
				if(!lang) 
					lang = "EN";
				selectTab("_default");
				var defaultView = new Views.Default;
				defaultView.render(lang);
			});

			route.on('route:defaultRoute', function() {
				selectTab("_default");
				var defaultView = new Views.Default;
				defaultView.render("EN");
			});
			//start backbone history tracker
			Backbone.history.start();
		
			//loads the template for footer
			$("#footer").html(tpl);
		};

		return {
			init : init,
		}

	}); 
})();
