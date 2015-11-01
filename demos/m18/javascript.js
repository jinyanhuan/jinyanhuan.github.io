// JavaScript Document
/*---导航条的下拉选项---*/
$(function(){
  var navs=getClass("nav_out")[0];         //获取类名为nav_out的元素,也就是整个导航ul
  var navsLi=getChild(navs);               //获取ul中的所有li项,也就是导航中的各个选项
  $(navsLi).mouseover(                     //为li添加事件
     function(){                           
	  $($(this).find("div")).css("display","block")                //可以使用find方法,找出里面的div元素
	 }
  )
  $(navsLi).mouseout(
     function(){
	  $($(this).children(".daohang_nz")).css("display","none")     //也可以使用children方法,找出里面类名为daohang_nz的元素
	 }
  )
}
)

/*---我的购物信息的下拉选项---*/
$(function(){
  var xinXi=getClass("xinXi")[0];
  //var xinXiA=xinXi.getElementsByTagName("a")[0];
  var xinXi_list=getClass("xinXi_list",xinXi)[0];	
  xinXi.onclick=function(){
     if(xinXi_list.style.display=="none"){
	 xinXi_list.style.display="block";
	 }
	 else{
	 xinXi_list.style.display="none";
	 }
  }
})

/*---搜索条弹窗的显示与隐藏---*/
$(function(){
  var searchForm=document.searchForm;
  var searchText=searchForm.search1;
  var searchHot=getClass("searchHot")[0];
  searchText.onfocus=function(){
       searchText.value="";
	   searchText.style.textAlign="left"
	   searchHot.style.display="block";
  }
  searchText.onblur=function(){
	   searchText.value="羽绒服";
	   searchText.style.textAlign="center"
       searchHot.style.display="none";
  }
})

/*---搜索条选项卡效果---*/
$(function(){
  var sH_chanpin=getClass("sH_chanpin");
  var sH_left=getClass("sH_left")[0];
  var sH_a=sH_left.getElementsByTagName("a");
  for(var i=0;i<sH_a.length;i++){
	 sH_a[i].index=i;
	 sH_a[i].onmouseover=function(){
	   for(var j=0;j<sH_a.length;j++){
	   sH_chanpin[j].style.display="none";
	   }
	 sH_chanpin[this.index].style.display="block";
	 }
  }
})

/*---右侧悬浮条和悬浮条下四按钮效果---*/
$(function(){
  var xuanFu=getClass("xuanFu")[0];
  var xuanFu_xia=getClass("xuanFu_xia",xuanFu)[0];
  var xuanFu_anniu=xuanFu_xia.getElementsByTagName("a");
  
  document.onscroll=function(){
  var scrollY=document.documentElement.scrollTop||document.body.scrollTop;
    if(scrollY>=138){
	xuanFu.style.position="fixed";
	xuanFu.style.top="15px";
	animate(xuanFu_xia,{opacity:100},500,Tween.Quad.easeIn)
	}	
	if(scrollY<=138){
	xuanFu.style.position="absolute";
	xuanFu.style.top=0;
	animate(xuanFu_xia,{opacity:0},500,Tween.Quad.easeIn)
	}
  }
  
  xuanFu_anniu[0].onclick=function(){
  var xuanFuY=document.documentElement.clientHeight;
  var scrollY=document.documentElement.scrollTop||document.body.scrollTop;
  document.documentElement.scrollTop=scrollY-xuanFuY
  document.body.scrollTop=scrollY-xuanFuY
  }
  
  xuanFu_anniu[2].onclick=function(){
  var xuanFuY=document.documentElement.clientHeight;
  var scrollY=document.documentElement.scrollTop||document.body.scrollTop;
  document.documentElement.scrollTop=scrollY+xuanFuY
  document.body.scrollTop=scrollY+xuanFuY;
  }
  
  xuanFu_anniu[1].onclick=function(){
  document.documentElement.scrollTop=0
  document.body.scrollTop=0;
  }
  
  xuanFu_anniu[3].onclick=function(){
  document.documentElement.scrollTop=9000
  document.body.scrollTop=9000;
  }

})
/*---/右侧悬浮条和悬浮条下四按钮效果---*/

