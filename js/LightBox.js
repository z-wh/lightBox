/**
 * lightbox 类封装 采用匿名函数自执行方式
 * @param  {[type]} $ [description]
 * @return {[type]}   [description]
 */
;(function($) {
    var LightBox = function() {
    	var self =this;
    	this.popupMask = $('<div class="lightBox-mask">');
    	this.popupWin = $('<div class="js-lightBox lightBox-popup">');
    	this.bodyNode = $(document.body);
    	this.renderDOM();
    };

    LightBox.prototype = {
    	renderDOM : function(){
    		var strDOM = '<div class="lightBox-pic-view">'+
			             '   <span class="lightBox-btn lightBox-prev-btn"></span>'+
			             '   <img src="images/1-1.jpg" alt="" class="lightBox-pic">'+
			             '   <span class="lightBox-btn lightBox-next-btn"></span>'+
			            '</div>'+
			            '<div class="lightBox-caption-area">'+
			            '    <div class="lightBox-description">图片描述文字</div>'+
			            '    <div class="lightBox-of-index">图片索引：1 of 3</div>'+
			                '<span class="lightBox-close-btn"></span>'+
			            '</div>';
			this.popupWin.html(strDOM);
			this.bodyNode.append(this.popupMask,this.popupWin);
    	}
    };

    LightBox.init = function(posters) {
        var self = this;
        $(posters).each(function() {
            new self($(this));
        });
    };

    window.LightBox = LightBox;
})(jQuery);