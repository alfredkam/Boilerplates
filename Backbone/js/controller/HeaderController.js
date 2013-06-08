//Filename : HeaderController

define([
        //LIBRARIES
        "jquery",
        "mustache",
        "backbone",
        "marionette",
        //MODELS 
        //VIEWS   
        "js/views/HeaderView"
        //TEMPLATES
        //NO EXPORT
], function(
		$, Mustache, Backbone, Marionette,
		HeaderView
		//tpl 
) {
		var HeaderController = Marionette.Controller.extend({
			initialize  : function(options) {
				var self = this;
				this.options = options || {};
				this.region = options.region;
			},
			show : function() {
				var view = new HeaderView({el : this.options.el });
				this.region.show(view);
			}
			/*
			 * TODO:  Can include other functions to call
			 */
		});	
		return HeaderController;
});