/*---焦点图轮播---*/
$(function(){
  var pic_div=getClass("yi_left")[0];
  var pic_box=getClass("pic_box",pic_div)[0];
  var picP=$(pic_div).children("p");
  var picA=$(picP).children("a");
  for(var i=0;i<picA.length;i++){
     picA[i].index=i;
	 picA[i].onmouseover=function(){
	 var num=this.index;
	 animate(pic_box,{top:-num*338},500,Tween.Linear)
        for(var j=0;j<picA.length;j++){
	    picA[j].className="";
		}
     picA[num].className="on";
	 }
  }
}
)
/*---/焦点图轮播结束---*/

/*---特价产品选项卡效果---*/
$(function(){
   var teJia_div=getClass("teJia")[0];
   var teJia_chanPin=getClass("tJ_chanPin",teJia_div);
   $($($(teJia_div).children("ul")).find("a")).mouseover(
       function(){
	   $($($(teJia_div).children("ul")).find("a")).removeClass("red")   
	   $(this).addClass("red");
	   $($(teJia_div).children(".tJ_chanPin")).css("display","none");
	   var num=$($($(teJia_div).children("ul")).find("a")).index($(this));   
       $(teJia_chanPin[num]).css("display","block")
	   }
   )
}
)
$(function(){
   var teJia1_div=getClass("teJia")[1];
   var teJia1_chanPin=getClass("tJ_chanPin",teJia1_div);
   $($($(teJia1_div).children("ul")).find("a")).mouseover(
       function(){
	   $($($(teJia1_div).children("ul")).find("a")).removeClass("red")   
	   $(this).addClass("red");
	   $($(teJia1_div).children(".tJ_chanPin")).css("display","none");
	   var num=$($($(teJia1_div).children("ul")).find("a")).index($(this));   
       $(teJia1_chanPin[num]).css("display","block")
	   }
   )
}
)
/*---/特价产品选项卡效果结束---*/

/*---分类区域效果---*/
$(function(){
   var fenLei=getClass("fenLei")[0];    
   var lei=getClass("fu",fenLei);
   for(var i=0;i<lei.length;i++){

	  lei[i].onmouseover=function(){
      $(this).addClass("on");
	  var rows=this.parentNode;
	  rows.style.zIndex="1";
	  var hHeight=this.offsetHeight;
	  var h=getFirst(this);
      h.style.height=hHeight+"px"
	  }
	  
	  lei[i].onmouseout=function(){
	  $(this).removeClass("on")
	  var rows=this.parentNode;
	  rows.style.zIndex="0";
	  var h=getFirst(this);	  
      h.style.height="59px"	  
	  }   
   }
})
/*---/分类区域效果结束---*/

