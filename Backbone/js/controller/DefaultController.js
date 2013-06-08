//Filename : DefaultController

define([
        //LIBRARIES
        "jquery",
        "mustache",
        "backbone",
        "marionette",
        //MODELS 
        //VIEWS   
        "js/views/default/DefaultLayout",
        "js/views/default/LeftColumnView",
        "js/views/default/RightColumnView",
        "js/views/toDo/ToDoLayout"
        //TEMPLATES
        //NO EXPORT
], function(
		$, Mustache, Backbone, Marionette,
		DefaultLayout, LeftColumnView, RightColumnView, ToDoLayout
) {
		var DefaultController = Marionette.Controller.extend({
			initialize  : function(options) {
				var self = this;
				this.options = options || {};
				this.region = options.region;
			},
			show : function() {
				this.layout = new DefaultLayout();
				this.todo = new ToDoLayout();
				//layout.render();
				this.region.show(this.layout);
				//console.log(this.options.el);
				/*
				var leftColumnView = new LeftColumnView();
				var rightColumnView = new RightColumnView();
				
				leftColumnView.render();
				rightColumnView.render();
				*/
				this.layout.leftColumn.show(new LeftColumnView().render());
				this.layout.rightColumn.show(new RightColumnView().render());
				this.layout.todo.show(this.todo);
				
				this.todo.input.show(new todoInputView().render());
				this.todo.content.show(new todoContentView().render());
			}
		});	
		return DefaultController;
});