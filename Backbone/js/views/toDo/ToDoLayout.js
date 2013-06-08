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
		var todoLayout = Marionette.Layout.extend({
			template : "<div id='title'>ToDo Example</div><div id='input'>" +
					"</div><div id='todoList'></div>",
			regions : {
				input : "#input",
				content : "#todoList"
			}
		});
	
		return todoLayout;
});