/*---畅销精品区轮播器效果---*/
$(function(){
/*获取中间部分的元素*/
  var out=getClass("cX_content")[0];
  var left=getClass("jianTou_left",out)[0];
  var right=getClass("jianTou_right",out)[0];
  var smallboxs=getClass("smallbox",out);

/*获取圆点链接部分的元素*/
  var yuanDian=getClass("lianJie",out)[0];
  var siDian=yuanDian.getElementsByTagName("a");

/*获取选项卡部分的元素*/
  var changXiao=getClass("changXiao")[0];
  var title=getClass("title",changXiao)[0];
  var links=title.getElementsByTagName("a");

/*---重点:t必须先声明,后面再赋值t=setInterval,否则,在第37行清除t的时候,就都没了---*/
  var t;
  
/*初始化图片的内容,使第二个到第七个选项的盒子都隐藏,并且第一个盒子先启用轮播*/
  for(var i=1;i<links.length;i++){
      smallboxs[i].style.display="none";
  }
  fun(smallboxs[0]);

/*通过选项卡来获取显示相应的盒子*/  
  for(var i=0;i<links.length;i++){
	 links[i].index=i                         
	 links[i].onmouseover=function(){
	      for(var j=0;j<links.length;j++){
	          smallboxs[j].style.display="none";    //所有小盒子都为隐藏
			  links[j].style.color="#666";          //所有的选项卡文字都变为灰
			  /*清空所有的轮播状态,否则再次选中时,等于开了2个轮播*/
			  clearInterval(t)        
		  }
	 this.style.color="#cc0000";                    //当前选项卡的文字颜色为红
	 smallboxs[this.index].style.display="block";   //当前小盒子的显示状态为显示
	 fun(smallboxs[this.index])                     //当前小盒子调用轮播函数
	 /*一定要用这种仿闭包的方法来传入参数*/
	 }  
  }
 
/*每个smallbox遵循的运动函数*/  
function fun(obj){
	t=setInterval(moveR,3000)                       //为t赋值,没有任何操作的时候,每隔3秒滚动一次.
       /*向后滚动的函数*/
       function moveR(){                            
	   var startLeft=obj.offsetLeft;                //获取启示状态的left值
	      //调试代码:document.title=startLeft;
	      if(startLeft==-3600){                     //当遇到最后一个时,拉回到第一个
	      obj.style.left="0px";
		  animate(obj,{left:-900},300,Tween.Cubic.easeInOut)}           //拉回到第一个后,再向后动900px
	      else{                                                         
	      animate(obj,{left:startLeft-900},300,Tween.Cubic.easeInOut)   //如果不是最后一个,则向后再移动900px
	      }
          /*用来获取当前是红色的圆点*/
		  for(var i=0;i<siDian.length;i++){
		     if(siDian[i].className=="red"){
			 var red_siDian=siDian[i]
			 }
		  }
		  var nextRed=getNext(red_siDian)||siDian[0];  //向后滚动时,获取当前红色圆点的下一个,如果是最后一个,则获取第一个.
		  red_siDian.className="";                     //当前红色圆点变灰.
		  nextRed.className="red";                     //下一个红色圆点变红
	   }
       /*向前滚动的函数*/
	   function moveL(){
	   var startLeft=obj.offsetLeft;
	      if(startLeft==0){
	      obj.style.left="-3600px";
		  animate(obj,{left:-2700},300,Tween.Cubic.easeInOut)}
	      else{
	      animate(obj,{left:startLeft+900},300,Tween.Cubic.easeInOut)
	      }
          /*用来获取当前是红色的圆点*/
		  for(var i=0;i<siDian.length;i++){
		     if(siDian[i].className=="red"){
			 var red_siDian=siDian[i]
			 }
		  }
		  var previousRed=getPrevious(red_siDian)||siDian[3];  //向前滚动时,获取当前红色圆点的上一个,如果是第一个,则获取最后一个.
		  red_siDian.className="";                             //当前红色圆点变灰.
		  previousRed.className="red";                         //上一个红色圆点变红
	   }
/*设置箭头点击停止定时器,执行一次向后滚动函数*/
  right.onclick=function(){
      clearInterval(t);
	  moveR();
  }
/*onmouseover也需要添加一个清除计时,否则当客户不点击箭头,仅仅是放上去又离开的话,等于又开了一个计时*/  
  right.onmouseover=function(){
      clearInterval(t)
  }
/*设置离开箭头,再次开启定时器*/
  right.onmouseout=function(){
      t=setInterval(moveR,3000)
  }
  
  left.onclick=function(){
      clearInterval(t);
	  moveL()
  }

  left.onmouseover=function(){
      clearInterval(t)
  } 

  left.onmouseout=function(){
      t=setInterval(moveR,3000)
  }


/*为四个圆点设置鼠标移上去时图片滚动到相应的位置*/
  for(var i=0;i<siDian.length;i++){

	 siDian[i].index=i;
	 
	 siDian[i].onmouseover=function(){
	 clearInterval(t);	      //首先取消原有的定时器
     animate(obj,{left:-900*(this.index)},300,Tween.Cubic.easeInOut)    //运动的位置=当前的i值×(-900)   
	 
	 /*使选中的圆点颜色为红,其余为灰*/
	 for(var j=0;j<siDian.length;j++){        
     siDian[j].className="";
	 }
	 siDian[this.index].className="red"; 
	 }
  }
/*鼠标离开四个圆点时,重新设置定时器*/  
  for(var i=0;i<siDian.length;i++){
	 
	 siDian[i].index=i;
	 
	 siDian[i].onmouseout=function(){
     t=setInterval(moveR,3000)	 
	 }
  }
  }    

})
/*---/畅销精品区轮播器效果结束---*/

