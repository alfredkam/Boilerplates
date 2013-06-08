(function($, _){
	$.slider = function(self, options, former) {
		var base = this;
		base.$el = $(self);
		base.el = self;
		base.$el.data("slider",base);
		
//		if ( self instanceof jQuery ) {
//			base.$el = self;
//			base.el = self[0];
//		} else {
//			base.$el = $(self);
//			base.el = self;			
//		}
//		base.$el.data("slider",base);
		
		base.init = function() {			
			base.options = $.extend({}, $.slider.defaultOptions, options.options);			
			base.left = base.options.left;
		};

		base.active = function() {
			//sets the dom elements
			
			if(base.$el.hasClass("paddle") == false)
				base.$el.addClass("paddle");

			var body = '<div class="col_2 alpha">';
			body += '<img src="/images/dashboard/user.svg" width="100%" height="100%"/><div class="numScore">'+base.options.left+'%</div>';
			body += '</div>';
			body += '<div class="col_8">';
			body += '<div class="leftPaddle" style="width:'+base.options.left+'%"></div>'+
								'<div class="rightPaddle" style="width:'+(100-base.options.left)+'%"></div>'+
								'<div class="gasPaddle lightgrey" style="max-width:'+base.options.paddleMaxWidth+';left:'+(base.options.left+base.options.offset)+'%;"><i class="icon-lock betaLock"></i></div>';
			body += '</div>';
			body += '<div class="col_2 omega">';
			body += '<img src="/images/dashboard/money.svg" width="100%" height="100%"/><div class="numScore">'+base.options.right+'%</div>';
			body += '</div>';
			
			base.$el.html(body);
		};

		base.onChange = function() {
			base.$el.children('div.col_8').children("div.gasPaddle").mousedown(function(){
				base.listen();
			});
		};

		base.listen = function(){
			var _self = this;
				var paddle = base.$el.children('div.col_8').children(".gasPaddle");
				var width = base.$el.children(".col_8").css("width").replace(/px/,"");
				var leftBar = paddle.parent().children(".leftPaddle");
				var rightBar = paddle.parent().children(".rightPaddle");
				var leftScore =	base.$el.children("div.alpha").children(".numScore");
				var rightScore = base.$el.children("div.omega").children(".numScore");

				var offset = parseInt(leftBar.offset().left);
				
				var event = function(e){
					var leftWidth = parseInt(leftBar.css("width").replace(/px/,""));
					
					var previousPos = offset+leftWidth;
					var diff = parseInt(e.pageX) - parseInt(previousPos);
					
					var paddleWidth = parseInt(paddle.css("width").replace(/px/,""))*0.5;
					
					var r2 = parseInt(((leftWidth+diff)/width)*100);
					var result = parseInt(((leftWidth+diff-paddleWidth)/width)*100);
					
					if(leftWidth+diff < 0+paddleWidth) {
						//return;
						result = 0;//-1*(paddleWidth)/width*100;
						r2 = 0;
					} else if(leftWidth+diff > width-paddleWidth) {
						//return;
						result = (width-paddleWidth*2)/width*100;
						r2 = 100;
					}
					//console.log(self.monetizationRatio);
					_self.monetizationRatio = (100-r2)/100;
					
					paddle.css({
						left : result + "%"
					});
					leftBar.css({
						width : (r2) + "%"
					});
					base.left = r2;
					leftScore.html(parseInt(r2)+"%");
					
					rightBar.css({
						width : (100-r2) + "%" 
					});		
					
					rightScore.html( parseInt((100-r2)) + "%");
					previousPos = leftWidth+diff;//e.pageX;
				};
				
				if('ontouchstart' in window.document.documentElement) {
					$(window.document).bind("touchmove", function(e){
						e.preventDefault();
						if(e.originalEvent.touches && e.originalEvent.touches.length) {
							e = e.originalEvent.touches[0];
						}
						event(e);
					});
					
					$(window.document).bind("touchend", function(e){
						e.stopPropagation();
						$(this).unbind("touchmove");
						$(this).unbind("touchend");
					});
				}
				
				$(window.document).mousemove(function(e){
					event(e);
				});
				
				$(window.document).mouseup(function(e){
					e.stopPropagation();
					$(this).unbind("mousemove");
					$(this).unbind("mouseup");
//					with(former) {
//						options.onChange({
//							left: base.left,
//							right: 100-base.left
//						});
//					}
					options.onChange = _.bind(options.onChange, former);					
					options.onChange({
						left: base.left,
						right: 100-base.left
					});
				});	
		};
		base.reset = function(fn) {
				var origin = 0;
				origin = base.left;
		
				var parent = base.$el.children(".col_8");//$(e.currentTarget).parent().parent().children("div.content").children("div.paddle").children(".col_8");
				
				parent.children(".leftPaddle").css({
					width : (parseInt(original*100)) + "%"
				});
				
				parent.children(".rightPaddle").css({
					width : (100 - parseInt(original*100)) + "%"
				});
				
				var width_left = parseInt(parent.children(".leftPaddle").css("width").replace(/px/,""));
				var width_right = parseInt(parent.children(".rightPaddle").css("width").replace(/px/,""));
				var width_mid = parseInt(parent.children(".gasPaddle").css("width").replace(/px/,""));
				
				parent.children(".gasPaddle").css({
					left : ((width_left-width_mid*0.5)/(width_left+width_right)*100) + "%"
				});
				
				parent.parent().children(".alpha").children(".numScore").html((parseInt(original*100))+ "%");
				parent.parent().children(".omega").children(".numScore").html((100-parseInt(original*100))+"%");
						
				if(typeof(base.options.onReset.callback) === 'undefined')
					return;
				else
					with(former) {
						fn({
							left : base.left,
							right : 100-base.left
						});
					}
		};
	
		if(typeof(options.onReset) === 'undefined') {
			console.log("Reset ignored");
		} else 
			if(typeof(options.onReset.element) === "undefined")
				console.log("Reset is missing an element");
			else 
				$(options.onReset.element).click(function() {
					base.reset(options.onReset.callback);
				});		
		base.init();
		base.active();
		base.onChange();
		return this;
	};
	
	$.slider.defaultOptions = {
		left :  20,
		right: 80,
		offset : -5,
		paddleMaxWidth  : "50px"
	};

	$.fn.slider = function(options,former){
		return this.each(function() {
			(new $.slider(this,options,former));
		});
	};

})(jQuery, _);

/*
$("#").slider({
	options : {
		left : "",			#growth, out of 100  [optional]     default 20 
		right : "", 			#earnings out of 100 [optional]	    default 80
		offset : ""			#padding offset	     [optional]	    default -5
		paddleMaxWidth : ""		#max width of the paddle [optional] default 50px
	},
	onChange : function,
	onReset : {
		element : "",			#plugin will listen to the element's onclick event to fire a reset and call back
		callBack : function 		#[optional]
	}	
}, this);					#the 'this' object you've asked for
*/
