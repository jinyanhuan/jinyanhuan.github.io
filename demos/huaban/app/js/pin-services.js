var hbDetailServices = angular.module('huabanDetailServices', []);

//获取pins
hbDetailServices.factory('getCellPins',['$http','$q','$stateParams',function($http,$q,$stateParams){
    var getCellPins = {};
    getCellPins.queryPins = function(){
        var defer = $q.defer();
        $http.get('../app/cache/detail/boardPiece/board-piece_' + $stateParams.pinId + '.json').success(function(data,headers){
            defer.resolve(data)
        }).error(function(data,headers){
            defer.reject(data)
        });
        return defer.promise
    };
    return getCellPins
}]);

//判断是否需要加载新的数据
hbDetailServices.factory('checkIfEndCell',function(){
    return function(){
        //获取最后一个元素
        var lastPin = $('#board_pins_waterfall').find('.cell').last();
        //获取最后一个元素距离框顶端的距离
        var lastPinTop = parseInt(lastPin[0].style.top);
        //获取元素的高度
        var pinHeight = lastPin.height();
        //获取小瀑布流区域的高度
        var windowHeight = 360;
        //获取小瀑布流区域滚动的距离
        var scrollTop = $('.cst-scrollbar').scrollTop();
        //判断滚动距离是否快要贴底则返回true,不是的话返回false
        return scrollTop>=lastPinTop+pinHeight-windowHeight;
    }
});

//绑定滚动事件回调
hbDetailServices.factory('scrollCheckCell',['checkIfEndCell',function(checkIfEndCell){
    return function(ele,callback){
        ele.scroll(function(){
            if(checkIfEndCell()){
                callback.apply(this,Array.prototype.slice.call(arguments));
            }
        });
    }
}]);