/*---热卖推荐区的黑框选项卡,放大,轮播效果---*/
$(function(){
  var hot=getClass("hot")[0];	
/*---实现选项卡选中为黑框需要获取的元素---*/
  var hot_ul=getClass("little",hot)[0];
  var hot_li=getChild(hot_ul);
/*---实现选项卡内容切换需要获取的元素---*/
  var hot_tjBox=getClass("tj_box",hot)[0];
  var img_uls=getChild(hot_tjBox);     
/*---实现左右箭头轮播需要获取的元素---*/
  var hot_zuoJianTou=getClass("jianTou_left",hot)[0];
  var hot_youJianTou=getClass("jianTou_right",hot)[0];
                   
  for(var i=0;i<hot_li.length;i++){
     hot_li[i].index=i;
	 hot_li[i].onmouseover=function(){
		 /*---选项卡以及选项内容的类名全都归零清空---*/
		 for(var j=0;j<hot_li.length;j++){ 
	     $(hot_li[j]).removeClass("jiaCu");
		 img_uls[j].className="";
		 }
	 /*---当前选项卡和选项内容添加类名---*/	 
     $(hot_li[this.index]).addClass("jiaCu");
	 img_uls[this.index].className="ul_on";
	 /*---由于下面是箭头的点击事件,所以不能再沿用上一层的this,需要把当前ul元素赋值给一个新的变量---*/
	 var ul_on=img_uls[this.index];                       //获取当前显示的ul
	 
	     /*---左箭头点击轮播事件---*/
		 hot_zuoJianTou.onclick=function(){
	     var last=getLast(ul_on);
	     var first=getFirst(ul_on);
	     ul_on.insertBefore(last,first)
	     }
		 /*---右箭头点击轮播事件---*/
	     hot_youJianTou.onclick=function(){
	     var last=getLast(ul_on);
	     var first=getFirst(ul_on);
	     insertAfter(first,last);
	     }
     /*---每一个产品的放大显示效果---*/
	 var img_lis=getChild(ul_on);                        //获取当前ul中的所有li元素
	     for(var k=0;k<img_lis.length;k++){             
		     img_lis[k].onmouseover=function(){
			     for(var l=0;l<img_lis.length;l++){
				 img_lis[l].className="";
				 }
			 this.className="li_on";	 
			 }
		     img_lis[k].onmouseout=function(){
             this.className="";
			 }
		 }
	 }
  }
  
/*---左右按钮的轮播的初始化(由于上面的轮播是基于选项卡的onmouseover事件的,所以,一开始没有轮播,需要另行添加)---*/  
  var hot_onUL=getClass("ul_on",hot)[0];
		 hot_zuoJianTou.onclick=function(){
	     var last=getLast(hot_onUL);
	     var first=getFirst(hot_onUL);
	     hot_onUL.insertBefore(last,first)
	     }
	     hot_youJianTou.onclick=function(){
	     var last=getLast(hot_onUL);
	     var first=getFirst(hot_onUL);
	     insertAfter(first,last);
	     }

/*---每一个产品的放大显示的初始化(由于上面的方大是基于选项卡的onmouseover事件的,所以,一开始没有放大效果,需要另行添加))---*/ 
  var hot_onLi=getChild(hot_onUL);
 	     for(var i=0;i<hot_onLi.length;i++){             
		     hot_onLi[i].onmouseover=function(){
			     for(var j=0;j<hot_onLi.length;j++){
				 hot_onLi[j].className="";
				 }
			 this.className="li_on";	 
			 }
		     hot_onLi[i].onmouseout=function(){
             this.className="";     	 
			 }
		 }        
})
/*---/热卖推荐区的黑框选项卡,放大,轮播效果结束---*/

