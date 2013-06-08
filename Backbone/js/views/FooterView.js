//filename FooterView

define([
        //LIBRARIES
        "jquery",
        "mustache",
        "marionette"
        //MODELS
        //VIEWS
        //TEMPLATES
     //   "text!tpl/Footer.mustache"
], function(
		$, Mustache, Marionette,
		tpl	
){
		var FooterView = Marionette.ItemView.extend({
			template : "<div> Stop staring at my feet</div>"
		});
		return FooterView;
});