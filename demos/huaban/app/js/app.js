var hbApp = angular.module('huaban', ['ui.router', 'huabanCtrls', 'huabanDirectives','huabanFilters', 'huabanServices']);

hbApp.config(function($stateProvider,$locationProvider,$urlRouterProvider){
    $locationProvider.html5Mode(true).hashPrefix('!');

    $stateProvider.state('pin',{
        abstract:true,
        url:'/pins',
        templateUrl:'tpls/pin/pin_main.html',
        onEnter:function(){
            document.documentElement.style.overflow='hidden';
        }
    }).state('pin.detail',{
        url:'/:pinId/',
        views:{
            'image-piece@pin':{
                templateUrl:'tpls/pin/image_piece.html'
            },
            'info-piece@pin':{
                templateUrl:'tpls/pin/info_piece.html'
            },
            'repin-info-piece@pin':{
                templateUrl:'tpls/pin/repin_info_piece.html'
            },
            'board-piece@pin':{
                templateUrl:'tpls/pin/board_piece.html'
            },
            'siblings-piece@pin':{
                templateUrl:'tpls/pin/siblings_piece.html'
            },
            'related-boards@pin':{
                templateUrl:'tpls/pin/related_boards.html'
            },
            'recommend-pins@pin':{
                templateUrl:'tpls/pin/recommend_pins.html'
            }
        }
    });
    $stateProvider.state('index',{
        url:'/',
        template:'',
        onEnter:function(){
            document.documentElement.style.overflow='auto';
        }
    });

    $urlRouterProvider.otherwise('/')
});


