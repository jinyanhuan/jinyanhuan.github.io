
// var data = {
// "0":[
// {"cityid":"1","cityname":"北京","pid":"0"},
// {"cityid":"15","cityname":"上海","pid":"0"},
// {"cityid":"16","cityname":"重庆","pid":"0"},
// {"cityid":"70","cityname":"四川省","pid":"0"}
// ],
// "1":[
// {"cityid":"2","cityname":"朝阳区","pid":"1"},
// {"cityid":"10","cityname":"丰台区","pid":"1"},
// {"cityid":"18","cityname":"海淀区","pid":"1"},
// {"cityid":"20","cityname":"东城区","pid":"1"},
// {"cityid":"21","cityname":"石景山区","pid":"1"},
// {"cityid":"22","cityname":"通州区","pid":"1"},
// {"cityid":"23","cityname":"大兴区","pid":"1"},
// {"cityid":"24","cityname":"昌平区","pid":"1"}
// ],
// "2":[
// {"cityid":"3","cityname":"大望路","pid":"2"},
// {"cityid":"4","cityname":"三里屯 ","pid":"2"},
// {"cityid":"5","cityname":"国贸 ","pid":"2"}],
// "10":[
// {"cityid":"11","cityname":"青塔","pid":"10"},
// {"cityid":"12","cityname":"北大地","pid":"10"}
// ],
// "18":[
// {"cityid":"35","cityname":"双榆树","pid":"18"}
// ],
// "35":[
// {"cityid":"60","cityname":"双安商场 ","pid":"35"}
// ],
// "15":[
// {"cityid":"65","cityname":"黄浦区","pid":"15"},
// {"cityid":"66","cityname":"卢湾区","pid":"15"},
// {"cityid":"67","cityname":"徐汇区 ","pid":"15"}
// ],
// "16":[
// {"cityid":"68","cityname":"渝中区","pid":"16"},
// {"cityid":"69","cityname":"大渡口区","pid":"16"}
// ],
// "70":[
// {"cityid":"72","cityname":"成都市","pid":"70"},
// {"cityid":"73","cityname":"高新区","pid":"70"},
// {"cityid":"74","cityname":"武侯区","pid":"70"}
// ]
// };
 window.onload = function(){
   $.ajax({
     type:'GET',
     url:'./cache/data.json',
     dataType:'json',
     success:function(data){
       loadAddressData(data);
     }
   });
 };
   function loadAddressData(data){
     //获取到放置下拉选择框的div
     var selector = document.getElementById('selector');
     //创建下拉菜单函数
     function createSelector(pid){
       //如果当前pid值所属的数据不存在,则退出
       if(data[pid]==undefined){return}
       //创建下拉菜单,如下结构:
       // <div class="sel">
       //   <span><b class="arrow"></b>请选择</span>
       //   <ul>
       //     <li></li>
       //   <ul>
       // </div>
       var divSel = document.createElement('div');
       divSel.className = 'sel';
       selector.appendChild(divSel);
       var aSpan = document.createElement('span');
       aSpan.innerHTML = '<b class="arrow"></b>请选择';
       divSel.appendChild(aSpan);
       var aUl = document.createElement('ul');
       divSel.appendChild(aUl);
       var dataNow = data[pid];
       for(var i=0; i<dataNow.length; i++){
         var aLi = document.createElement('li');
         aLi.innerHTML=dataNow[i].cityname;
         aLi.value=dataNow[i].cityid;
         aUl.appendChild(aLi);
         aUl.style.display='none';
       }
       //联动创建每个下拉菜单的第0个选项对应的下级数据的下拉菜单
       createSelector(dataNow[0].cityid);

       //为创建的下拉菜单绑定事件
       var sels = selector.getElementsByTagName('div');
       //如果一个菜单展开的时候,不允许展开另外的菜单,必须收起该菜单
       //var flag = true;
       for(var j=0;j<sels.length;j++){
         sels[j].index = j;
         var index = null;
         sels[j].state = true;
         sels[j].onclick = function(){
//           写法一:通过给每个sels添加一个状态,仅当状态为true时触发事件
//                如果点击时,当前sels是收起的,那么,其余sels的状态变为false,当前sels的状态仍旧是true
//                如果点击时,当前sels是展开的,那么,所有的sels的状态都变为true
             if(!this.state){return}
             var showHidden = this.getElementsByTagName('ul')[0].style.display;
             if(showHidden=='none' && this.state) {
                 this.getElementsByTagName('ul')[0].style.display='block';
                 for(var m=0;m<sels.length;m++){
                     sels[m].state=false;
                 }
                 this.state=true;
                 index = this.index;
             }
             else{
                 this.getElementsByTagName('ul')[0].style.display='none';
                 for(var m=0;m<sels.length;m++){
                     sels[m].state=true;
                 }
             }
//           写法二:
//           var showHidden = this.getElementsByTagName('ul')[0].style.display;
//           //让下拉菜单展开
//           //必须是现在隐藏着的,并且没有其它已经展开着的菜单,才允许展开
//           if(showHidden=='none' && flag){
//             this.getElementsByTagName('ul')[0].style.display = 'block';
//             //获取当前点击展开的菜单的索引
//             index = this.index;
//             //由于当前菜单已展开,所以flag值变为负
//             flag = false;
//           }
//           //让下拉菜单收起
//           //必须是现在显示着的,否则在一个菜单已展开的情况下,点击了一个原本就是收起着的菜单,flag也会变为true.
//           if(showHidden=='block') {
//             this.getElementsByTagName('ul')[0].style.display = 'none';
//             //当前展开的菜单被收起,所有菜单都收起,flag再变为true,下次点击可以展开菜单.
//             flag = true;
//           }
         };
         var selLi = sels[j].getElementsByTagName('li');
         //li点击事件
         for(var k=0; k<selLi.length; k++){
           selLi[k].onclick=function(){
               var content = this.innerHTML;
               var selSpan = this.parentNode.parentNode.getElementsByTagName('span')[0];
               selSpan.innerHTML = '<b class="arrow"></b>'+content;
               //删除点击的下拉菜单之后的所有下拉菜单
               //len是现有的下拉菜单的个数
               var len = sels.length;
               //l从点击的下拉菜单的索引开始
               for(var l=index+1; l<len; l++){
                   //删除当前点击的下拉菜单的后面的下拉菜单
                   selector.removeChild(sels[index+1])
               }
               //追加当前选择的地址的下级下拉菜单
               createSelector(this.value);           //this.value存贮了当前点击的城市名的cityid,决定了下一组数据的pid值
           };
         }
       }
     }
     //初始化
     createSelector(0);
   }



