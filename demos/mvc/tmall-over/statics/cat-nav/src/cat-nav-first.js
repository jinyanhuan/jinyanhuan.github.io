define(function(require, exports, module) {
    var $ = require('jquery');
    var template = require('template');
    require('css3-supports')($);

    module.exports = catNavFirst;

    function catNavFirst(container) {
        this.container = $(container);
    }

    catNavFirst.prototype.render = function(){
        this.init();
    };

    catNavFirst.prototype.init = function(){
        var that = this.container;
        $.ajax({
            type:'GET',
            url:'../cache/cat-nav/data_nav_1.json',
            dataType:'json',
            success:function(data){
                var module = template('tmpl-cat-nav-first',data);
                that.append($(module));
                var CatNavSlide = require('./cat-nav-slide');
                var catNavSlide = new CatNavSlide('#J_MarketBannerSlide',{btnUlClass:'market-slide-nav',btnCurClass:'market-nav-selected',ifArr:true});
                catNavSlide.render();
            },
            error:function(err){
                console.log(err)
            }
        })
    };
});

