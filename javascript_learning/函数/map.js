'use strict';
// ******** Example 1

function squre(x){
    return x ** 2;
}

var list = [1,2,3,4,5];
var squre_list = list.map(squre);

console.log(squre_list);