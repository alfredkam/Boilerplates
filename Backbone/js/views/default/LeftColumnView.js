//defaultView
define([
        //LIBRARIES
        "jquery",
        "backbone",
        "marionette",
        "mustache",
        //MODELS
        "js/models/ToDoModel"
        //VIEWS
        //MODULES
        //NO EXPORTS
], function(
		$, Backbone, Marionette, Mustache,
		toDoModal
){
		var leftColumnView = Marionette.ItemView.extend({
			template : "<div>Menu </div>",
			onBeforeRender : function() {
				this.template = "I HAVE MODIFIED THIS PANEL"
			}
		});		
		return leftColumnView;
});