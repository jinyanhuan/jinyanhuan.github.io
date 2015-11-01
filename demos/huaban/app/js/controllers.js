var hbCtrls = angular.module('huabanCtrls', ['huabanServices']);

hbCtrls.controller('hbMainCtrl', ['$scope',function($scope) {
    $scope.newTips = "100+"
}]);

//导航右上角用户通知
hbCtrls.controller('msgCtrl', ['getDynamic','$scope',function(getNavMsg,$scope) {
    $scope.loaded = false;
    getNavMsg.then(function(data){
        $.extend($scope,data);
        $scope.loaded = true;
        $scope.all = $scope.msg.all;
        $scope.ifnew = false;
        $scope.ifmsg = true;
        $scope.what = "消息";
        $scope.num = Number($scope.msg.num)+Number($scope.dongtai.num);
        $scope.changeToMsg = function(){
            $scope.ifmsg = true;
            $scope.what = "消息";
            $scope.all = $scope.msg.all;
        };
        $scope.changeToDt= function(){
            $scope.ifmsg = false;
            $scope.what = "动态";
            $scope.all = $scope.dongtai.all;
        }
    });
}]);

//导航右上角用户信息
hbCtrls.controller('userCtrl', ['getNavUser','$scope',function(getNavUser,$scope) {
    getNavUser.then(function(data){
        $.extend($scope,data);
        $scope.ifmenu = false
    });
}]);

//导航左上角菜单
hbCtrls.controller('menuCtrl', ['$scope',function($scope) {
    $scope.ifmenu = false
}]);

//pin用户信息面板
hbCtrls.controller('pUserCtrl', ['$scope','getUser',function($scope,getUser) {
    getUser.then(function(data){
        $.extend($scope,data);
    });
}]);

//pins控制器
hbCtrls.controller('pinsCtrl', ['$scope',function($scope) {
    $scope.pins = [];
}]);

//侧边栏控制器
hbCtrls.controller('sideCtrl', ['$scope',function($scope){
    $scope.ifShowBack = false;
    $scope.ifShowPlus = false;
}]);








