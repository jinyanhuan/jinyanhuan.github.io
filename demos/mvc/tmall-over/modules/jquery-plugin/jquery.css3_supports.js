define(function(require,exports,moudles){
    return function(jquery){
        (function ($) {
            $.support.transition = (function(){
                var thisBody = document.body || document.documentElement,
                thisStyle = thisBody.style,
                support = thisStyle.transition !== undefined || thisStyle.WebkitTransition !== undefined || thisStyle.MozTransition !== undefined || thisStyle.MsTransition !== undefined || thisStyle.OTransition !== undefined;
                return support;
            });
        })(jquery);
    }
});



