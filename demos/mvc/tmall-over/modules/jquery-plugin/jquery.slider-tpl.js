define(function(require,exports,moudles){
    return function(jquery){
        (function ($) {
            $.fn.sliderTpl = function (opts) {
                this.each(function () {
                    init.call(this, opts);
                });

                return this;
            };

            function init(opts) {
                var defaultOption = {
                    slider : $(this),                                     //整个轮播元素
                    sliderContentBox : 'div',                             //移动的盒子(在这个元素上添加transition或left)
                    silderContent: 'li',                                  //单个轮播元素选择器
                    arrClassCommon:'banner-trigger j_BannerTrigger',      //添加的箭头的类名
                    arrClass:'banner-trigger',                            //添加的箭头的类名(左右分别加上-next或-prev)
                    btnUlClass:'',                                        //添加的选项的ul的类名
                    btnClass:'',                                          //添加的选项(圆点)的类名
                    btnCurClass:'',                                       //当前选中的圆点的类名
                    ifArr:false,                                          //是否使用箭头轮播
                    moveTime:800
                };
                var options = $.extend(defaultOption, opts);
                options.sliderContentBox = options.slider.find(options.sliderContentBox);
                options.sliderContent = options.sliderContentBox.find(options.silderContent);
                options.sliderWidth = options.sliderContent.eq(0).width();
                options.sliderLength = options.sliderContent.length;

                var slider = {};
                slider.ifTransition = $.support.transition();
                slider.selIndex = [];
                slider.newIndex = 0;

                slider.addArr = function(){
                    for(var i=0; i<2; i++){
                        var a=$('<a>');
                        a.addClass('fp-iconfont '+options.arrClassCommon);
                        if(i==0) {
                            a.addClass(options.arrClass+'-next');
                            a.text('㑤');
                            options.arrRight = a;
                            options.arrRight.bind('click',this.showNext.bind(this))
                        }
                        if(i==1) {
                            a.addClass(options.arrClass+'-prev');
                            a.text('㑥');
                            options.arrLeft = a;
                            options.arrLeft.bind('click',this.showPrev.bind(this))
                        }
                        options.slider.append(a);
                    }
                    return this
                };

                slider.addBtns = function(){
                    var ul = $('<ul>');
                    ul.addClass(options.btnUlClass).addClass('clearfix');
                    for(var i=0; i<options.sliderLength; i++){
                        var li = $('<li>');
                        ul.append(li);
                        li.attr({selData:i});
                        li.text(i+1);
                        li.bind('mouseover',this.moveIndexSel.bind(this));
                        if(i==0) li.addClass(options.btnCurClass);
                        this.selIndex.push(li)
                    }
                    options.slider.append(ul);
                    return this
                };

                slider.addFirstCopy = function(){
                    return options.sliderContentBox.append(options.sliderContent.eq(0).clone()),this;
                };

                slider.bindArr = function(){
                    options.slider.bind({'mouseenter':this.showArr.bind(this),'mouseleave':this.hideArr.bind(this)})
                };

                slider.showArr = function(){
                    options.arrLeft.show();
                    options.arrRight.show()
                };

                slider.hideArr = function(){
                    options.arrLeft.hide();
                    options.arrRight.hide()
                };

                slider.showNext = function(){
                    this.newIndex == options.sliderLength ? this.fixFirst.call(this) : this.next.call(this)
                };

                slider.next = function(){
                    this.ifTransition ? options.sliderContentBox.css({transform:'translate3d(-'+options.sliderWidth*(this.newIndex+1)+'px, 0, 0)','transition':options.moveTime+'ms',left:0}) : options.sliderContentBox.stop().animate({left:'-'+options.sliderWidth*(this.newIndex+1)+'px'},options.moveTime);
                    this.showIndex.apply(this,[(++this.newIndex==options.sliderLength ? 0: this.newIndex)]);
                };

                slider.fixFirst = function(){
                    this.newIndex = 0;
                    this.ifTransition ? options.sliderContentBox.css({'transition-duration':'0s',transform:'translate3d(0, 0, 0)'}) : options.sliderContentBox.stop().css({left:'0'});
                    setTimeout(this.showNext.bind(this),null)
                };

                slider.showPrev = function(){
                    this.newIndex==0 ? this.fixLast.call(this) : this.prev.call(this)
                };

                slider.prev = function(){
                    this.ifTransition ? options.sliderContentBox.css({transform:'translate3d(-'+options.sliderWidth*(this.newIndex-1)+'px, 0, 0)','transition':options.moveTime+'ms',left:0}) : options.sliderContentBox.stop().animate({left:'-'+options.sliderWidth*(this.newIndex-1)+'px'},options.moveTime);
                    this.showIndex.apply(this,[--this.newIndex]);
                };

                slider.fixLast = function(){
                    this.newIndex = options.sliderLength;
                    this.ifTransition ? options.sliderContentBox.css({'transition-duration':'0s',transform:'translate3d(-'+options.sliderWidth*options.sliderLength+'px, 0, 0)'}) : options.sliderContentBox.stop().css({left:'-'+options.sliderWidth*options.sliderLength+'px'});
                    setTimeout(this.showPrev.bind(this),null)
                };

                slider.showIndex = function(i){
                    this.selIndex[i].addClass(options.btnCurClass).siblings().removeClass(options.btnCurClass);
                };

                slider.moveIndexSel = function(e){
                    var ele = $(e.currentTarget);
                    var i = Number(ele.attr('selData'));
                    this.showIndex.apply(this,[i]);
                    this.ifTransition ? options.sliderContentBox.css({transform:'translate3d(-'+options.sliderWidth*i+'px, 0, 0)','transition':options.moveTime+'ms'}) : options.sliderContentBox.stop().animate({left:'-'+options.sliderWidth*i+'px'},options.moveTime);
                    this.newIndex = i;
                    return this
                };

                slider.init = function(){
                    this.addBtns.call(this);
                    options.ifArr ? this.ifArrInit.call(this) : $.noop;
                };

                slider.ifArrInit = function(){
                    this.addArr.call(this).addFirstCopy.call(this).bindArr.call(this);
                };

                slider.init.call(slider);

            }
        })(jquery);
    }
});



