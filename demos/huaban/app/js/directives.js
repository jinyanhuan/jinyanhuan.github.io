var hbDirectives = angular.module('huabanDirectives', ['huabanServices']);

//控制wrapper宽度,随浏览器宽度改变
//没有定义控制器,不存在数据问题,仅仅为了控制宽度
hbDirectives.directive('wrapper', ['getWrapper',function(getWrapper){
    return {
        restrict:'C',
        link:function(scope,iele,iattr,ctrl,trans){
            var setWidth = function(){
                iele.width(getWrapper.getWrapWidth()+'px');
            };
            setWidth();
            $(window).bind('resize',function(){
                setWidth();
            })
        }
    }
}]);


//整个顶部菜单栏
//没有定义控制器,scope是'hbMainCtrl'定义的scope
hbDirectives.directive('barMenu',function(){
    return {
        restrict:'EA',
        replace:true,
        templateUrl:'../app/tpls/menu_bar.html'
    }
});

//左上角的分类
//定义控制器menuCtrl,scope是'menuCtrl'定义的scope
hbDirectives.directive('navMenu', ['$timeout',function($timeout){
    return {
        restrict:'EA',
        replace:true,
        templateUrl:'../app/tpls/nav_menu.html',
        link:function(scope,iele,iattr,ctrl,trans){
            scope.showMenu = function(e){
                e.preventDefault();
                e.stopPropagation();
                $timeout.cancel(scope.t);
                scope.t = $timeout(function(){
                    scope.$apply(scope.ifmenu = true)
                },300)
            };
            scope.hideMenu = function(e){
                e.preventDefault();
                e.stopPropagation();
                $timeout.cancel(scope.t);
                scope.t = $timeout(function(){
                    scope.$apply(scope.ifmenu = false)
                },300)
            }
        }
    }
}]);

//右上角的用户信息
//定义控制器userCtrl,scope是'userCtrl'定义的scope
hbDirectives.directive('navUser', ['$timeout',function($timeout){
    return {
        restrict:'EA',
        replace:true,
        templateUrl:'../app/tpls/nav_user.html',
        link:function(scope,iele,iattr,ctrl,trans){
            scope.showMenu = function(e){
                e.preventDefault();
                e.stopPropagation();
                $timeout.cancel(scope.t);
                scope.t = $timeout(function(){
                    scope.$apply(scope.ifmenu = true)
                },300)
            };
            scope.hideMenu = function(e){
                e.preventDefault();
                e.stopPropagation();
                $timeout.cancel(scope.t);
                scope.t = $timeout(function(){
                    scope.$apply(scope.ifmenu = false)
                },300)
            };
        }
    }
}]);

//右上角的通知
//定义控制器msgCtrl,scope是'msgCtrl'定义的scope
hbDirectives.directive('navMessage', function(){
    return {
        restrict:'EA',
        replace:true,
        templateUrl:'../app/tpls/nav_message.html',
        link:function(scope,iele,iattr,ctrl,trans){
            scope.toggleMenu = function(e){
                e.preventDefault();
                e.stopPropagation();
                scope.$apply(scope.ifnew = !scope.ifnew)
            };
        }
    }
});

//新采集通知
//没有定义控制器,scope是'hbMainCtrl'定义的scope
hbDirectives.directive('newTip', ['$timeout',function($timeout){
    return {
        restrict:'EA',
        replace:true,
        templateUrl:'../app/tpls/new_tip.html',
        link:function(scope,iele,iattr,ctrl,trans){
            iele.css({position: 'absolute', zIndex:'999999',textAlign: 'center','marginLeft':'-81px'});
            $timeout(function(){
                iele.addClass('show')
            },100)
        }
    }
}]);

