define("tmall/cat-nav/1.0.0/main-debug", [ "ie7Patch-debug", "./cat-nav-menu-debug", "jquery-debug", "menu-aim-debug", "css3-supports-debug", "template-debug", "./cat-nav-slide-debug", "slider-tpl-debug" ], function(require) {
    require("ie7Patch-debug")();
    var CatNavMenuAim = require("./cat-nav-menu-debug");
    var catNavMenuAim = new CatNavMenuAim(".left-menu", ".cat-slide-content");
    catNavMenuAim.render();
    var CatNavSlide = require("./cat-nav-slide-debug");
    var catNavSlide = new CatNavSlide("#J_MarketBannerSlide", {
        btnUlClass: "market-slide-nav",
        btnCurClass: "market-nav-selected",
        ifArr: true
    });
    catNavSlide.render();
});

define("tmall/cat-nav/1.0.0/cat-nav-menu-debug", [ "jquery-debug", "menu-aim-debug", "css3-supports-debug", "template-debug", "tmall/cat-nav/1.0.0/cat-nav-slide-debug", "slider-tpl-debug" ], function(require, exports, module) {
    var $ = require("jquery-debug");
    require("menu-aim-debug")($);
    require("css3-supports-debug")($);
    var template = require("template-debug");
    var CatNavSlide = require("tmall/cat-nav/1.0.0/cat-nav-slide-debug");
    module.exports = CatNavMenuAim;
    function CatNavMenuAim(Menu, MenuContent) {
        this.menu = $(Menu);
        this.menuContent = $(MenuContent);
    }
    CatNavMenuAim.prototype.render = function() {
        this.init();
    };
    CatNavMenuAim.prototype.init = function() {
        this.menu.menuAim({
            active: this.activate.bind(this),
            deActive: this.deactivate.bind(this),
            activeRow: this.menu.find("li").eq(0),
            leaveMenuHide: false
        });
        this.menu.find(".cat-nav").bind("mouseenter", this.loadSubMenu.bind(this));
    };
    CatNavMenuAim.prototype.activate = function(row) {
        $(row).removeClass("cat-nav").addClass("cat-nav-selected");
        var menuId = $(row).attr("data-menu");
        this.menuContent.find("#" + menuId).show();
    };
    CatNavMenuAim.prototype.deactivate = function(row) {
        $(row).removeClass("cat-nav-selected").addClass("cat-nav");
        var menuId = $(row).attr("data-menu");
        this.menuContent.find("#" + menuId).hide();
    };
    CatNavMenuAim.prototype.loadSubMenu = function(e) {
        var currentTarget = e.currentTarget;
        if ($(currentTarget).hasClass("to-be-load")) {
            var menuId = $(currentTarget).attr("data-menu");
            var thisIndex = Number(menuId.split("-")[2]);
            var content = this.menuContent.find("#" + menuId).find(".j_LazyloadCatPanel");
            content.html(template("tmpl-loading"));
            var that = $(currentTarget);
            $.ajax({
                type: "GET",
                url: "../cache/cat-nav/data_nav_" + thisIndex + ".json",
                //路径都是相对于seajs的config里设置的
                dataType: "json",
                success: function(data) {
                    var module = template("tmpl-cat-nav-pannel", data);
                    content.empty().prepend($(module));
                    content.find(".module").css({
                        opacity: 0
                    }).animate({
                        opacity: 1
                    }, 500);
                    content.find(".cat-pannel").addClass("cat-pannel-" + (thisIndex - 1) + "-content");
                    var sliderLogo = content.find(".j_CatBrandSlide");
                    var catNavSlide = new CatNavSlide(sliderLogo, {
                        btnUlClass: "cat-brand-nav",
                        btnCurClass: "cat-brand-selected",
                        moveTime: 300
                    });
                    catNavSlide.render();
                    that.removeClass("to-be-load");
                },
                error: function(err) {
                    console.log(err);
                }
            });
        }
    };
});

define("tmall/cat-nav/1.0.0/cat-nav-slide-debug", [ "jquery-debug", "slider-tpl-debug" ], function(require, exports, module) {
    var $ = require("jquery-debug");
    require("slider-tpl-debug")($);
    module.exports = CatNavSlider;
    function CatNavSlider(ele, options) {
        this.silder = $(ele);
        this.data = options;
    }
    CatNavSlider.prototype.render = function() {
        this.init();
    };
    CatNavSlider.prototype.init = function() {
        this.silder.sliderTpl(this.data);
    };
});
