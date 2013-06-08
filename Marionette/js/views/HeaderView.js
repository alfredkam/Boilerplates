//Filename: boilerplate.js

define([
        //LIBRARIES
        "jquery",
        "marionette",
        //OTHER
        
        //TEMPLATES
        "text!tpl/app/Header.mustache",
        
        //NO EXPORTS

], function($, Marionette, tpl){
	var HeaderView = Marionette.ItemView.extend({
		
		template: tpl,
		
		events: {
			//"click button.logout": "logout"
		},
		
		logout: function(e){
			$(e.target.form).submit();
		},
		
		setActiveLink: function(pageName){
			
			this.deactivateAllLinks();
			
			var href = "#/"+pageName;
			this.$("a.tile[href='"+href+"']").addClass("active");
			this.$("ul.nav > li > a[href='"+href+"']").addClass("current");
		},
		deactivateAllLinks: function(){
			this.$("ul.nav > li > a").removeClass("current");
			this.$("a.tile").removeClass("active");
		},
		
		runExtras: function(){
			$("button.logout").on("click", this.logout);
		}
		
	});
	
  return HeaderView;
  
});