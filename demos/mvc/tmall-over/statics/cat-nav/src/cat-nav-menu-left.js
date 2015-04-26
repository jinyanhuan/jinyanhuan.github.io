define(function(require, exports, module) {
    var $ = require('jquery');
    var template = require('template');

    module.exports = catNavMenuLeft;

    function catNavMenuLeft(container) {
        this.container = $(container);
    }

    catNavMenuLeft.prototype.render = function(){
        this.init();
    };

    catNavMenuLeft.prototype.init = function(){
        var that = this.container;
        $.ajax({
            type:'GET',
            url:'../cache/cat-nav/data_nav_left.json',
            dataType:'json',
            success:function(data){
                var module = template('tmpl-left-menu',data);
                that.prepend($(module));
                var CatNavMenuAim = require('./cat-nav-menu');
                var catNavMenuAim = new CatNavMenuAim('.left-menu','.cat-slide-content');
                catNavMenuAim.render();
            },
            error:function(err){
                console.log(err)
            }
        })

    };
});

