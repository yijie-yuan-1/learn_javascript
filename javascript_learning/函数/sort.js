'use strict';

var a = [10, 20, 1, 2].sort();
console.log(a);

//数字从小到大排序

a.sort(function (x, y) {
    if (x < y) {
        return -1;
    }
    if (x > y) {
        return 1;
    }
    return 0;
});//sort()方法会直接对Array进行修改，它返回的结果仍是当前Array
console.log(a); // [1, 2, 10, 20]

//字母排序
var arr = ['Google', 'apple', 'Microsoft'];
arr.sort(function (s1, s2) {
    var x1 = s1.toUpperCase();
    var x2 = s2.toUpperCase();//大写之后排序
    if (x1 < x2) {
        return -1;
    }
    if (x1 > x2) {
        return 1;
    }
    return 0;
}); // ['apple', 'Google', 'Microsoft']

console.log(arr);