define(function(require, exports, module) {
    var $ = require('jquery');
    require('slider-tpl')($);
    module.exports = CatNavSlider;
    function CatNavSlider(ele,options) {
        this.silder = $(ele);
        this.data = options
    }
    CatNavSlider.prototype.render = function(){
        this.init();
    };
    CatNavSlider.prototype.init = function(){
        this.silder.sliderTpl(this.data)
    }
});

