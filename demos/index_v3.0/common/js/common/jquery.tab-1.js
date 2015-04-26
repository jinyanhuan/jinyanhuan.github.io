(function ($) {
    $.fn.tabChange = function (opts) {
        this.each(function () {
            init.call(this, opts);
        });

        return this;
    };

    function init(opts) {
        var defaultOption = {
            tabBox:$(this),
            tabs:null,               //切换tabs
            contents:null,           //需要被切换内容
            ifArr:false,             //是否有移动箭头
            tabArr:'.tab-arr',       //移动的箭头
            ifAuto:false,            //是否自动播放
            current:'cur',           //选中的tab的类名
            tabIndex:0,
            aTabWidth:0,
            changeWay:'mouseenter'
        };

        var options = $.extend(defaultOption, opts);
        options.tabs = options.tabBox.find(options.tabs);
        options.contents = options.tabBox.find(options.contents);
        if(options.ifArr) options.tabArr = options.tabBox.find(options.tabArr);
        options.tabLength = options.tabs.length;

        options.tabs.bind(options.changeWay,function(e){
            options.tabIndex = $(this).index();
            options.tabs.removeClass(options.current).eq(options.tabIndex).addClass(options.current);
            options.contents.hide().eq(options.tabIndex).show().triggerLazyImg();
            if(options.ifArr) options.tabArr.stop().animate({left:options.tabIndex*options.aTabWidth+'px'})
        });
    }

})(jQuery);




