var hbServices = angular.module('huabanServices', []);


//获取导航右上角的用户通知(消息+动态)
hbServices.service('getDynamic',['$http','$q',function($http,$q){
    var defer = $q.defer();
    $http.get('../app/cache/nav_dynamic.json').success(function(data,headers){
        defer.resolve(data)
    }).error(function(data,headers){
        defer.reject(data)
    });
    return defer.promise
}]);

//获取导航右上角的用户信息
hbServices.service('getNavUser',['$http','$q',function($http,$q){
    var defer = $q.defer();
    $http.get('../app/cache/nav_user.json').success(function(data,headers){
        defer.resolve(data)
    }).error(function(data,headers){
        defer.reject(data)
    });
    return defer.promise
}]);

//获取第一个pin用户信息
hbServices.service('getUser',['$http','$q',function($http,$q){
    var defer = $q.defer();
    $http.get('../app/cache/user.json').success(function(data,headers){
        defer.resolve(data)
    }).error(function(data,headers){
        defer.reject(data)
    });
    return defer.promise
}]);

//获取pins
hbServices.factory('getPins',['$http','$q',function($http,$q){
    var getPins = {};
    getPins.queryPins = function(){
        var defer = $q.defer();
        $http.get('../app/cache/pins_1.json').success(function(data,headers){
            defer.resolve(data)
        }).error(function(data,headers){
            defer.reject(data)
        });
        return defer.promise
    };
    return getPins
}]);

//获取wrapper宽度
hbServices.factory('getWrapper',function(){
    var getWidth = {};
    getWidth.getWrapWidth = function(){
        var wWidth = $(window).width();
        var wrapperWidth = wWidth>=1500 ? 1496 : wWidth>=1300 ? 1244 :992;
        return wrapperWidth
    };
    return getWidth
});

//判断是否需要加载新的数据
hbServices.factory('checkIfEnd',function(){
    return function(){
        //获取最后一个元素
        var lastPin = $('#waterfall').find('.pin').last();
        //获取最后一个元素距离页面顶端的距离
        var lastPinTop = lastPin[0].offsetTop;
        //获取元素的高度
        var pinHeight = lastPin.height();
        //获取浏览器的高度
        var windowHeight = document.documentElement.clientHeight;
        //获取页面滚动的距离
        var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        //判断滚动距离是否快要贴底则返回true,不是的话返回false
        return scrollTop>lastPinTop+pinHeight-windowHeight;
    }
});

//为window绑定滚动事件回调
hbServices.factory('scrollCheck',['checkIfEnd',function(checkIfEnd){
    return function(ele,callback){
        ele.scroll(function(){
            if(checkIfEnd()){
                callback.apply(this,Array.prototype.slice.call(arguments));
            }
        });
    }
}]);

//通过用户名查找该用户的主页url
hbServices.service('getUserUrl',['$http','$q',function($http,$q){
    var obj = {};
    obj.getUrl = function(username){
        var defer = $q.defer();
        $http.get('../app/cache/url.json').success(function(data,headers){
            defer.resolve(data)
        }).error(function(data,headers){
            defer.reject(data)
        });
        return defer.promise
    };
    return obj
}]);




