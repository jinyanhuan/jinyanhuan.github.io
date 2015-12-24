var hbFilters = angular.module('huabanFilters', []);

//返回过去某个时间点至今的时间
hbFilters.filter('toCurTime',function(){
    return function(time){
        var postTime = new Date(time*1000);
        var now = new Date();
        var diffYear = now.getFullYear()-postTime.getFullYear();
        if(diffYear>0){
            return diffYear + '年前'
        }
        var diffMonth = now.getMonth()-postTime.getMonth();
        if(diffMonth>0){
            return diffMonth + '个月前'
        }
        var diffDay = now.getDay()-postTime.getDay();
        if(diffDay>0){
            return diffDay + '天前'
        }
        var diffHours = now.getHours()-postTime.getHours();
        if(diffHours>0){
            return diffHours + '个小时前'
        }
        var diffMin = now.getMinutes()-postTime.getMinutes();
        if(diffMin>0){
            return diffMin + '分钟前'
        }
        var diffSec = now.getSeconds()-postTime.getSeconds();
        return diffSec + '秒前'
    }
});

