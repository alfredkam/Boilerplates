define(
		[
		 "jquery",
		 "underscore",
		 "backbone",
		 "marionette",

		 "text!tpl/app/demo.mustache",
		 ],


		 var NewThemeView = Marionette.ItemView
		 .extend({
			 tagName : "div",
			 className : "",
			 id : "content",
			 template : tpl,
			 initialize : function(options) {
				 initialize : function(options) {
					 // the default constructor for marionette views handles
						// this already
					 // it is needed if u want to have a model by default;
					 this.model = options.model || new Backbone.Model();
				 },
			 },
			 region : new Marionette.Region({
				 el : "#demoRegion"
			 }),
			 // you can plug in data here for rendering
			 templateHelpers: function(){
				 return {}; 
			 },
			 events : {
				 "click button": function(e){
					 alert("you have clicked a button");
				 }
			 }
		 },
// you can "fix" the model here for rendering
		 serializeData : function() {
			 var data = this.model.toJSON();

			 return data;
		 },
		 onShow : function() {
			 // a good place to place bindings for your model here
			 this.model.on("change", function() {
				 console.log(this.model);
			 }, this);
		 },
		 onClose : function() {

			 this.model.off(null, null, this);
			 this.region.close();
		 },



		 );
