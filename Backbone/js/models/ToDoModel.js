define([
        //Libraries
        "jquery",
        "backbone"
        //MODELS
        //VIEWS
        //MODULES
        //NO EXPORTS
], function(
		$, Backbone
) {
		var todoModel = Backbone.Model.extend({
			defaults : {
				id : "0",
				note : ""
			}
		})
		
		var collection = Backbone.Collection.extend({
			model : todoModel
		});
		
		return collection;
});