'use strict';
// ******** Example 1

function connect(list){
    return list.reduce(function(x,y){
        return 10 * x + y;
    })
}

var list = [1,2,3,4,5];
var result = connect(list);
console.log(result);


function connect_later(a){
    function connect(){
        return a.reduce(function(x,y){
            return 10 * x + y;
        })
    }
    return connect;
}
//当connect_later返回函数sum时，相关参数和变量都保存在返回的函数中
//当一个函数返回了一个函数后，其内部的局部变量还被新函数引用

var f = connect_later(list);
console.log(f());

//每一个都是新的函数
/* 问题：函数相同的条件是什么？*/
var f1 = connect_later(list);
var f2 = connect_later(list);
console.log(f1 === f2); // false

/* 创建的新的函数，会在调用的时候才同一把变量代入进去*/

function count() {
    var arr = [];
    for (var i=1; i<=3; i++) {
        arr.push(function () {
            return i * i;
        });
    }
    return arr;
}

var results = count();
var f1 = results[0];
var f2 = results[1];
var f3 = results[2];
console.log(f1());
console.log(f2());
console.log(f3());
//返回闭包时牢记的一点就是：返回函数不要引用任何循环变量，或者后续会发生变化的变量。
//如果一定要引用循环变量那么就要让这个函数立即执行。