(function ($) {

    $.fn.menuAim = function (opts) {
        this.each(function () {
            init.call(this, opts);
        });
        return this;
    };

    function init(opts) {
        var obj = {
            menu: $(this),                    //调用此插件的dom对象
            wholeMenu: $(this),               //整块菜单
            rowSelector: 'li',                //选项的选择器
            direct: 'right',                  //子菜单展开在右侧还是左侧
            extensionRegion: 75,              //上下超出区域的大小
            active: $.noop,                   //触发某项的函数
            deActive: $.noop,                 //取消某项的函数
            leaveMenuHide: true,              //离开菜单是否隐藏所有子菜单
            activeRow: null,                  //当前显示项(rowSelector中的当前项)
            delay: 300,                       //延迟时间
            interTime: 5000,                  //自动切换的间隔时间
            ifAuto: false,                    //是否自动切换
            boxCorner: {}                     //记录菜单四个角的位置
        };
        var options = $.extend(obj, opts);

        options.wholeMenu = $(options.wholeMenu);
        options.menuPosition = options.menu.offset();
        options.boxCorner.leftTop = {x: options.menuPosition.left, y: options.menuPosition.top - options.extensionRegion >= 0 ? options.menuPosition.top - options.extensionRegion : 0};
        options.boxCorner.leftBottom = {x: options.menuPosition.left, y: options.menuPosition.top + options.menu.height() + options.extensionRegion};
        options.boxCorner.rightTop = {x: options.menuPosition.left + options.menu.width(), y: options.boxCorner.leftTop.y};
        options.boxCorner.rightBottom = {x: options.boxCorner.rightTop.x, y: options.boxCorner.leftBottom.y};
        options.rowSelector = options.menu.find(options.rowSelector);
        options.length = options.rowSelector.length;


        var menuAim = {};
        var menuAimAttr = {
            mouseSite: [],                    //存放鼠标位置(记录3次)
            timeOut: null,                    //延迟执行的timeout
            latestLoc: {x: null, y: null},    //记录上一次移动,鼠标的最后的位置
            ifOut: null,                      //鼠标移动的角度是否真正需要进入另外的菜单
            interval: null                    //自动切换的interval
        };

        var menuAimFun = {
            mouseM: function (e) {
                this.mouseSite.push({x: e.pageX, y: e.pageY});
                return this.mouseSite.length > 3 ? this.mouseSite.shift() : $.noop, this
            },
            moveEnterRow: function (e) {
                this.delTimeout.call(this);
                this.ifEnterNow.apply(this, [$(e.currentTarget)]);
            },
            delTimeout: function () {
                if (this.timeOut) {
                    clearTimeout(this.timeOut);
                    this.timeOut = null
                }
            },
            ifEnterNow: function (row) {
                this.delay = this.delayTime.call(this);
                if (this.delay) {
                    this.timeOut = setTimeout(
                            this.ifEnterNow.bind(this, row)
                            , this.delay)
                }
                else {
                    this.active.apply(this, [row])
                }
            },
            delayTime: function () {
                if (!options.activeRow) return 0;
                var firstLoc = this.mouseSite[0];
                var lastLoc = this.mouseSite[this.mouseSite.length - 1];
                if (firstLoc.x < options.boxCorner.leftTop.x || firstLoc.x > options.boxCorner.rightTop.x || firstLoc.y < options.boxCorner.leftTop.y || firstLoc.y > options.boxCorner.leftBottom.y) return 0;
                if (this.latestLoc.x == lastLoc.x && this.latestLoc.y == lastLoc.y) {
                    return 0;
                }
                switch (options.direct) {
                    case 'right':
                        this.ifOut = this.triangleArea.apply(this, [firstLoc, lastLoc, options.boxCorner.rightTop, options.boxCorner.rightBottom]);
                        break;
                    case 'left':
                        this.ifOut = this.triangleArea.apply(this, [firstLoc, lastLoc, options.boxCorner.leftTop, options.boxCorner.leftBottom]);
                        break;
                    case 'top':
                        this.ifOut = this.triangleArea.apply(this, [firstLoc, lastLoc, options.boxCorner.leftTop, options.boxCorner.rightTop]);
                        break;
                    case 'bottom':
                        this.ifOut = this.triangleArea.apply(this, [firstLoc, lastLoc, options.boxCorner.leftBottom, options.boxCorner.rightBottom]);
                        break;
                    default:
                        break;
                }
                if (this.ifOut) return 0;
                if (!this.ifOut) {
                    this.latestLoc.x = lastLoc.x;
                    this.latestLoc.y = lastLoc.y;
                    return options.delay;
                }
                else {
                    return 0
                }
            },
            slope: function (a, b) {
                return Math.abs((a.y - b.y) / (a.x - b.x))
            },
            triangleArea: function (angleMouse_1, angleMouse_2, angle_1, angle_2) {
                return (this.slope(angleMouse_1, angle_1) < this.slope(angleMouse_2, angle_1) && this.slope(angleMouse_1, angle_2) < this.slope(angleMouse_2, angle_2)) ? 0 : 1;
            },
            active: function (row) {
                this.delTimeout.call(this);
                if ((row[0] == options.activeRow[0])) return

                options.deActive(options.activeRow);
                options.active(row);
                options.activeRow = row
            },
            moveLeaveRow: function () {
                this.delTimeout.call(this);
            },
            mouseLeaveMenu: function () {
                this.delTimeout.call(this);
                if (options.leaveMenuHide && options.activeRow) {
                    options.deActive(options.activeRow);
                    options.activeRow = null
                }
                if(options.ifAuto) {
                    menuAim.interval = setInterval($.proxy(menuAim.activeNext, menuAim),options.interTime);
                }
            },
            nextRow: function(){
                var indexNow = options.activeRow.index();
                var indexNext = indexNow == options.length-1 ? 0 : ++indexNow;
                return options.rowSelector.eq(indexNext);
            },
            activeNext: function(){
                this.delTimeout.call(this);
                options.deActive(options.activeRow);
                var rowNext = this.nextRow.call(this);
                options.active(rowNext);
                options.activeRow = rowNext
            },
            clearInter: function(){
                clearInterval(this.interval);
                this.interval = null
            }
        };

        $.extend(menuAim, menuAimAttr);
        $.extend(menuAim, menuAimFun);

        $(document).bind('mousemove', $.proxy(menuAim.mouseM, menuAim));
        options.rowSelector
                .bind({
                    'mouseenter': $.proxy(menuAim.moveEnterRow, menuAim),
                    'mouseleave': $.proxy(menuAim.moveLeaveRow, menuAim)
                });
        if(options.ifAuto) {
            menuAim.interval = setInterval($.proxy(menuAim.activeNext, menuAim),options.interTime);
            options.wholeMenu.bind('mouseenter',$.proxy(menuAim.clearInter, menuAim))
        }
        options.wholeMenu.bind('mouseleave', $.proxy(menuAim.mouseLeaveMenu, menuAim));

    }
})(jQuery);

