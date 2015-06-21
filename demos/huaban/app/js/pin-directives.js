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
})
