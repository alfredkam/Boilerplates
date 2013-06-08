/*
 * File: Router.jshttp://localhost/js/views/default/defaultView.js
 * 
 * 
 */

define([
        //LIBRARIES
        "jquery",
        "backbone",
        "marionette",
        "mustache",
        //MODELS
        "js/controller/HeaderController",
        "js/views/FooterView",
        "js/controller/DefaultController",
        //VIEWS
        //MODULES
        "js/util/QueryStringUtils"
        //NOEXPORTS
], function(
		$, Backbone, Marionette, Mustache,
		HeaderController, FooterView, DefaultContoller,
		QueryStringUtils
){
		var QueryStringUtils = new QueryStringUtils();
		
		//set marionette to default to mustache template
		Marionette.Renderer.render = function(template, data){
			  return Mustache.to_html(template, data);
		};
		
		var Router = Backbone.Router.extend({
			routes : {
				//TODO: include your routes here
				//in the form of hash : "function"
				"" : "default"
			},
			initialize : function() {
				var self = this;
				//created a marionette application
				this.app = new Marionette.Application();
				
				self.$header = $("#header")[0];
				self.$footer = $("#footer")[0];
				self.$content = $("#content")[0];
				
				/*
				 * Regions : the spots that marionette manages the display of the view contents 
				 * within those dom elements
				 */
				self.app.addRegions({
					header : "#header",
					footer : "#footer",
					content : "#content"
				});
				
				//shows the views in the regions
				var headerController = new HeaderController({
						el : self.$header,
						region : self.app.header
					});
				
				headerController.show();
				
				//self.app.footer.show(
				//	new FooterView({
				//		el : self.$footer
				//	})
				//);
				
				self.app.footer.show(new FooterView().render());
			},
			default : function() {
				var self = this;

				var defaultController = new DefaultContoller({
					el : self.$content,
					region : self.app.content
				});
				
				defaultController.show();
			}
		});
	
		return Router;
});
