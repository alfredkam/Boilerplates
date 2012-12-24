//jquery plugin boilerplate
//reference : http://coding.smashingmagazine.com/2011/10/11/essential-jquery-plugin-patterns/


//enclosure
;(function($, window, document, undefined) {

	//set default parameter here
	var pluginName = "pluginName",
		defaults = {
			pluginParameter : "value",
		};

	function Plugin(element, options) {
		this.element = element;    //element id or classname
		this.options = $.extend( {} ,defaults, options);  //sets the options parameters
		this._defaults = default;
		this._name = pluginName;

		this.init();

	};

	Plugin.prototype.init = function() {
		//place logic here
			
	};

	$.fn[pluginName] = function(options) {
		//no need $(this), can just use this
		
		//prevents multiple instantiations
		return this.each(function() {
			if(!$.data(this, 'plugin_' + pluginName)) {
				$.data(this, 'plugin_'+pluginName,
					new Plugin(this, options));
			}
		});
	};

})(jQuery, window, document);
