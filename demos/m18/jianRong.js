// JavaScript Document

/*---获取元素样式的某个属性的值的兼容函数---*/
/*obj表示元素对象  attr表示需要获取的属性*/
function getCss(obj,attr){
    if(document.all){
	return obj.currentStyle[attr]
	}
	else{
	return getComputedStyle(obj,null)[attr]
	}
}

/*---通过类名获取元素集合---*/
/*classname表示需要获取的类名  obj表示获取的范围,如不传入,则表示document*/
function getClass(classname,obj){
 var obj=obj||document
 var alls=obj.getElementsByTagName("*"); 
  var newarr=[];
  if(obj.getElementsByClassName){
  return obj.getElementsByClassName(classname)
  }
  else{
    for(var i=0;i<alls.length;i++){
	  if(fenge(alls[i],classname)){  	    
	  newarr.push(alls[i])
	  }
	} 
  return newarr
  }
}
 
function fenge($all,classname){         
    var arr=$all.className.split(" ");             
	for(var i=0;i<arr.length;i++){     	
		if(arr[i]==classname){    
		return true;
		}
	}
	return false
}

/*---获得元素中纯文本---*/
/*yuansu表示元素对象 zhi表示元素对象需要被赋予的文本内容,填写表示为元素的纯文本赋值,不填表示获得yuansu的纯文本.*/
function getText(yuanSu,zhi){
   if(document.all){
       if(zhi){
	   yuanSu.innerText=zhi;}
	   else{
	   return yuanSu.innerText;}
   }  
   else{
       if(zhi){
	   yuanSu.textContent=zhi;}
	   else{
	   return yuanSu.textContent;}
   }  
}

/*---获得元素的子节点(去掉空白节点)---*/
/*obj为父元素*/
function getChild(obj){
  var newarr=[];
   var childs=obj.childNodes;
   for(var i=0;i<childs.length;i++){
     if(childs[i].nodeType==3){
     continue;
	 }
	 else{
	 newarr.push(childs[i])}
   }
  return newarr;
}

/*---获得元素的第一个非空白子节点---*/
/*obj为父元素*/
function getFirst (obj) {
   var first=obj.firstChild;
	  if(first==null){
	  return null
	  }
	  
	  while (first.nodeType==3){
	   first=first.nextSibling;
	    if(first==null){
	    return null
		}
	  }
	  
   return first;
}

/*---获得元素的最后一个非空白子节点---*/
/*obj为父元素*/
function getLast(obj){
  var last=obj.lastChild;
  if(last==null){
  return null
  }
  else{
	 while(last.nodeType==3){
	 last=last.previousSibling;
	   if(last==null){
	   return null
	   }
	 }  
  }
  return last
}

/*---获得元素下一个非空兄弟节点---*/
/*obj为本元素*/
function getNext(obj){
  var next=obj.nextSibling;
  if(next==null){
  return null
  }
  else{
	 while(next.nodeType==3){
	 next=next.nextSibling;
	   if(next==null){
	   return null
	   }
	 }  
  }
  return next
}

/*---获得元素上一个非空兄弟节点---*/
/*obj为本元素*/
function getPrevious(obj){
  var previous=obj.previousSibling;
  if(previous==null){
  return null
  }
  else{
	 while(previous.nodeType==3){
	 previous=previous.previousSibling;
	   if(previous==null){
	   return null
	   }
	 }  
  }
  return previous
}

/*---在某元素的后面插入一个节点---*/
/*self为需要插入的新节点  插入在obj节点的后面*/
function insertAfter(self,obj){
   var next=getNext(obj);
   var father=obj.parentNode
   if(next==null){
   father.appendChild(self);
   }
   else{
   father.insertBefore(self,next)
   }    
}

/*拖拉相对于浏览器定位的框*/ 
function drag(obj){
   obj.onmousedown=function(e){
	  var ev=e||window.event;
      /*$objX指的是鼠标相对于框的距离*/	 
	  /*鼠标相对于框的距离是在按下的瞬间决定的,而不是随着move发生的事件,所以需要在这里声明*/	 
 	  var $objX=ev.offsetX||ev.layerX;
	  var $objY=ev.offsetY||ev.layerY;

          /*注意,这里要用document,这样当鼠标移动很快的时候,即使移出了kuang的范围,事件依然成立*/
	      document.onmousemove=function(e){
		  /*这里需要再写一遍ev,因为移动时候的ev,和按下时候的ev,是两个事件的ev*/
		  var ev=e||window.event
		  /*$mouseX指的是移动时,鼠标相对于浏览器的距离*/

		  var $mouseX=ev.clientX;
	      var $mouseY=ev.clientY;
          
		  obj.style.left=($mouseX-$objX)+"px";
		  obj.style.top=($mouseY-$objY)+"px";
		  }
  	  /*在ie中,使框移动时不会选中其它的元素*/
      if(obj.setCapture){
	    obj.setCapture()
	  }
   /*在除了ie以外的浏览器中,使框移动时不会选中其它的元素*/
   return false; 
   }

   document.onmouseup=function(e){
   document.onmousemove=null; 
	  if(obj.releaseCapture){
		obj.releaseCapture();
	  }    
   }
}


/*拖拉相对于父元素定位的框*/ 
function dragDiv(obj){
	obj.onmousedown=function  (e) {
	 var ev=e||window.event;
	 var downX=ev.clientX           //获取鼠标按下时,相对于浏览器的距离.
	 var downY=ev.clientY 
	 var objLeft=obj.offsetLeft;    //获取鼠标按下时,obj相对于父元素的距离.
	 var objTop=obj.offsetTop;
	 var chaZhiX=downX-objLeft;     //获取接下来移动时,每次需要减去的差值.
	 var chaZhiY=downY-objTop;	 

	  if(obj.setCapture){
	  obj.setCapture()
	  }
	  
	  document.onmousemove=function  (e) {
	    var ev=e||window.event;
		var mouseX=ev.clientX;      //获取鼠标移动时,鼠标源相对于浏览器的距离
		var mouseY=ev.clientY;   

		var $left=mouseX-chaZhiX;   //最终的left值就是鼠标移动时相对于浏览器的距离,减去上面计算出的差值.
		var $top=mouseY-chaZhiY
        if($left>=0&&$left<=(obj.parentNode.offsetWidth-obj.offsetWidth)){
		obj.style.left=$left+"px"};
		if($top>=0&&$top<=obj.parentNode.offsetHeight-obj.offsetHeight){
		obj.style.top=$top+"px"}
	  }
      return false;
	  }
	 
	  document.onmouseup=function  () {
	     document.onmousemove=null;
		 if(obj.releaseCapture){
		   obj.releaseCapture();
		 }
	  }
}

/*一个元素绑定多个事件的函数*/
/*obj为需要绑定事件的元素*/
/*type为事件(不加on),类型是字符串*/
/*fns为需要绑定的事件的函数名*/
function addEvent(obj,type,fns){
  if(document.all){
  obj.attachEvent("on"+type,function(){fns.call(obj)})  //在ie中需要将指针指向自己
  }
  else{
  obj.addEventListener(type,fns)
  }
}