if(!Function.prototype.bind){
    Function.prototype.bind= function(obj){
        //保存调用bind的方法
        var self = this;
        //保存调用bind时的参数
        var selfArg = Array.prototype.slice.call(arguments,1);
        //当使用new方式来调用bind后的方法,需要使用bridge来继承self的原型;
        var bridge = function(){};
        bridge.prototype = self.prototype;
        //创建新的函数
        var _self = function(){
            //调用新函数时,将调用新函数时传入的参数和bind时的参数合并
            var newArg = selfArg.concat(Array.prototype.slice.call(arguments));
            //返回执行self方法,改变指针和参数
            //如果是使用new方法调用,那么this上下文就是实例化以后的实例,而不是bind时传入的obj,这个暂时想不到有什么例子需要这样调用
            return self.apply(this instanceof bridge? this : obj||{} , newArg)
        };
        _self.prototype = new bridge();
        //返回新创建的函数
        return _self;
    }
}