//主体瀑布流
//定义控制器pinsCtrl,scope是'pinsCtrl'定义的scope
hbDirectives.directive('waterfall', ['$rootScope','getPins','getWrapper','scrollCheck','$timeout',function($rootScope,getPins,getWrapper,scrollCheck,$timeout){
    return {
        restrict: 'EA',
        replace: true,
        templateUrl: '../app/tpls/waterfall.html',
        controller:function(){
            this.movePins = function(scope,index,heightInit,curLeft){
                var diff = scope.pinEles.eq(index).height()-heightInit;
                $.each(scope.pinEles,function(k,n){
                    if ($(n).position().left == curLeft && k>index) {
                        nTop = $(n).position().top;
                        $(n).css({"top":nTop+diff+'px'});
                    }
                });
                scope.getTotalHeight();
            }
        },
        link:function(scope,iele){
            //播放gif的函数
            scope.toggleGif = function(e,i){
                e.preventDefault();
                var srcParse = scope.pins[i].picUrl.split('.');
                if(srcParse[1] !== "gif"){
                    scope.pins[i].picUrl = srcParse[0]+'g.gif';
                    scope.pins[i].ifGifStop = true;
                }
                else {
                    scope.pins[i].picUrl = srcParse[0].substr(0,srcParse[0].length-1)+'.jpg';
                    scope.pins[i].ifGifStop = false;
                }
                e.stopPropagation();
            };

            //滚动实现瀑布流加载
            scrollCheck(function(){
                //判断现有数据有多少,如果已经超过了100条,就不加载了.
                if(scope.pins.length>=100){
                    $rootScope.ifLoadEnd = true;
                    $rootScope.$digest();
                    return false;
                }

                getPins.queryPins().then(function(data){
                    renderPins(data)
                })
            });

            //限制长图的高度
            function searchLong(){
                for(var i=0 ; i< scope.pinEles.length; i++ ){
                    if(scope.pinEles.eq(i).find('img').height()>800){
                        scope.$apply(function(){scope.pins[i-1].ifLong = true});
                    }
                }
            }

            //对pins进行排列定位
            function createPosition(wrapper){
                var aWidth = 252 ,
                    minIndex = minHeight = maxHeight = nowLeft = 0,
                    columns = Math.floor((wrapper+16)/aWidth) < 4 ? 4 : Math.floor((wrapper+16)/aWidth);
                heightArr = new Array(columns);
                $.each(heightArr,function(i){heightArr[i] = 0});

                for(var i=0; i<scope.pinEles.length; i++){
                    setPosition(i);
                }

                function setPosition(i){
                    var nowLeft = minIndex*aWidth;
                    var nowTop = minHeight;
                    scope.pinEles.eq(i).css({'left':nowLeft+'px','top':nowTop+'px'});
                    heightArr[minIndex] += scope.pinEles.eq(i).innerHeight()+16;
                    resetMin();
                }

                function resetMin(){
                    minHeight = heightArr[minIndex];
                    $.each(heightArr,function(i,n){
                        if(n < minHeight) {
                            minHeight = heightArr[i];
                            minIndex = i
                        }
                    });
                }
            }

            //获取瀑布流区域的高度(这个函数存在scope里,因为在controller属性里也用到了这个函数)
            scope.getTotalHeight = function(){
                $(iele).height(scope.pinEles.last().height() + scope.pinEles.last()[0].offsetTop + 30);
            };

            //重置pins元素(获取pins元素,然后searchLong,createPosition,getTotalHeight三步操作的结合)
            function renderPins(data){
                scope.pins.push.apply(scope.pins,data);
                function reset(wrapper){
                    scope.pinEles = $(iele).find('.pin');       //获取全部pins
                    searchLong();                               //限制长图的高度
                    createPosition(wrapper);                    //对pins进行排列定位
                    scope.getTotalHeight();                           //获取瀑布流区域的高度
                }

                //元素渲染完成后根据宽度进行重置
                $timeout(function(){
                    reset(getWrapper.getWrapWidth());
                });

                //改变大小的时候,根据宽度重新排列定位pins
                $(window).bind('resize',function(){
                    createPosition(getWrapper.getWrapWidth());
                    scope.getTotalHeight();
                })
            }

            //初始化获取数据并渲染
            getPins.queryPins().then(function(data){
                renderPins(data)
            });
        }
    }
}]);

