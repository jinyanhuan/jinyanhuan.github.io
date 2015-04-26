//	  document.onselectionchange = function () {
//		   var range = document.selection.createRange();
//		   var srcele = range.parentElement();  //获取到当前元素
//		   var copy = document.body.createTextRange();
//		   copy.moveToElementText(srcele);
//	  
//		   for (cursor = 0; copy.compareEndPoints("StartToStart", range) < 0; cursor++) {
//			   copy.moveStart("character", 1);  //改变光标位置，实际上我们是在记录cursor的数量.
//		   }
//	  }
//	  
//	  
//	  function moveEnd(obj) {
//      obj.focus();
//      var r = document.selection.createRange();
//       //因为这里死从当前光标开始移动的(好像文本框的是从0算起.)所以我们需要拿到当前光标位置，然后就可以计算出要移动多少位了，这样就可以把光标移动到想要的位置了
//      r.moveStart('character', obj.innerText.length - cursor);
//      r.collapse(true);
//      r.select();
//      }



/*选择不同的心情*/
$(function(){
    var fourBirds = $('div','.four_birds');
    var fourMoods = $('.mood_box_bg')[0];
    var moodArr = ['#小幸福#每天都有点儿欣喜的事儿','#小愤怒#老纸就是看你不顺眼','#小郁闷#没有跨不过去的坎儿，没有过不去的事儿','#小惊讶#结局那么出乎意料']
    fourBirds.click(function(){
        var index = $(this).index()+1;
        fourMoods.className = 'mood_box_bg mood_'+index;
        $(fourMoods).find('.textarea').text(moodArr[index-1])
    })
});

$(function(){
    //获取当前页面中的36个心愿
    var pins = $('.mood_list');
    //获取放置心愿的盒子
    var pinBox = $('.mood_wall_washes');
    //创建一个数组,用于存放三栏的高度
    var heightArr = [0,0,0];
    //创建一个获取最低栏索引值的值
    var minIndex = 0;
    //创建最低高度的值
    var minHeight = 0;
    //创建最高高度的值
    var maxHeight = 0;
    //获取发表按钮
    var reportBtn = $('input.report');

    //调用排版数据的函数,传入的参数就是需要进行瀑布流排版的元素
    waterfall(pins);



    //加载新数据
    $(window).scroll(function(){
        if(checkScrollSite()){
            var pinsLoad = pins.clone();   //用作预览效果,复制到36个心情,实际需要动态创建
            //将新元素插入到盒子中
            pinsLoad.appendTo(pinBox);
            //将新元素按照瀑布流的样式进行排版
            waterfall(pinsLoad);
        }
    });

    //发表新说说
    reportBtn.click(function(){
        //判断是否输入了说说内容,如果么有输入内容,则退出
        var wishContent = $('.textarea').text();
        if( wishContent=='' ||
            wishContent=="#小幸福#每天都有点儿欣喜的事儿" ||
            wishContent=="#小愤怒#老纸就是看你不顺眼" ||
            wishContent=="#小郁闷#没有跨不过去的坎儿，没有过不去的事儿"
            || wishContent=="#小惊讶#结局那么出乎意料"){
            $('.textareaBox').find('.tip').show();
            $('.textarea').text('').focus();
            return
        }

        //发表新说说
        var aNewWish = pins.eq(0).clone();
        var aNewWishName = $(this).parents('.mood_box_bg').find('input.nick').val();
        var aNewWishContent = $(this).parents('.mood_box_bg').find('.textarea').text();
        aNewWish.find('.name').html(aNewWishName);
        aNewWish.find('.mood_content').text(aNewWishContent);
        aNewWish.find('.time').text('0秒前');
        aNewWish.find('.z_c').eq(0).html('赞(<em></em>)');
        aNewWish.find('.z_c').eq(1).html('评论(<em></em>)');
        //将获取到的新说说插入许愿墙中最低的一栏的顶部
        aNewWish.appendTo(pinBox).css({'top':'-260px','left':'25px','opacity':0}).animate({'top':'20px','left':25+minIndex*290+'px','opacity':1});

        //获取插入新说说的那一栏的left值
        var nowLeft = 25+minIndex*290+'px';
        //获取最新的说有说说
        var nowPin = $('.mood_list');
        //获取插入新说说的那一栏其余说说需要往下移动的距离,也就是新插入的说说的高度+20
        var topMoveStep = aNewWish.innerHeight()+20;

        for(var i=0;i<nowPin.length;i++){
            //获取处于新增说说的一栏的元素,并往下移动
            //注:其实,新的aNewWish也是符合条件的元素之一,但是由于执行到这段代码的时候,它还在运动中,所以,它没有下移.
            if(nowPin.eq(i).css('left')==nowLeft){
                topMove(nowPin.eq(i),topMoveStep);
            }
        }
        //重新定义三栏高度的数组值
        heightArr[minIndex] += topMoveStep;
        //重新获取最低栏的索引值和最低高度,用以下一次插入新说说或者加载新数据
        getMin();
    });

    //将元素的top值增加指定值的函数
    function topMove(ele,step){
        var nowHeight = ele.position().top;
        ele.css({top:nowHeight+step+'px'})
    }

    //排版元素函数
    function waterfall(ele){
        for (var i=0; i<36; i++) {
            //元素的top值,就是当前最低高度+20间距.
            //元素的left值,就是最低栏的索引值*290+25.
            ele.eq(i).css({'opacity':'0','top':minHeight+20+'px','left':25+minIndex*290+'px'}).animate({'opacity':'1'},600);
            //插入元素后,将元素的高度加给所在栏的高度数组值,还要加20的间距值
            heightArr[minIndex] += ele.eq(i).innerHeight()+20;
            //根据新的高度数组,重新获取最低高度值
            getMin();
        }
        //元素全部插入后,获取高度数组中最高的值
        getMax();
        //盒子的高度就是最高值+60
        pinBox.css({height:maxHeight+60+'px'})
    }

    function getMax(){
        //这里用作比较的初始高度值可以是高度数组中的任意元素,因为只是要获取最高高度,无关索引值
        maxHeight = heightArr[minIndex];
        for(var i=0;i<3;i++){
            if(heightArr[i]>maxHeight){
                maxHeight = heightArr[i];
            }
        }
    }

    function getMin(){
        //必须要把初始用作比较的最低高度设置为索引值为minIndex的这个高度
        //这样,如果minIndex所在的栏是最低的,那么,索引值没有变化,依然是minIndex
        //但如果初始比较值设为heightArr[0],那么,当第0栏是最小的时候,for循环里的一句一句都不执行,不执行的话,minIndex就不会变成0,还是上一次的minIndex,而不是最低栏的index值
        minHeight = heightArr[minIndex];
        for(var i=0;i<3;i++){
            if(heightArr[i]<minHeight){
                minHeight = heightArr[i];
                minIndex = i;
            }
        }
    }

    //判断是否需要加载新数据
    function checkScrollSite(){
        //获取最后一个元素
        var lastPin = $('.mood_list').last()[0];
        //获取最后一个元素距离页面顶端的距离
        var lastPinTop = lastPin.offsetTop;
        //获取显示器的高度
        var screenHeight = window.screen.height;
        //获取页面滚动的距离
        var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        //判断滚动距离是否超过了最后一个元素距离页面顶端的距离,如果是的话,则返回true,不是的话返回false
        if(lastPinTop<scrollTop+screenHeight/3){
            return true
        }
        else {
            return false
        }
    }
});