/*---潮流女装区块明暗效果---*/
$(function(){
var nz=getClass("nz")[0];
var nz1=getClass("nz_1",nz)[0]
var nz_imgs=nz1.getElementsByTagName("img");
   for(var i=0;i<nz_imgs.length;i++){
	 nz_imgs[i].onmouseover=function(){
	     for(var j=0;j<nz_imgs.length;j++){
		 nz_imgs[j].style.opacity="0.8";
		 nz_imgs[j].filter="alpha(opacity=80)"		 
		 }
	 this.style.opacity="1";
	 this.style.filter="alpha(opacity=100)"
	 }
	 nz_imgs[i].onmouseout=function(){
	 	 for(var j=0;j<nz_imgs.length;j++){
		 nz_imgs[j].style.opacity="1";
		 nz_imgs[j].filter="alpha(opacity=100)"
		 }
	 }
   } 
})
/*---/潮流女装区块明暗效果结束---*/

/*---潮流鞋包区块明暗效果---*/
$(function(){
  var xieBao=getClass("xb")[0];                      //获取潮流鞋包区域为范围
  var xb_links=xieBao.getElementsByTagName("a");         //获取该范围中所有的a标签

/*---实现鼠标放在某个产品上面时,其余产品都变灰---*/ 
/*---注意在html中图片与透明区域的前后顺序,在index页面中有注释说明---*/
  for(i=0;i<xb_links.length;i++){                        //鼠标放上去时的函数
	     xb_links[i].onmouseover=function(){                    
			 for(j=0;j<xb_links.length;j++){             //使所有图片都变透明一点,透出底层黑色
			      var imgs=getFirst(xb_links[j]);        //获取a元素下的第一个子元素,也就是img
				  imgs.style.opacity=0.8;                //普通浏览器
				  imgs.style.filter="alpha(opacity=80)";      //ie浏览器
			 } 
			 var img=getFirst(this)                  //获取当前事件源a元素下的第一个子元素,也就是img   
			 img.style.opacity="1";                  //当前图片不透明
		     img.style.filter="alpha(opacity=100)";  //ie浏览器
		 
		     var $bg=getClass("bg",this)[0];         //获取a链接中的类名为bg的div,就是透明信息块里的背景区
             if($bg){                                //判断选中的图片是否有透明信息块(这个例子中的第一张图片和最后一张图片都是没有透明信息区的)
			 $bg.style.backgroundColor="#cc0000";    //如果有透明信息块,则让此块的颜色变为红色
			     var text=getNext($bg);              //获取透明颜色块的下一个兄弟元素,就是包含信息文字的div
                 var $b=getChild(text);              //获取包含信息文字的div下面的所有价格和名字的文字信息标签(不需要判断,有透明块就一定有文字)
				 for(var k=0;k<$b.length;k++){       //使所有文字都变为白色
			         $b[k].style.color="white"
				 }
			 }		 
		 }

  }
/*---实现鼠标离开产品时,所有产品都变亮---*/ 
  for(i=0;i<xb_links.length;i++){                        //鼠标离开时的函数
	     xb_links[i].onmouseout=function(){		     
			 for(j=0;j<xb_links.length;j++){             //使所有图片都变为不透明
			      var imgs=getFirst(xb_links[j]);
				  imgs.style.opacity=1;
				  imgs.style.filter="alpha(opacity=100)";
			 }
		     
			 var father=this.parentNode;             
		     var $bg=getClass("bg",this)[0];                      
             if($bg){
			 $bg.style.backgroundColor="#fff";       //将变红的透明块再变为白色.
			     var text=getNext($bg);                 
                 var $b=getChild(text);
                 $b[0].style.color="#cc0000";        //第一排文字(价格),颜色再变为红色
				 $b[1].style.color="#666";           //第二排文字(品名),颜色再变为灰色
			 }		    	 		 
		 } 
  }

})
/*---/潮流鞋包区块明暗效果结束---*/

