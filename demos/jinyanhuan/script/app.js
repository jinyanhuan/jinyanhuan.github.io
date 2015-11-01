/**
 * Created by code_bunny on 15/8/9.
 */
var flightApp = angular.module('flight',['ui.router'])

flightApp.config(function($stateProvider,$locationProvider,$urlRouterProvider){
    $locationProvider.html5Mode(true).hashPrefix('!');

    $urlRouterProvider.when('/','/all');

    $stateProvider.state('index',{
        url:'/:date',
        templateUrl:'tpls/flights.html',
        resolve:{
            'filterFlights':function($http,$stateParams){
                return $http({
                    method:'get',
                    url:'cache/flights_'+($stateParams.date || 'all')+'.json'
                });
            }
        },
        controller: 'fligntsControll'
    });
});

flightApp.controller('mainControll',function($rootScope,$scope,$timeout){
    $scope.dates = ['all','2012-03-15','2012-03-16','2012-03-17','2012-03-18','2012-03-19','2012-03-20','2012-03-21'];
    $rootScope.cur = 'all';
    $rootScope.$on('$stateChangeSuccess',function(event,toState,toParams,fromState,fromParams){
        $rootScope.cur = toParams.date;
    });
    $rootScope.$on('$viewContentLoaded',function(){
        $timeout(function(){
            $('[data-toggle="tooltip"]').tooltip();
        },0)
    })
});

flightApp.controller('fligntsControll',function($scope,filterFlights){
    $scope.flights = filterFlights.data;
});









