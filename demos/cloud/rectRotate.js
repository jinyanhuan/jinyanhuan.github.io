/*按照鼠标位置绕任意轴旋转*/

/*矩阵动画*/
function math () {
	this.z=[0,0,1];
	this.mouse=[0,1,0];
	this.xiangl=[];
	this.theta=0;
    this.arr=[];

}
math.prototype={
    rotates:function () {
		    var theta=this.theta*Math.PI/180;
		    var xiangl=this.cha();
		    var sqrt = Math.sqrt(xiangl[0] * xiangl[0] + xiangl[1] * xiangl[1] + xiangl[2] * xiangl[2]);
			var u = xiangl[0] / sqrt;
			var v = xiangl[1] / sqrt;
			var w = xiangl[2] / sqrt;
			var newarr = [];
			newarr[0]=Math.cos(theta) + (u * u) * (1 - Math.cos(theta));
			newarr[1]=u * v * (1 - Math.cos(theta)) + w * Math.sin(theta);
			newarr[2]=u * w * (1 -Math.cos(theta)) - v * Math.sin(theta);
			newarr[3]=0;

		    newarr[4]=u * v * (1 - Math.cos(theta)) - w * Math.sin(theta);
			newarr[5]=Math.cos(theta) + v * v * (1 - Math.cos(theta));
			newarr[6]=w * v * (1 - Math.cos(theta)) + u * Math.sin(theta);
			newarr[7]=0;

			newarr[8]=u * w * (1 - Math.cos(theta)) + v * Math.sin(theta);
			newarr[9]=v * w * (1 - Math.cos(theta)) - u * Math.sin(theta);
			newarr[10]=Math.cos(theta) + w * w * (1 - Math.cos(theta));
			newarr[11]=0;

			newarr[12]=0;
			newarr[13]=0;
			newarr[14]=0;
			newarr[15]=1;

			this.arr=newarr;
		  },
	cha:function () {
	  var newarr=[];
	  var arr1=this.z;
	  var arr2=this.mouse;
	  var x1=arr1[0];
	  var y1=arr1[1];
	  var z1=arr1[2];
	  var x2=arr2[0];
	  var y2=arr2[1];
	  var z2=arr2[2];
	 return this.xiangl=[y1*z2-z1*y2,z1*x2-x1*z2,x1*y2-y1*x2];
	}
}

//