#Javascript - 函数 - generator

1. yield

   ```javascript
   'use strict'
   
   function* foo(x){
       yield x + 1;
       yield x + 2;
       return x + 3;
   }
   
   var f = foo(0);
   console.log(f.next());
   console.log(f.next());
   console.log(f.next());
   console.log(f.next());
   
   var g = foo(0)
   
   console.log(g.next().value);
   console.log(g.next().value);
   console.log(g.next().value);
   console.log(g.next().value);
   
   console.log(foo(0).next());
   console.log(foo(0).next());
   console.log(foo(0).next());
   ```

   输出：

   ```shell
   { value: 1, done: false }
   { value: 2, done: false }
   { value: 3, done: true }
   { value: undefined, done: true }
   1
   2
   3
   undefined
   { value: 1, done: false }
   { value: 1, done: false }
   { value: 1, done: false }
   ```

   

2. 斐波拉契数列

   ```javascript
   'use strict'
   
   function* fib(max) {
       var
           t,
           a = 0,
           b = 1,
           n = 0;
       while (n < max) {
           yield a;
           [a, b] = [b, a + b];
           n ++;
       }
       return;
   }
   
   var f = fib(10);
   for (var i of f){
       console.log(i);
   }
   ```

   output:

   ```shell
   0
   1
   1
   2
   3
   5
   8
   13
   21
   34
   ```

3. 一个自增id函数

   ```javascript
   'use strict';
   function* next_id() {
       var count = 0;
       while(true){
           count += 1;
           yield count;
       }
       return;
   }
   // 测试:
   var
       x,
       pass = true,
       g = next_id();
   for (x = 1; x < 100; x ++) {
       if (g.next().value !== x) {
           pass = false;
           console.log('测试失败!');
           break;
       }
   }
   if (pass) {
       console.log('测试通过!');
   }
   ```

   