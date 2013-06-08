//Filename: dashboard

define([  
        //LIBRARIES
        "jquery",
		"backbone",
		"marionette"
], function(
		$, Backbone, Marionette
){	
	var DashboardRouter = Marionette.AppRouter.extend({
		
		appRoutes:{
			"" : "index",
			"demo" : "demo"
		}
	});
	
	return DashboardRouter;
});
