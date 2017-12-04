var Dock = function(options){
  this.options = options;
  this.obj = this.options.obj;
  this.objs = this.options.objs;
  this.aWidth = this.objs[0].offsetWidth;
  this.max = this.options.max;
  return global.addEvent.call(this,document,'mousemove',global.proxy(this.dockFunction,this));
};

Dock.fn = Dock.prototype;

Dock.fn.getCenter = function(){
  var center = {};
  center.centerL = [];
  center.centerT = [];
  for(var i=0;i<this.objs.length;i++){
    var coorL = this.objs[i].offsetWidth/2 + global.getLeft(this.objs[i]);
    var coorT = this.objs[i].offsetHeight/2 + global.getTop(this.objs[i]);
    center.centerL.push(coorL);
    center.centerT.push(coorT);
  }
  return center;
};

Dock.fn.dockFunction = function(){
  (function(e){
    var ev = e || window.event;
    var evLeft = ev.clientX;
    var evTop = ev.clientY;
    var center = this.getCenter();
    for (var i=0; i<this.objs.length;i++){
      var distance = global.getDistance(center.centerL[i]-evLeft,center.centerT[i]-evTop);
      if(distance>this.max) continue;
      var rate = 1-distance/200+1;
      this.objs[i].style.width = rate*this.aWidth+'px'
    }
  }).call(this)
};

