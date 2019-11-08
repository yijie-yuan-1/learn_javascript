// //******* Example 1

// var x = -500;

// function foo(){
//     var x=1;
// }

// foo()
// console.log(x);//x=-500

// //******* Example 2

// var x = 500;

// function add_500(x){
//     return x+500;
// }

// console.log(add_500(0));

// //******* Example 3
// /* 函数内部可以访问函数外部的变量 */

// function fun1(){
//     var x = 1;
//     var y = 1;
//     function fun2(){
//         var z = 1;
//         console.log('fun2,x=' + x);
//         console.log('fun2,y=' + y);
//         console.log('fun2,z=' + z);
//     }
//     fun2();
//     console.log('fun1,x=' + x);
//     console.log('fun1,y=' + y);
//     console.log('fun1,z=' + z);// z is not defined
// }
// fun1();

// //******* Example 4
// /* 变量提升：js运行函数会先扫描所有的变量,对其进行声明，注意：不会赋值 */

// function foo(){
//     x = 2;
//     console.log(x);
//     var x = 1;
//     console.log(x);
// }

// function foo2(){
//     x = 2;
//     console.log(x);
//     x = 1;
//     console.log(x);
// }

// foo();
// foo2();

// //******* Example 5
// /* 'use strict' */

// 'use strict';
// function foo(){
//     x = 2;
//     console.log(x);
//     var x = 1;
//     console.log(x);
// }

// function foo2(){
//     x = 2;
//     console.log(x);
//     x = 1;
//     console.log(x);
// }

// foo();
// foo2();

// //******* Example 6
// /* 全局对象 global, 因为node.js的顶层作用域不是全局作用域，所以这里试不了太多东西 */

// 'use strict';

// var name='me';
// console.log(name);
// console.log(global.name);

// // function foo(){
// //     console.log('test windows');
// // }

// var foo=function(){
//     console.log('test windows');
// }

// foo();
// global.foo();
// console.log(global.foo());//Guess what will be printed?

// //******* Example 7
// /* 把全局变量绑定到同一个全局变量中，避免不同js文件之间的冲突 */

// 'use strict'
// var all_global={};

// all_global.name = 'me';
// all_global.version = '1.0';
// all_global.foo = function(){
//     return'foo';
// }

// console.log(all_global.foo());



// //******* Example 8
// /* for循环中定义的变量|块级作用域 */

// 'use strict';
// function foo() {
//     for (let i=0; i<100; i++) {
//         //
//     }
//     i += 100;
// }

// foo();

// // function foo() {
// //     for (var i=0; i<100; i++) {
// //         //
// //     }
// //     i += 100; // 仍然可以引用变量i
// // }

// //******* Example 9
// /* Define a constant */

// 'use strict';

// const PI = 3.14;
// PI = 3; // 某些浏览器不报错，但是无效果！
// console.log(PI); // 3.14

// //******* Example 10
// /* 解构赋值 */

// 'use strict';
// var [x, y, z] = ['1', '2', '3'];// 如果换成let会怎么样？
// console.log('x='+x,';y='+y,';z='+z);

// var [x, y] = ['1', ['2', '3']];
// console.log('x='+x,';y='+y);

// var [x, y, z] = ['1', ['2', '3']];
// console.log('x='+x,';y='+y,';z='+z);

// var [x, [y, z]] = ['1', ['2', '3']];
// console.log('x='+x,';y='+y,';z='+z);
 
// var [,,z] = ['1', '2', '5', '6'];
// console.log('x='+x,';y='+y,';z='+z);

// var person = {
//     name: '小明',
//     age: 20,
//     gender: 'male',
//     passport: 'G-12345678',
//     school: 'No.4 middle school'
// };
// var {name, age, passport} = person;
// // name, age, passport分别被赋值为对应属性:
// console.log('name = ' + name + ', age = ' + age + ', passport = ' + passport);

// var person = {
//     name: '小明',
//     age: 20,
//     gender: 'male',
//     passport: 'G-12345678',
//     school: 'No.4 middle school',
//     address: {
//         city: 'Beijing',
//         street: 'No.1 Road',
//         zipcode: '100001'
//     }
// };
// var {name:nickname, address: {city, zip, zipc=true}} = person;// zip不存在的，是zipcode
// console.log('name = ' + name + ', city = ' + city + ', zip = ' + zip + ', zipc = ' + zipc); //如果对应的属性不存在，变量将被赋值为undefined
// console.log('name = ' + name + ', city = ' + city + ', zip = ' + zip + ', zipc = ' + zipc); 
// console.log('name = ' + name + ', city = ' + city + ', zip = ' + zip + ', address = ' + address);

// //******* Example 11

// var x, y;
// {x, y} = { name: 'me', x: 100, y: 200};

// //******* Example 12

// var x, y;
// ({x, y} = { name: 'me', x: 100, y: 200});
// console.log('x=' + x + ";y=" + y);


// //******* Example 13

// var x=1, y=2;
// [x, y] = [y, x];
// console.log('x=' + x + ";y=" + y);

// //******* Example 14

// var now = {
//     year: 2019,
//     month: 11,
//     day: 8,
//     hour: 1,
//     minute: 35,
//     second: 12,
// }

// function buildDate({year, month, day, hour=0, minute=0, second=0}) {
//     return new Date(year + '-' + month + '-' + day + ' ' + hour + ':' + minute + ':' + second);
// }

// var now_date=buildDate(now);
// console.log(now_date);