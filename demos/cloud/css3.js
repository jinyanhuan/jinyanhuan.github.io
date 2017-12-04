
 function setCss3(ele,cssObj){
     //循环样式json对象,i就是属性名,cssObj[i]就是属性值
     for(var i in cssObj){
         //需要将原来的属性值变为符合style标准的格式,即'-'要去掉,'-'后的第一个字母要变为大写.
         var newi = i;
         //找到'-'所在的位置
         var index = i.indexOf('-');
         //如果index>0,表示属性值中存在'-',需要进行替换
         if(index>0){
             //从'-'所在的位置开始,截取两个字符,被替换
             //截取'-'后一个位置的字符,并改为大写,替换
             newi = newi.replace(newi.substr(index,2),newi.charAt(index+1).toUpperCase());
         }
         //不带有css3 hack的属性值不需要进行首字母替换大写
         ele.style[newi] = cssObj[i];
         //带有css3 hack的属性值首字母替换为大写.
         newi = i.replace(i.charAt(0),i.charAt(0).toUpperCase());
         ele.style['webkit'+newi] = cssObj[i];
         ele.style['moz'+newi] = cssObj[i];
         ele.style['ms'+newi] = cssObj[i];
     }
 }