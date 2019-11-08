'use strict';
// // ******** Example 1

// var list = [1,2,3,'a','b','c',1,2,3,'a'];

// var result = list.filter(function(element){
//     return typeof element === 'number';
// });

// console.log(result);

// // ******** Example 2 filter接收的回调函数

// var list = [1,2,3,'a','b','c',1,2,3,'a'];

// var result = list.filter(function(element,index,self){

//     return typeof element === 'number' & index === 1;
// });

// console.log(result);

// // ******** Example 3 filter接收的回调函数
// /* 接受的是按照顺序 先element再index再self */
// var list = [1,2,3,'a','b','c',1,2,3,'a'];

// var result = list.filter(function(index,element,self){
//     console.log('element='+element);
//     console.log('index='+index);
//     return true;
// });

// var result = list.filter(function(element,index,self){
//     console.log('element='+element);
//     console.log('index='+index);
//     return true;
// });

// // ******** Example 4 去除重复元素
// var list = [1,2,3,'a','b','c',1,2,3,'a'];

// var result = list.filter(function(element,index,self){
//     return self.indexOf(element) === index;//indexOf返回第一个元素的位置
// });

// console.log(result);
