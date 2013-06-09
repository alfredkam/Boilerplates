define([ "jquery", "underscore", "backbone", "marionette", "flot",
         "text!tpl/app/flotDemo.mustache", ],
         function($, _, Backbone,
        		 Marionette, flot,tpl)
        		 {

	var FlotView = Marionette.ItemView.extend({
		tagName : "div",
		className : "",
		id : "flotDemoContent",
		template : tpl,
		ui : {
			graph : 'div.flot',

		},
		initialize : function(options)
		{
			this.model = options.model || new Backbone.Model();

		},
		onShow : function()
		{
			var data = {
					label : "y = 3",
					data : [ [ 0, 3 ], [ 10, 3 ] ]
			};
			this.ui.graph(data, {});
		},
	});
	return FlotView;
        		 });