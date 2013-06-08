//Filename : DefaultController

define([
        //LIBRARIES
        "jquery",
        "mustache",
        "backbone",
        "marionette"
        //MODELS 
        //VIEWS   
        //TEMPLATES
        //NO EXPORT
], function(
		$, Mustache, Backbone, Marionette
) {
		var defaultLayout = Marionette.Layout.extend({
			template : "<div id='leftColumn'></div><div id='rightColumn'>" +
					"</div><div id='todoBox'></div>",
			regions : {
				leftColumn : "#leftColumn",
				rightColumn : "#rightColumn",
				todo : "#todoBox"
			}
		});
	
		return defaultLayout;
});