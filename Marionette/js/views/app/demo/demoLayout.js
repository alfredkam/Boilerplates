define(
		[
		 "jquery",
		 "underscore",
		 "backbone",
		 "marionette",
		 "js/views/app/demo/TestInputsView",
		 "text!tpl/app/demo.mustache",
		 
		 ],

		 function($,_,Backbone,Marionette,TestInputsView,tpl){
			var regionViews={flot: Marionette.ItemView, TestInputsView:TestInputsView, page2:Marionette.ItemView,};

			var DemoLayout = Marionette.Layout.extend({
				tagName : "div",
				className : "",
				id : "content",
				template : tpl,
				initialize : function(options) {
					this.model = options.model || new Backbone.Model();
				},
				regions : {
					sampleRegion: new Marionette.Region({el:"#sampleRegion"}),
				},
				// you can plug in data here for rendering
				templateHelpers: function(){
					return {}; 
				},
				events : {
					"change select#changeDemo": function(e){
						// change the region here!
						var val = $(e.target).val();
						console.log(val);
						var view =regionViews[val];
						this.regions.sampleRegion.show(new view({model:this.model}));
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
					console.log("onShow");
					this.regions.sampleRegion.show(new Marionette.ItemView({template:""}))
					// a good place to place bindings for your model here
					this.model.on("change", function() {
						console.log(this.model);
					}, this);
				},
				onClose : function() {

					this.model.off(null, null, this);
					this.region.close();
				},



			});
			return DemoLayout;
		});	
