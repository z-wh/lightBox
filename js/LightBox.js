;(function ($) {
	var LightBox = function () {

	};

	LightBox.prototype =  {
		// body...
	};

	LightBox.init = function (posters){
		var self = this;
		posters.each(function(){
			new self($(this));});
	};

	window.LightBox = LightBox;
})(jQuery);