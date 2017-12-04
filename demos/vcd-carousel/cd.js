/**
 * Created with JetBrains WebStorm.
 * User: 黑丝小白兔
 * Date: 13-11-5
 * Time: 下午7:07
 */

window.onload = function(){
  var cdMain = document.getElementsByClassName('cd_main')[0];
  var cd = cdMain.getElementsByClassName('cd')[0];
  var cdBox = cdMain.getElementsByTagName('ul')[0];
  var cdImages = cdBox.getElementsByTagName('li');
  var link = cdMain.getElementsByTagName('a')[0];
  var tabs = cdMain.getElementsByClassName('links')[0].getElementsByTagName('span');
  var length = tabs.length;
  var index = 0;
  var time = null;
  var flag = true;

//切换函数,传入true,表示click切换,传入false或者不传,表示自动切换
  function slide(way){
    //开始切换就把flag定为false,禁止再点击
    flag = false;
    for(var i=0; i<length; i++) {
      cdImages[i].className = tabs[i].className = "";
    }
    //如果是自动切换,是显示下一张,计算下一张的index值
    //如果是点击切换,在点击函数中已经定义了index值,直接就是点击的index值
    if(!way){
      index = index==(length-1) ? 0: ++index;
    }
    tabs[index].className='cur';
    cd.className="cd scroll";
    //cd移出动画结束后再显示下一张,再让cd移回去
    setTimeout(function(){
      cdImages[index].className='cur';
      cd.className="cd";
      link.href = cdImages[index].getAttribute("href");
    },2000);
    //直到整个切换过程结束,在开启flag
    setTimeout(function(){
      flag = true;
    },3500)
  }

  function setSlide(){
    time = setInterval(slide,6000)
  }
  setSlide();

  cdMain.onmouseover = function(){
    clearInterval(time);
  };
  cdMain.onmouseout = function(){
    setSlide();
  };

  for(var i=0; i<length; i++) {
    tabs[i].index = i;
    tabs[i].onclick = function(){
      if(!flag) {
        return;
      }
      clearInterval(time);
      index = this.index;
      slide(true);
    }
  }

}