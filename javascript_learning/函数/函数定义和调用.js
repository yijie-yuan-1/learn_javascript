function no_return(){
}

function return_nothing(){
    return;
}
// 定义函数的第一种方式
function abs_method_1(x){
    if(x>=0){
        return x;
    }
    else{
        return -x;
    }
}
// 定义函数的第二种方式
var abs_method_2 = function(x){
    if(x>=0){
        return x;
    }else{
        return -x;
    }
}

var abs_method_bro = abs_method_2;

console.log(no_return());
console.log(return_nothing());
console.log(abs_method_1(-999));
console.log(abs_method_2(-999));
console.log(abs_method_bro(-999))
console.log(abs_method_2(-999,1,3,2,99,-82830));
console.log(abs_method_2());


var add = function(a,b){
    return a + b;
}

console.log(add(1,2));
console.log(add(1));
console.log(add(1,));

// 参数检查
function learn_typeof(a,b,...rest){
    console.log('*****************')
    if (arguments.length !== 2){
        console.log("You should input 2 arguments!")
    }
    if (typeof a !== typeof b){
        console.log('a and b do not match');
    }else if (typeof a !== 'number' ){
        // throw 'Not a number';
        console.log('Not a number')
    }else if(typeof a !== 'string'){
        // throw 'Not a string';
        console.log('Not a string')
    }
    for (var i=0; i<2; i++) {
        console.log('arg_length='+arguments.length);
        console.log('arg ' + i + ' = ' + arguments[i]); // 10, 20, 30
    }
    for (var i=0; i<rest.length; i++) {
        console.log('rest arg ' + i + ' = ' + arguments[i]); // 10, 20, 30
    }

    return a + b;
}
console.log(learn_typeof(1,2));
console.log(learn_typeof('a','b'));
console.log(learn_typeof(1,'b'));//把1当作字符串
console.log(learn_typeof(1,));
console.log(learn_typeof(1,2,3,4,5));
console.log('*****************')

// Javascript will automatically add semicolon
function foo1() {
    return
        { name: 'foo' };
}
function foo2() {
    return{ name: 'foo' };
}
function foo3() {
    return{ 
        name: 'foo' 
    };
}
function foo4() {
    return{ 
        name: 'foo',//对象之间用逗号隔开
    };
}

console.log(foo1()); // undefined
console.log(foo2());
console.log(foo2().name);
console.log(foo3());
console.log(foo3().name);
console.log(foo4());
console.log(foo4().name);

