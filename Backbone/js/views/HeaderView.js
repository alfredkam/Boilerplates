//Filename : HeaderView

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
		$, Mustache, Backbone, Marionette//, 
		//tpl 
) {
		var HeaderView = Marionette.ItemView.extend({
			render : function() {
				/*
				 * TODO :: Include any model / collections you need
				 * 
				 */
				console.log("here");
			},
			onShow : function() {
				this.el.innerHTML = "LISTING HEADER";
			},
			events : {
				click : "sayHello"
			},
			sayHello : function() {
				alert("hello");
			}
		});	
		return HeaderView;
});