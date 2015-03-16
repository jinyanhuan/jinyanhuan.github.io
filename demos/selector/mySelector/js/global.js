var Global = function(){};
Global.fn = Global.prototype;
//获取元素相对于屏幕的y轴坐标
Global.fn.getTop = function(obj){
  var offset=obj.offsetTop;
  if(obj.offsetParent!=null) offset+=this.getTop(obj.offsetParent);
  return offset;
};
//获取元素相对于屏幕的x轴坐标
Global.fn.getLeft = function(obj){
  var offset=obj.offsetLeft;
  if(obj.offsetParent!=null) offset+=this.getLeft(obj.offsetParent);
  return offset;
};
//为元素添加事件
Global.fn.addEvent = function (obj,event,fn){
  if(obj.attachEvent){
    this.addEvent = function (obj,event,fn){
      if(obj){
        obj.attachEvent('on'+event,fn);
      }
    }
  }
  else{
    this.addEvent = function (obj,event,fn){
      if(obj){
        obj.addEventListener(event,fn,false);
      }
    }
  }
  this.addEvent(obj,event,fn);
};
//为元素删除事件
Global.fn.removeEvent = function (obj,event,fn){
  if(obj.detachEvent){
    this.removeEvent = function (obj,event,fn){
      if(obj){
        obj.detachEvent('on'+event,fn);
      }
    }
  } else {
    this.removeEvent = function (obj,event,fn){
      if(obj){
        obj.removeEventListener(event,fn,false);
      }
    }
  }
  this.removeEvent(obj,event,fn);
};
//勾股定义(传入两个参数,得到两个数平方和开平方)
Global.fn.getDistance = function (x,y){
  return Math.sqrt((Math.pow(x,2)+Math.pow(y,2)))
};
//改变绑定事件的this上下文
Global.fn.proxy = function(func, thisObject){
  return(function(){
    return func.apply(thisObject, arguments);
  });
};

var global = new Global();