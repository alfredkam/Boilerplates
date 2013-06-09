//LIBRARIES

define([ "jquery", "backbone", "marionette",

//       VIEWS
         "js/views/HeaderView", 
         "js/views/FooterView", 
         "js/views/app/demo/demoLayout",
         "js/views/AppLayout",
//       Modules

//       NO EXPORTS goes last

], function(
		$, Backbone, Marionette, 
		HeaderView, FooterView, DemoView, 
		AppLayout
) {
	var DashboardController = Marionette.Controller.extend({

		initialize : function()
		{
			this.isInit = this.isInit || false;

			if (!this.isInit)
			{
				this.regions = this.regions || new AppLayout({
					el : "#app"
				});
				this.currentRoute = "/";
				this.isInit = true;
			}
		},

		initHeaderFooter : function(pageName)
		{
			// a good place for code that needs to be ran every page
			if (!this.regions.headerRegion.currentView)
			{
				this.regions.headerRegion.show(new HeaderView({}));
			}

			if (!this.regions.footerRegion.currentView)
			{
				this.regions.footerRegion.show(new FooterView());
			}
			// this.setActiveLink(pageName);
		},

		index : function()
		{
			var result = this.checkLogin();
			if (result)
			{
				// go to default page
				// for now let it be register page
				this.initHeaderFooter();
				// set route here if needed
				// this.currentRoute = "#/performance";
				// this.performance();

				// oh also.. don't forget to initialize header and footer
			}
			else
			{
				// Not logged in
				// show login page
				// this.currentRoute = "#/login";
				// this.login();
			}
		},
		demo : function()
		{
			this.regions.contentRegion.show(new DemoView({model:new Backbone.Model()}));
		},
		checkLogin : function()
		{
			// var isLoggedIn = false;
			// this.user.fetch({
			// async : false,
			// success : function(model, response) {
			// console.log("logged In");
			// // Logged in, stay in current route unless you are at login
			// // view
			// isLoggedIn = true;
			// }
			// });
			//
			// return isLoggedIn;
			return false;
		},

		login : function()
		{
			console.log("rendering login view");
			// resetting header and footer region
			this.regions.headerRegion.reset();
			this.regions.footerRegion.reset();
			this.regions.contentRegion.reset();

			this.regions.contentRegion.show(new LoginView());
		},

	});

	return DashboardController;
});
