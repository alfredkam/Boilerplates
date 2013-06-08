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
			 events : {
				 "click button": function(e){
					 alert("you have clicked a button");
				 }
			 }
		 },
		 onClose : function() {
		 },

		 );
