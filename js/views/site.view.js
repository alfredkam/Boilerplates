//the views template
(function() {
	define([
		'views/home/homeView',	
		'views/contact/contactView',
		'views/about/aboutView',
	],function(home, contact, about) {
		return {
			Default : home,
			About : about,
			Contact : contact,
		};
	});
})();
