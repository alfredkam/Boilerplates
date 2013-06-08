define(
		[
		 "jquery",
		 "underscore",
		 "backbone",
		 "marionette",

		 "text!tpl/app/demo.mustache",
		 ],

		 function($,_,Backbone,Marionette,tpl){
			var regionViews={flot:flotView,page1:page1View,page2:page2View,};
			
			var NewThemeView = Marionette.Layout.extend({
				tagName : "div",
				className : "",
				id : "content",
				template : tpl,
				initialize : function(options) {
					this.model = options.model || new Backbone.Model();
				},
				regions : {
					sampleRegion:"#sampleRegion",
				},
				// you can plug in data here for rendering
				templateHelpers: function(){
					return {}; 
				},
				events : {
					"change select#changeDemo": function(e){
						// change the region here!
						var val = $(e.target).val();
						this.regions.sampleRegion.show( new regionViews[val]());
					},
					// captures the event and sets the model
					"change input[type='text']" : function(e) {
						var input = $(e.target);
						var name = input.prop("name");
						this.model.set(name, input.val());
						console.log(this.model.get(name)+" is changed");
					},
				},


//				you can "fix" the model here for rendering
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
			});
		});
