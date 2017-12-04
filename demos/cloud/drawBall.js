function drawBall(){
    this.length = 25;   //定义需要循环的次数,也就是里的个数
    this.radii = 250;   //定义球半径
    this.angles = [];   //定义一个用于存放每个元素角度的空数组
    this.titles = [];   //定义一个用于存放每个元素定义好样式的空数组
    this.tags = ['javascript','jquery','html5','css3','php','linux','java','ps','flash','as','firework','webstorm','dw','editplus','3Dmax','mysql','ae'];
}
drawBall.prototype={
    //为drawBall的原型添加setAngle方法,此方法用于计算各个li的球坐标的两个角度θ和φ
    setAngle:function(){
        var num = 0;
        //注意这里面的num...只需要保证每一圈中的每个标签的φ值,差值刚好是一个单位,而无需保证是不是第一个一定要从0度开始,所以,没有必要每次都清零num值,就算num值很大,每差360度就相当于又回到0.
        for(var i=0;i<this.length;i++){
            //每此循环,都创建一个angle对象,该对象里有theta和phi两个属性值
            var angle = {};
            //第一圈只有一个标签,是在球的最顶上,θ就是180°,当θ是180°时,φ是多少就无所谓了
            if(i==0){
                angle.theta = Math.PI;
                angle.phi = 0;
            }
            //第二圈有三个标签,一共有5圈,所以,θ就是180°分成六分,取其中的5份.
            //φ总共是360°,三个标签均分,每单位是360°/3,每次都多加一份.
            if(i>0 && i<4){
                angle.theta = Math.PI/6*5;
                angle.phi = Math.PI*2/3*num;
                num++;
            }
            //第三圈有五个标签,一共有5圈,所以,θ就是180°分成六分,取其中的4份.
            //φ总共是360°,五个标签均分,每单位是360°/5,每次都多加一份.
            if(i>3 && i<9){
                angle.theta = Math.PI/6*4;
                angle.phi = Math.PI*2/5*num;
                num++;
            }
            //第四圈有七个标签,一共有5圈,所以,θ就是180°分成六分,取其中的3份.
            //φ总共是360°,七个标签均分,每单位是360°/7,每次都多加一份.
            if(i>8 && i<16){
                angle.theta = Math.PI/6*3;
                angle.phi = Math.PI*2/7*num;
                num++;
            }
            if(i>15 && i<21){
                angle.theta = Math.PI/6*2;
                angle.phi = Math.PI*2/5*num;
                num++;
            }
            if(i>20 && i<24){
                angle.theta = Math.PI/6;
                angle.phi = Math.PI*2/3*num;
                num++;
            }
            if(i==24){
                angle.theta = 0;
                angle.phi = 0;
            }
            //每次循环完,都把得到的angle对象存到angles数组中
            this.angles.push(angle)

        }
    },
    //为drawBall的原型添加draw方法,将setAngle方法得到的角度值一一运算出x,y,x值,并且给各个li添加样式,将得到的所有li放入titles数组中
    draw:function(){
        //先执行一遍setAngle,得到各个li的角度值组成的数组
        this.setAngle();
        var radii = this.radii;
        for(var i=0;i<this.length;i++){
            var aLi = document.createElement('li');
            var theta = this.angles[i].theta;
            var phi = this.angles[i].phi;
            var x = radii*Math.sin(theta)*Math.sin(phi)+210;    //屏幕的x值相当于计算球坐标系中的y值
            var y = radii*Math.cos(theta)+220;                  //屏幕的y值相当于计算球坐标系中的z值
            var z = radii*Math.sin(theta)*Math.cos(phi);        //屏幕的z值相当于计算球坐标系中的x值
            aLi.innerHTML=this.tags[i];
            aLi.style.cssText='left:'+x+'px;top:'+y+'px';
            setCss3(aLi,{'transform':'translateZ('+z+'px) rotateY('+phi+'rad) rotateX('+(theta-Math.PI/2)+'rad)'});
            if(i==0){

                //当i=0的时候,有个系统bug,z会出现意外值,所以需要单独定义
                //alert(z);
                setCss3(aLi,{'transform':'translateZ('+0+'px) rotateX('+(theta-Math.PI/2)+'rad)'});
            }
            this.titles.push(aLi);
        }
    }
}