//输入心情的时候,超出出现滚动条
//$(function(){
//    $('.textarea').keydown(function(){
//        $('.textareaBox').find('.tip').hide();
//        var textHeight = $(this).innerHeight();
//        if(textHeight>58){
//            $('.scroll-pane').jScrollPane();
//            $('.textarea').focus()
//        }
//    });
//});

//获得焦点清空默认提示
$(function(){
    //用focus事件,清空后无法获得焦点
    $('.textareaBox').click(function(){
        $(this).find('.textarea').focus();
        var wishContent = $(this).find('.textarea').text();
        if(wishContent=="#小幸福#每天都有点儿欣喜的事儿" ||
           wishContent=="#小愤怒#老纸就是看你不顺眼" ||
           wishContent=="#小郁闷#没有跨不过去的坎儿，没有过不去的事儿" ||
           wishContent=="#小惊讶#结局那么出乎意料"){
           $(this).find('.textarea').text('');
        }
    })
});


//评论功能
$(function(){
    var comment = $('.wish_info').find('span.z_c_c');
   
    comment.live({
       click: function(){
	       $('.pop_win_bg').show();
	       $('.wish_comment').show();
	   }
    });
    $('.wish_comment').find('.close').live({
       click: function(){
	       $('.pop_win_bg').hide();
	       $('.wish_comment').hide();
	   }   
    });

    var submitComment = $('.wish_comment .submit_comment');
    var submitTip = $('.qz_msgbox_layer_wrap');
    submitComment.click(function(){
        var commentContent = $('.wish_comment').find('.comment_textarea').text();
        if(commentContent==''||commentContent=='我也说一句'){
            submitTip.find('.qz_msgbox_layer').html('<span class="gtl_ico_hits"></span>请输入内容<span class="gtl_end"></span>');
            submitTip.show();
            var submitTipHide = setTimeout(function(){
                submitTip.hide();
                clearInterval(submitTipHide)
            },2500)
            return false
        }
        $('.pop_win_bg').hide();
        $('.wish_comment').hide();
        submitTip.find('.qz_msgbox_layer').html('<span class="gtl_ico_succ"></span>评论成功<span class="gtl_end"></span>');
        submitTip.show();
        var submitTipHide = setTimeout(function(){
            submitTip.hide();
            clearInterval(submitTipHide)
        },2500)
    })
})


//计算已经输入的字符数
$(function(){
   var str=$('.comment_textarea')[0];              //获得文本域
   $(str).click(function(){
        if($(this).text()=='我也说一句'){
		    $(this).text('')
		}
   });
   var num=$('.range').find('span');
   str.onkeyup=str.onkeydown=function(){           //为文本域的onkeyup和onkeydown添加事件
   var $length=zifu(str.innerHTML);                //每次键入都通过zifu函数获取文本的长度
//   var $max=200;                                   //定义最大值
   var showLength = Math.floor($length/2);
   num.text(showLength)
   };
   
   function zifu(strValue){
   var num=0;
      for(i=0;i<strValue.length;i++){
          if(strValue.charCodeAt(i)>=0 && strValue.charCodeAt(i)<=255){
		  num++;
		  }
		  else{
		  num+=2;
		  }
	  }
   return num;
   }

})