/*---时尚配饰区块明暗效果---*/
$(function(){
  var peiShi=getClass("xb")[1];                              //只是把潮流鞋包中的xieBao换成peiShi,然后获取的是第二个"xb"类.其它同上.          
  var ps_links=peiShi.getElementsByTagName("a");        

  for(i=0;i<ps_links.length;i++){                        
	     ps_links[i].onmouseover=function(){                    
			 for(j=0;j<ps_links.length;j++){             
			      var imgs=getFirst(ps_links[j]);       
				  imgs.style.opacity=0.8;                
				  imgs.style.filter="alpha(opacity=80)";      
			 } 
			 var img=getFirst(this)                   
			 img.style.opacity="1";                  
		     img.style.filter="alpha(opacity=100)";  
		 
		     var $bg=getClass("bg",this)[0];         
             if($bg){                                
			 $bg.style.backgroundColor="#cc0000";    
			     var text=getNext($bg);              
                 var $b=getChild(text);             
				 for(var k=0;k<$b.length;k++){       
			         $b[k].style.color="white"
				 }
			 }		 
		 }

  }
/*---实现鼠标离开产品时,所有产品都变亮---*/ 
  for(i=0;i<ps_links.length;i++){                        
	     ps_links[i].onmouseout=function(){		     
			 for(j=0;j<ps_links.length;j++){             
			      var imgs=getFirst(ps_links[j]);
				  imgs.style.opacity=1;
				  imgs.style.filter="alpha(opacity=100)";
			 }
		     
			 var father=this.parentNode;             
		     var $bg=getClass("bg",this)[0];                      
             if($bg){
			 $bg.style.backgroundColor="#fff";       
			     var text=getNext($bg);                 
                 var $b=getChild(text);
                 $b[0].style.color="#cc0000";        
				 $b[1].style.color="#666";           
			 }		    	 		 
		 } 
  }

})
/*---/时尚配饰区块明暗效果结束---*/

/*---精品女装区块明暗效果---*/
$(function(){
var nz=getClass("nz")[1];                           //只要把潮流女装中的第1个"nz"类,改为第2个"nz"类,其余都一样.
var nz1=getClass("nz_1",nz)[0]
var nz_imgs=nz1.getElementsByTagName("img");
   for(var i=0;i<nz_imgs.length;i++){
	 nz_imgs[i].onmouseover=function(){
	     for(var j=0;j<nz_imgs.length;j++){
		 nz_imgs[j].style.opacity="0.8";
		 nz_imgs[j].filter="alpha(opacity=80)"		 
		 }
	 this.style.opacity="1";
	 this.style.filter="alpha(opacity=100)"
	 }
	 nz_imgs[i].onmouseout=function(){
	 	 for(var j=0;j<nz_imgs.length;j++){
		 nz_imgs[j].style.opacity="1";
		 nz_imgs[j].filter="alpha(opacity=100)"
		 }
	 }
   } 
})
/*---/精品女装区块明暗效果结束---*/

