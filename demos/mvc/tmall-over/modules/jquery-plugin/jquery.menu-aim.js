define(function(require, exports, module){
    return function(jquery){

        (function ($) {
            $.fn.menuAim = function (opts) {
                this.each(function () {
                    init.call(this, opts);
                });
                return this;
            };

            function init(opts) {
                var obj = {
                    menu: $(this),
                    wholeMenu: $(this),
                    rowSelector: 'li',
                    direct: 'right',
                    extensionRegion: 75,
                    active: $.noop,
                    deActive: $.noop,
                    leaveMenuHide: true,
                    activeRow: null,
                    delay: 300,
                    boxCorner: {}
                };
                var options = $.extend(obj, opts);
                options.menuPosition = options.menu.offset();
                options.boxCorner.leftTop = {x: options.menuPosition.left, y: options.menuPosition.top - options.extensionRegion >= 0 ? menuPosition.top - options.extensionRegion : 0};
                options.boxCorner.leftBottom = {x: options.menuPosition.left, y: options.menuPosition.top + options.menu.height() + options.extensionRegion};
                options.boxCorner.rightTop = {x: options.menuPosition.left + options.menu.width(), y: options.boxCorner.leftTop.y};
                options.boxCorner.rightBottom = {x: options.boxCorner.rightTop.x, y: options.boxCorner.leftBottom.y};

                var menuAim = {};
                var menuAimAttr = {
                    mouseSite: [],
                    timeOut: null,
                    latestLoc: {x: null, y: null},
                    ifOut: null
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

                        if (row == options.activeRow) return

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
                    }
                };

                $.extend(menuAim, menuAimAttr);
                $.extend(menuAim, menuAimFun);

                $(document).bind('mousemove', $.proxy(menuAim.mouseM, menuAim));
                options.wholeMenu.bind('mouseleave', $.proxy(menuAim.mouseLeaveMenu, menuAim));
                options.menu
                        .find(options.rowSelector)
                        .bind({
                            'mouseenter': $.proxy(menuAim.moveEnterRow, menuAim),
                            'mouseleave': $.proxy(menuAim.moveLeaveRow, menuAim)
                        })

            }
        })(jquery)

    }
});

