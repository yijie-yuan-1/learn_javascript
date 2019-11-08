'use strict';

var arr = ['Apple', 'pear', 'orange'];
arr.forEach(console.log); // 依次打印每个元素

var list = ['Apple', 'pear', 'orange'];
list.forEach(function(element,index,self){
    console.log(element);
    return false;//没有影响
}); // 依次打印每个元素

console.log(list);