/*---潮流男装区块明暗效果---*/
$(function(){
var nz=getClass("nz")[2];                           //只要把潮流女装中的第1个"nz"类,改为第3个"nz"类,其余都一样.
var nz1=getClass("nz_1",nz)[0]
var nz_imgs=nz1.getElementsByTagName("img");
   for(var i=0;i<nz_imgs.length;i++){
	 nz_imgs[i].onmouseover=function(){
	     for(var j=0;j<nz_imgs.length;j++){
		 nz_imgs[j].style.opacity="0.8";
		 nz_imgs[j].filter="alpha(opacity=80)"		 
		 }
	 this.style.opacity="1";
	 this.style.filter="alpha(opacity=100)"
	 }
	 nz_imgs[i].onmouseout=function(){
	 	 for(var j=0;j<nz_imgs.length;j++){
		 nz_imgs[j].style.opacity="1";
		 nz_imgs[j].filter="alpha(opacity=100)"
		 }
	 }
   } 
})
/*---/潮流男装区块明暗效果结束---*/

/*---美体内衣区块明暗效果---*/
$(function(){
  var meiTi=getClass("xb")[2];                              //只是把潮流鞋包中的xieBao换成meiTi,然后获取的是第三个"xb"类.其它同潮流鞋包.          
  var mt_links=meiTi.getElementsByTagName("a");        

  for(i=0;i<mt_links.length;i++){                        
	     mt_links[i].onmouseover=function(){                    
			 for(j=0;j<mt_links.length;j++){             
			      var imgs=getFirst(mt_links[j]);       
				  imgs.style.opacity=0.8;                
				  imgs.style.filter="alpha(opacity=80)";      
			 } 
			 var img=getFirst(this)                   
			 img.style.opacity="1";                  
		     img.style.filter="alpha(opacity=100)";  
		 
		     var $bg=getClass("bg",this)[0];         
             if($bg){                                
			 $bg.style.backgroundColor="#cc0000";    
			     var text=getNext($bg);              
                 var $b=getChild(text);             
				 for(var k=0;k<$b.length;k++){       
			         $b[k].style.color="white"
				 }
			 }		 
		 }

  }
/*---实现鼠标离开产品时,所有产品都变亮---*/ 
  for(i=0;i<mt_links.length;i++){                        
	     mt_links[i].onmouseout=function(){		     
			 for(j=0;j<mt_links.length;j++){             
			      var imgs=getFirst(mt_links[j]);
				  imgs.style.opacity=1;
				  imgs.style.filter="alpha(opacity=100)";
			 }
		     
			 var father=this.parentNode;             
		     var $bg=getClass("bg",this)[0];                      
             if($bg){
			 $bg.style.backgroundColor="#fff";       
			     var text=getNext($bg);                 
                 var $b=getChild(text);
                 $b[0].style.color="#cc0000";        
				 $b[1].style.color="#666";           
			 }		    	 		 
		 } 
  }

})
/*---/美体内衣区块明暗效果结束---*/

