define(
		[
		 "jquery",
		 "underscore",
		 "backbone",
		 "marionette",
		 "flot",
		 "text!tpl/app/flotDemo.mustache",
		 ],function($,_,Backbone,Marionette,tpl){

			var TestInputViews = Marionette.ItemView.extend({
				tagName:"div",
				className:"",
				id:"flotDemoContent",
				template : tpl,
				ui:{
					graph : 'div.flot',

				},
				initialize:function(options){
					this.model = options.model|| new Backbone.Model();
				},
				onShow:function(){
					
				},
			});
			return TestInputViews;
		});