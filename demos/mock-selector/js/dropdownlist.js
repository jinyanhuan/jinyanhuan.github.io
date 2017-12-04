window.onload=function(){
    var menus = document.getElementsByClassName('menu');
    for(var i=0;i<menus.length;i++){
        var select = menus[i].getElementsByTagName('select')[0];
        var options = select.getElementsByTagName('option');
        //插入dl
        var aDL = document.createElement('dl');
        menus[i].appendChild(aDL);

        //设置皮肤颜色
        try{
            //火狐和谷歌里不会报错
            //获取某元素的某个data值: 元素.dataset.data名
            var color = select.dataset.color;
            aDL.className = color;
        }
        catch(err){
            //ie里弹出
            alert('不支持dataset属性')
        }

        //插入第一个dt
        var aDT = document.createElement('dt');
        aDL.appendChild(aDT);
        var aDtSpan = document.createElement('span');
        aDtSpan.innerHTML = options[0].innerHTML;
        aDT.appendChild(aDtSpan);
        var aDtB = document.createElement('b');
        aDT.appendChild(aDtB);
        var aDtI = document.createElement('i');
        aDtI.className = 'icon-arrowdown';
        aDtB.appendChild(aDtI);
        //用于存放dd元素
        var ddArr = [];
        //循环插入dd
        for(var j= 1;j<options.length; j++){
            var aDD = document.createElement('dd');
            aDL.appendChild(aDD);
//            暂时不知道这三个属性干嘛用的
            aDD.val = options[j].value;
            aDD.clsName = "icon-" + options[j].className;
            aDD.txt = options[j].innerHTML;
//            暂时不知道这三个属性干嘛用的
            aDD.style.top = 3*j+'px';
            aDD.style.left = j+'px';
            aDD.style.width = 300-j*2+'px';
            aDD.style.zIndex = options.length-j;
            var aDdSpan = document.createElement('span');
            aDD.appendChild(aDdSpan);
            aDdSpan.innerHTML = options[j].innerHTML;
            var aDdIcon = document.createElement('i');
            aDdIcon.className = 'icon-'+options[j].className;
            aDdSpan.appendChild(aDdIcon);
            ddArr.push(aDD)
        }

        //插入隐藏的input元素,用于提交
        var aInput = document.createElement('input');
        aInput.type='hidden';
        aInput.name='menu'+i;
        aInput.id='nav_menu'+i;
        menus[i].appendChild(aInput);

        //点击展开收缩
        $(aDT).click(function(){
            $(this).parents('.menu').toggleClass('cur');
            //展开
            if($(this).parents('.menu').hasClass('cur')){
                for(var k= 0,l=ddArr.length; k<l; k++){
                    //Math.random() * (上限 - 下限 + 1) + 下限
                    var angle = parseInt(Math.random() * (5 - -5 + 1) + -5);
                    $(ddArr[k]).css({'webkitTransform':'rotate('+angle+'deg)','top':65*(k+1)+'px','width':'300px','left':0,'webkitTransition':'0.3s top ease '+(l-k)*0.2+'s,0.3s width ease '+(l-k)*0.2+'s,0.3s -webkit-transform ease '+(l-k)*0.2+'s,0.3s left ease '+(l-k)*0.2+'s,0.5s color ease 0s,0.5s background ease 0s'});
                }
            }
            //收缩
            else {
                for(var k= 0,l=ddArr.length; k<l; k++){
                    $(ddArr[k]).css({'webkitTransform':'rotate(0deg)','top':3*(k+1)+'px','width':300-(k+1)*2+'px','left':(k+1)+'px','webkitTransition':'0.3s top ease '+k*0.2+'s,0.3s width ease '+k*0.2+'s,0.3s -webkit-transform ease '+k*0.2+'s,0.3s left ease '+k*0.2+'s,0.5s color ease 0s,0.5s background ease 0s'});
                }
            }
        });

        for(var m=0; m<ddArr.length; m++){
            ddArr[m].index = m;
            ddArr[m].onclick = function(){
                 //判断是否展开状态,如果不是,直接return
                if($(this).parents('.menu').hasClass('cur')){
                    //选择元素
                    var dt = $(this).parents('.menu').find('dt');
                    dt.addClass('selected');
                    var dtSpanContent = $(this).find('span').html();
                    dt.find('span').html(dtSpanContent);
                    //收起选项
                    for(var k= 0,l=ddArr.length; k<l; k++){
                        $(ddArr[k]).css({'webkitTransform':'rotate(0deg)','top':3*(k+1)+'px','width':300-(k+1)*2+'px','left':(k+1)+'px','webkitTransition':'0.3s top ease '+k*0.2+'s,0.3s width ease '+k*0.2+'s,0.3s -webkit-transform ease '+k*0.2+'s,0.3s left ease '+k*0.2+'s,0.5s color ease 0s,0.5s background ease 0s'});
                    }
                    //去掉cur类名
                    $(this).parents('.menu').removeClass('cur')
                }
                else {
                    return
                }
            }
        }


    }

    //把原来的select元素移除
    $('.menu').find('select').remove();

}
