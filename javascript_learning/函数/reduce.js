'use strict';
// ******** Example 1

function connect(x,y){
    return 10 * x + y;
}

var list = [1,2,3,4,5];
var result = list.reduce(connect);

console.log(result);