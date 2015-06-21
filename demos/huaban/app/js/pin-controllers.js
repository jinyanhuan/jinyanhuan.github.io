var hbDeteilCtrls = angular.module('huabanDetailCtrls', []);

hbDeteilCtrls.controller('imagePiece',['$scope','$stateParams','imgPiece',function($scope,$stateParams,imgPiece){
    $.extend($scope,imgPiece.data);
}]);

hbDeteilCtrls.controller('infoPiece',['$scope','$stateParams','ifoPiece',function($scope,$stateParams,ifoPiece){
    $.extend($scope,ifoPiece.data);
}]);

hbDeteilCtrls.controller('repinInfoPiece',['$scope','$stateParams','reInfoPiece',function($scope,$stateParams,reInfoPiece){
    $.extend($scope,reInfoPiece.data);
}]);

