//defaultView
define([
        //LIBRARIES
        "jquery",
        "backbone",
        "marionette",
        "mustache"
        //MODELS
        //VIEWS
        //MODULES
        //NO EXPORTS
], function(
		$, Backbone, Marionette, Mustache
){
		var rightColumnView = Marionette.ItemView.extend({
			template : "IAMA RIGHT COLUMN"
		});		
		return rightColumnView;
});