'use strict';

var arr = ['Apple', 'pear', 'orange'];
console.log(arr.every(function (s) {
    return s.length > 0;
})); // true, 因为每个元素都满足s.length>0

console.log(arr.every(function (s,index) {
    return s.toLowerCase() === s;
})); // false, 因为不是每个元素都全部是小写

console.log(arr.every(function (s,index) {
    return typeof index === 'number';
})); // true, index都是数字