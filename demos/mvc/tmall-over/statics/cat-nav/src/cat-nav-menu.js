define(function(require, exports, module) {
    var $ = require('jquery');
    require('menu-aim')($);
    require('css3-supports')($);
    var template = require('template');

    var CatNavSlide = require('./cat-nav-slide');

    module.exports = CatNavMenuAim;

    function CatNavMenuAim(Menu,MenuContent) {
        this.menu = $(Menu);
        this.menuContent = $(MenuContent);
    }

    CatNavMenuAim.prototype.render = function(){
        this.init();
    };
    CatNavMenuAim.prototype.init = function(){
        this.menu.menuAim({
            active:this.activate.bind(this),
            deActive:this.deactivate.bind(this),
            activeRow:this.menu.find('li').eq(0),
            leaveMenuHide:false
        });
        this.menu.find('.cat-nav').bind('mouseenter',this.loadSubMenu.bind(this));
    };
    CatNavMenuAim.prototype.activate = function(row){
        $(row).removeClass('cat-nav').addClass('cat-nav-selected');
        var menuId = $(row).attr('data-menu');
        this.menuContent.find('#'+menuId).show();
    };
    CatNavMenuAim.prototype.deactivate = function(row){
        $(row).removeClass('cat-nav-selected').addClass('cat-nav');
        var menuId = $(row).attr('data-menu');
        this.menuContent.find('#'+menuId).hide();
    };
    CatNavMenuAim.prototype.loadSubMenu = function(e){
        var currentTarget = e.currentTarget;
        if($(currentTarget).hasClass('to-be-load')){
            var menuId = $(currentTarget).attr('data-menu');
            var thisIndex = Number(menuId.split('-')[2]);
            var content = this.menuContent.find('#'+menuId).find('.j_LazyloadCatPanel');
            content.html(template('tmpl-loading'));
            var that = $(currentTarget);
            $.ajax({
                type:'GET',
                url:'../cache/cat-nav/data_nav_'+thisIndex+'.json',    //路径都是相对于seajs的config里设置的
                dataType:'json',
                success:function(data){
                    var module = template('tmpl-cat-nav-pannel',data);
                    content.empty().prepend($(module));
                    content.find('.module').css({opacity:0}).animate({opacity:1},500);
                    content.find('.cat-pannel').addClass('cat-pannel-'+(thisIndex-1)+'-content');
                    var sliderLogo = content.find('.j_CatBrandSlide');
                    var catNavSlide = new CatNavSlide(sliderLogo,{btnUlClass:'cat-brand-nav',btnCurClass:'cat-brand-selected',moveTime:300});
                    catNavSlide.render();
                    that.removeClass('to-be-load')
                },
                error:function(err){
                    console.log(err)
                }
            })
        }
    }
});

