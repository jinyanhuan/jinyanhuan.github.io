var hbDetailDirectives = angular.module('huabanDetailDirectives', []);
hbDetailDirectives.directive('share',function($timeout){
    return {
        restrict :'EA',
        replace : true,
        scope:{},
        templateUrl : "../app/tpls/pin/image_piece/huaban_share.html",
        link:function(scope,iele,iattr){
            scope.ifShowMenu = false
            scope.showMenu = function(){
                $timeout.cancel(scope.t2);
                scope.t1 = $timeout(function(){
                    scope.ifShowMenu = true
                },500)
            };
            scope.hideMenu = function(){
                $timeout.cancel(scope.t1);
                scope.t2 = $timeout(function(){
                    scope.ifShowMenu = false
                },500)
            };
        }
    }
});
hbDetailDirectives.directive('infoPieceComment',function(){
    return {
        restrict : 'EA',
        replace : false,
        link : function(scope,iele,iattr){
            scope.ifShowBtn = false;
            scope.getFocus = function(e){
                scope.ifShowBtn = true;
                e.preventDefault()
            }
        }
    }
});
hbDetailDirectives.directive('smallwaterfall',['scrollCheckCell','getCellPins','$timeout',function(scrollCheckCell,getCellPins,$timeout){
    return {
        restrict:'EA',
        link:function(scope,iele){

            //滚动实现瀑布流加载
            scrollCheckCell($(iele).find('.cst-scrollbar'),function(){

                //判断现有数据有多少,如果已经超过了100条,就不加载了.
                if(scope.pieces.length>=100){
                    return false;
                }

                getCellPins.queryPins().then(function(data){
                    renderPins(data)
                })
            });

            //限制长图的高度
            function searchLong(){
                for(var i=0 ; i< scope.pieces.length; i++ ){
                    if(scope.pieces[i].height>150){
                        scope.$apply(function(){scope.pieces[i].ifLong = true});
                    }
                }
            }

            //对pins进行排列定位
            function createPosition(){
                var aWidth = 80 ,
                    minIndex = minHeight = maxHeight = nowLeft = 0,
                    columns = 3;
                heightArr = new Array(columns);
                $.each(heightArr,function(i){heightArr[i] = 0});

                for(var i=0; i<scope.pinEles.length; i++){
                    setPosition(i);
                }

                function setPosition(i){
                    var nowLeft = minIndex*aWidth;
                    var nowTop = minHeight;
                    scope.pinEles.eq(i).css({'left':nowLeft+'px','top':nowTop+'px'});
                    heightArr[minIndex] += scope.pinEles.eq(i).innerHeight()+2;
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
                $(iele).find('#board_pins_waterfall').height(scope.pinEles.last().height() + scope.pinEles.last()[0].offsetTop);
            };

            //重置pins元素(获取pins元素,然后searchLong,createPosition,getTotalHeight三步操作的结合)
            function renderPins(data){
                if(data) scope.pieces.push.apply(scope.pieces,data.pieces);
                function reset(){
                    scope.pinEles = $(iele).find('.cell');      //获取全部小pins
                    searchLong();                               //限制长图的高度
                    createPosition();                           //对pins进行排列定位
                    scope.getTotalHeight();                     //获取瀑布流区域的高度
                }
                $timeout(function(){
                    reset();
                });
            }

            renderPins()
        }
    }
}])