/*---美容保健区块明暗效果---*/
$(function(){
  var meiRong=getClass("mr")[0];                              //只是把潮流鞋包中的xieBao换成meiRong,然后获取的是"mr"类.其它同潮流鞋包.
  var mr_links=meiRong.getElementsByTagName("a");        
  for(i=0;i<mr_links.length;i++){                        
	     mr_links[i].onmouseover=function(){                    
			 for(j=0;j<mr_links.length;j++){             
			      var imgs=getFirst(mr_links[j]);       
				  imgs.style.opacity=0.8;                
				  imgs.style.filter="alpha(opacity=80)";      
			 } 
			 var img=getFirst(this)                   
			 img.style.opacity="1";                  
		     img.style.filter="alpha(opacity=100)";  
		 
		     var $bg=getClass("bg",this)[0];         
             if($bg){                                
			 $bg.style.backgroundColor="#cc0000";    
			     var text=getNext($bg);              
                 var $b=getChild(text);             
				 for(var k=0;k<$b.length;k++){       
			         $b[k].style.color="white"
				 }
			 }		 
		 }

  }
/*---实现鼠标离开产品时,所有产品都变亮---*/ 
  for(i=0;i<mr_links.length;i++){                        
	     mr_links[i].onmouseout=function(){		     
			 for(j=0;j<mr_links.length;j++){             
			      var imgs=getFirst(mr_links[j]);
				  imgs.style.opacity=1;
				  imgs.style.filter="alpha(opacity=100)";
			 }
		     
			 var father=this.parentNode;             
		     var $bg=getClass("bg",this)[0];                      
             if($bg){
			 $bg.style.backgroundColor="#fff";       
			     var text=getNext($bg);                 
                 var $b=getChild(text);
                 $b[0].style.color="#cc0000";        
				 $b[1].style.color="#666";           
			 }		    	 		 
		 } 
  }

})
/*---/美容保健区块明暗效果结束---*/

/*---童装母婴区块明暗效果---*/
$(function(){
var nz=getClass("nz")[3];
var nz1=getClass("nz_1",nz)[0]
var nz_imgs=nz1.getElementsByTagName("img");
   for(var i=0;i<nz_imgs.length;i++){
	 nz_imgs[i].onmouseover=function(){
	     for(var j=0;j<nz_imgs.length;j++){
		 nz_imgs[j].style.opacity="0.8";
		 nz_imgs[j].filter="alpha(opacity=80)"		 
		 }
	 this.style.opacity="1";
	 this.style.filter="alpha(opacity=100)"
	 }
	 nz_imgs[i].onmouseout=function(){
	 	 for(var j=0;j<nz_imgs.length;j++){
		 nz_imgs[j].style.opacity="1";
		 nz_imgs[j].filter="alpha(opacity=100)"
		 }
	 }
   } 
})
/*---/童装母婴区块明暗效果结束---*/

/*---家庭用品食品区块明暗效果---*/
$(function(){
  var jiaTing=getClass("jt")[0];                              //只是把潮流鞋包中的xieBao换成jiaTing,然后获取的是"jt"类.其它同潮流鞋包.
  var jt_links=jiaTing.getElementsByTagName("a");        
  for(i=0;i<jt_links.length;i++){                        
	     jt_links[i].onmouseover=function(){                    
			 for(j=0;j<jt_links.length;j++){             
			      var imgs=getFirst(jt_links[j]);       
				  imgs.style.opacity=0.8;                
				  imgs.style.filter="alpha(opacity=80)";      
			 } 
			 var img=getFirst(this)                   
			 img.style.opacity="1";                  
		     img.style.filter="alpha(opacity=100)";  
		 
		     var $bg=getClass("bg",this)[0];         
             if($bg){                                
			 $bg.style.backgroundColor="#cc0000";    
			     var text=getNext($bg);              
                 var $b=getChild(text);             
				 for(var k=0;k<$b.length;k++){       
			         $b[k].style.color="white"
				 }
			 }		 
		 }

  }
/*---实现鼠标离开产品时,所有产品都变亮---*/ 
  for(i=0;i<jt_links.length;i++){                        
	     jt_links[i].onmouseout=function(){		     
			 for(j=0;j<jt_links.length;j++){             
			      var imgs=getFirst(jt_links[j]);
				  imgs.style.opacity=1;
				  imgs.style.filter="alpha(opacity=100)";
			 }
		     
			 var father=this.parentNode;             
		     var $bg=getClass("bg",this)[0];                      
             if($bg){
			 $bg.style.backgroundColor="#fff";       
			     var text=getNext($bg);                 
                 var $b=getChild(text);
                 $b[0].style.color="#cc0000";        
				 $b[1].style.color="#666";           
			 }		    	 		 
		 } 
  }

})
/*---/家庭用品食品区块明暗效果结束---*/