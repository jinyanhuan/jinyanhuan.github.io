/**
 * obj:传入一个javascript的DOM对象,鼠标在这个对象上滚动时才触发事件
 * upfn:传入一个函数,当鼠标向上滚动时执行
 * downfn:传入一个函数,当鼠标向下滚动时执行
 */
function mouseScroll (obj,upfn,downfn) {
    if(obj.attachEvent){
        obj.attachEvent("onmousewheel",scrollFn);  //IE opera
    }else if(obj.addEventListener){
        obj.addEventListener("mousewheel",scrollFn,false);  //chrome,safari
        obj.addEventListener("DOMMouseScroll",scrollFn,false);  //firefox
    }
    function scrollFn (e) {
        var ev=e||window.event;
        var num=ev.detail||ev.wheelDelta;
        if(num==120||num==-3){
            if(upfn){
                upfn.call(obj)
            }
        }else if(num==-120||num==3){
            if(downfn){
                downfn.call(obj)
            }

        }
        if (ev.preventDefault )
            ev.preventDefault(); //阻止默认浏览器动作(W3C)
        else
        //IE中阻止函数器默认动作的方式
            ev.returnValue = false;
    }
}