//添加评论部分
//这个scope,是ng-repeat迭代的时候里面的每个scope,这个scope在整个迭代里都可以使用,而不是只有comment指令里可以使用
hbDirectives.directive('comment',['$timeout','getUserUrl',function($timeout,getUserUrl){
    return {
        restrict: 'EA',
        replace: true,
        templateUrl: '../app/tpls/comment.html',
        require:'^waterfall',
        link:function(scope,iele,attrs,ctrl){
            var curLeft;

            scope.focusChange = function(e,flag){
                e.preventDefault();
                e.stopPropagation();
                var heightInit = getHeight();
                scope.pin.showComBtn = flag;
                $timeout(ctrl.movePins.bind(ctrl,scope,scope.$index+1,heightInit,curLeft));
            };

            //点击展开评论框
            scope.comment = function(e,toAuthor){
                e.preventDefault();
                e.stopPropagation();
                if(toAuthor) {
                    scope.comcontent = '@' + toAuthor + ' ';
                }
                curLeft = scope.pinEles.eq(scope.$index+1).position().left;
                scope.pin.showComment = true;
                var heightInit = getHeight();
                $timeout(function(){
                    ctrl.movePins(scope,scope.$index+1,heightInit,curLeft);
                    getFoucs();
                })
            };

            //发表评论
            scope.addComment = function(e,valid){
                e.preventDefault();
                e.stopPropagation();
                if(!valid){
                    loseFoucs();
                    return
                }
                if(!scope.pin.comments){
                    scope.pin.comments = [];
                }
                var newComment = {
                    "headUrl": "imgs/pins/cb12280d100e07d620be64a4834d44405139b584682-2ngcej_sq75sf.jpg",
                    "authorName": "黑丝小白兔",
                    "authorUrl": "http://huaban.com/a5635268/"
                };
                if(scope.comcontent.indexOf('@') != -1){
                    var arr1 = scope.comcontent.split('@');
                    var arr2 = arr1[1].split(' ');
                    newComment.toWho = arr2.shift();
                    newComment.content = arr2.join(' ');
                    //通过toWho用户名查找该用户的主页url
                    getUserUrl.getUrl(newComment.toWho).then(function(data){
                        newComment.toUrl = data.toUrl;
                        scope.pin.comments.push(newComment);
                        hideComment();
                    });
                }
                else {
                    newComment.content = scope.comcontent;
                    scope.pin.comments.push(newComment);
                    hideComment();
                }
            };

            //评论发表成功以后收起评论框
            function hideComment(){
                scope.pin.showComment = false;
                var heightInit = getHeight();
                $timeout(function(){
                    ctrl.movePins(scope,scope.$index+1,heightInit,curLeft);
                })
            }

            function getHeight(){
                return scope.pinEles.eq(scope.$index+1).height();
            }

            function getFoucs(){
                $(iele).find('textarea').focus();
            }

            function loseFoucs(){
                $(iele).find('textarea').blur();
            }
        }
    }
}]);

//评论部分
//这个scope,是ng-repeat迭代的时候里面的每个scope
hbDirectives.directive('comments',function(){
    return {
        restrict:'EA',
        replace:true,
        templateUrl: '../app/tpls/comments.html'
    }
});


//pin用户信息面板
//定义控制器pUserCtrl,scope是'pUserCtrl'定义的scope
hbDirectives.directive('userMain', function(){
    return {
        restrict: 'EA',
        replace: true,
        templateUrl: '../app/tpls/user_main.html'
    }
});

//加载完毕底栏
//没有定义控制器,scope是'hbMainCtrl'定义的scope
hbDirectives.directive('loadEnd', function(){
    return {
        restrict: 'EA',
        replace: true,
        templateUrl: '../app/tpls/load_end.html'
    }
});

//侧边栏按钮
//定义控制器sideCtrl,scope是'sideCtrl'定义的scope
hbDirectives.directive('elevatorItem',['$timeout',function($timeout){
    return {
        restrict: 'EA',
        replace: true,
        templateUrl: '../app/tpls/elevator_item.html',
        link: function(scope,iele){
            $(window).bind('scroll',function(){
                scope.$digest(scope.ifShowBack = (document.documentElement.scrollTop || document.body.scrollTop >= 150));
            });
            scope.goTop = function(){
                $('html,body').animate({scrollTop:0});
            };
            scope.showPlus = function(){
                if(scope.t) $timeout.cancel(scope.t);
                scope.ifShowPlus = true;
            };
            scope.hidePlus = function(){
                scope.t = $timeout(function(){
                    scope.ifShowPlus = false;
                },400)
            };
        }
    }
}]);


