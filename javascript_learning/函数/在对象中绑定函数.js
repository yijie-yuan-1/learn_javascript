// // ********* example 1

// 'use strict';
// var info = {
//     name: 'me',
//     birth: 1997,
//     age: function(){
//         var y = new Date().getFullYear();
//         console.log(y);
//         console.log(this);
//         console.log(this.birth);
//         console.log(this.name);
//         console.log(y-this.birth);
//         return y - this.birth;
//     },
// };

// console.log(info.age());//只有在以对象方法调用的时候this才能够起作用，单独使用这个函数就不行。

// var {name, birth, age} = info;
// console.log('name='+name+';birth='+birth+';age='+age());
// /* 
// 由于这是一个巨大的设计错误，要想纠正可没那么简单。
// ECMA决定，在strict模式下让函数的this指向undefined，因此，在strict模式下，会得到一个错误。
//  */

// // ********* example 2 this只在调用的函数内有用，而在函数内的函数中不起作用

// 'use strict';
// var info = {
//     name: 'me',
//     birth: 1997,
//     age: function(){
//         function function_in_function(){
//             var y = new Date().getFullYear();
//             return y - this.birth;
//         }
//         return function_in_function;
//     },
// };

// console.log(info.age());
// console.log(info.age()());

// // ********* example 3 用that捕获this
// 'use strict';
// var info = {
//     name: 'me',
//     birth: 1997,
//     age: function(){
//         var that = this;
//         function function_in_function(){
//             var y = new Date().getFullYear();
//             return y - that.birth;
//         }
//         return function_in_function;
//     },
// };

// console.log(info.age()());

// // ********* example 4 用apply指定this的指向

// 'use strict';
// var info = {
//     name: 'me',
//     birth: 1997,
//     age: function(){
//         var y = new Date().getFullYear();
//         return y - this.birth;
//     },
// };

// var {name, birth, age} = info;
// console.log('name='+name+';birth='+birth+';age='+age.apply(info,[]));


// // ********* example 5 用apply指定this的指向

// 'use strict';
// var info = {
//     name: 'me',
//     birth: 1997,
//     age: function(){
//         function function_in_function(){
//             var y = new Date().getFullYear();
//             return y - this.birth;
//         }
//         return function_in_function;
//     },
// };

// console.log(info.age());
// console.log(info.age().apply(info,[]));

// // ********* example 6 装饰器
// 'use strict';

// var count = 0;

// var foo = function () {
//     console.log(1);
//     return 1; // 调用原函数
// };

// var old_foo = foo; // 保存原函数

// var foo = function() {
//     count = count + 1;
//     return old_foo(arguments);
// }

// foo();
// foo();

// console.log('counts=', count);

// // ********* example 7 apply装饰器

// 'use strict';
// var info = {
//     name: 'me',
//     birth: 1997,
//     age: function(){
//         function function_in_function(){
//             var y = new Date().getFullYear();
//             return y - this.birth;
//         }
//         return function_in_function;
//     },
// };

// var count = 0;
// var age = function(){
//     count += 1;
//     return info.age(arguments).apply(info,[]);
// }

// console.log(age());


// // ********* example 8 this的使用

// 'use strict';
// var info = {
//     name: 'me',
//     birth: 1997,
//     age: function(){
//         var this_info = {
//             a: this.birth,
//             b: function(){
//                 var y = new Date().getFullYear();
//                 return y - this.a;
//             }
//         }
//         console.log(this_info.a);
//         return this_info.b;
//     },
// };

// console.log(info.age());
// console.log(info.age().apply(this_info,[]));