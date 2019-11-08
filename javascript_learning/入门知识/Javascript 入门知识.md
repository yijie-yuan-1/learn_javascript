#Javascript 入门知识

只有自己觉得需要注意的内容，不是全基础覆盖。



给一个变量赋值

```javascript
var a = 1
```

查看一个变量的值

```javascript
console.log(a)
```

## 数据类型

###number

```javascript
-99; // 负数
NaN; // NaN表示Not a Number，当无法计算结果时用NaN表示
Infinity; // Infinity表示无限大，当数值超过了JavaScript的Number所能表示的最大值时，就表示为Infinity
```

###比较运算符

- 关于`==`和`===``

  `==`比较，它会自动转换数据类型再比较，很多时候，会得到非常诡异的结果；

  `===`比较，它不会自动转换数据类型，如果数据类型不一致，返回`false`，如果一致，再比较。

  所以，*不要*使用`==`比较，始终坚持使用`===`比较。

  另外，`NaN`这个特殊的Number与所有其他值都不相等，包括它自己。

###Null和Undefine

`null`表示一个“空”的值，它和`0`以及空字符串`''`不同，`0`是一个数值，`''`表示长度为0的字符串，而`null`表示“空”。

### 数组

数组用`[]`表示，元素之间用`,`分隔。

虽然有其他的建立数组方式，出于代码的可读性考虑，强烈建议直接使用`[]`。

索引的起始值为`0`

读取：list[1]

### 对象

一组由键-值组成的无序集合

要获取一个对象的属性，我们用`对象变量.属性名`的方式：

### 变量

使用变量的时候或者在使用变量之前先声明，申明一个变量用`var`语句

javascript是动态语言



- 变量名

  变量名是大小写英文、数字、`$`和`_`的组合，且不能用数字开头。变量名也不能是JavaScript的关键字，如`if`、`while`等

- Strict模式

  如果一个变量没有通过`var`申明就被使用，那么该变量就自动被申明为全局变量。

  在strict模式下运行的JavaScript代码，强制通过`var`申明变量，未使用`var`申明变量就使用的，将导致运行错误。启用strict模式的方法是在JavaScript代码的第一行写上：

  ```javascript
  'use strict';
  ```

##字符串

### 多行字符串

用反引号表示

### 操作字符串

- 获取字符串某个指定位置的字符

  ```javascript
  var s = 'Hello, world!';
  s[0]; // 'H'
  ```

- 内置函数

  `toUpperCase()`: 大写字符串

  `toLowerCase()`: 小写字符串

  `indexOf()`: 会搜索指定字符串第一个字母出现的位置，如果没有找到指定的子串，返回-1

  `substring()`: 返回制定索引区间的字符串，e.g. (1,5),则从1开始不包括5


## 数组

### length属性

```javascript
var arr = [1, 2, 3.14, 'Hello', null, true];
arr.length; // 6
```

###直接给`Array`的`length`赋一个新的值会导致`Array`大小的变化：

```javascript
var arr = [1, 2, 3];
arr.length; // 3
arr.length = 6;
arr; // arr变为[1, 2, 3, undefined, undefined, undefined]
arr.length = 2;
arr; // arr变为[1, 2]
```

如果通过索引赋值时，索引超过了范围，同样会引起`Array`大小的变化：

### 内置函数

`indexOf`: 搜索一个指定的元素的位置，从0开始，没有找到的话返回-1

`slice`: 切片，起止参数包括开始索引，不包括结束索引。`slice()`从头到尾截取所有元素。利用这一点可以复制数组

`push`: 向数组的末尾添加若干元素

`pop`: 删除数组的最后一个元素

`unshift`: 添加到数组的第一个元素

`shift`: 删除数组的第一个元素

`sort`: 排序

`reverse`: 整个数组反转

`splice`: splice(x1,x2,'something'),删除x1开始的总共x2个元素，并在当前位置加上'something'

`concat`: 连接A、B两个数组

`join`: 以字符串的形式连接数组里的元素，可以指定连接用的字符串

### 多维数组

```javascript
var arr = [[1, 2, 3], [400, 500, 600], '-'];
```

## 对象

如果属性名包含特殊字符，就必须用`''`括起来，访问这个属性也无法使用`.`操作符，必须用`['xxx']`来访问。

访问一个不存在的属性会返回什么呢？JavaScript规定，访问不存在的属性不报错，而是返回`undefined`

由于JavaScript的对象是动态类型，可以自由地给一个对象添加或删除属性。

### 检测属性存在

用`in`操作符，返回true或者false。

要判断一个属性是否是对象自身拥有的，而不是继承得到的，可以用`hasOwnProperty()`方法

## 条件判断

`if () { ... } else { ... }`

`else if`连写在一起，来增加可读性，这里`else`略掉了`{}`是没有问题的，因为它只包含一个`if`语句，最后一个单独的`else`不要略掉`{}`。

JavaScript把`null`、`undefined`、`0`、`NaN`和空字符串`''`视为`false`，其他值一概视为`true`，因此上述代码条件判断的结果是`true`。

## 循环

### for循环

```javascript
for (i=1; i<=10000; i++) {
    x = x + i;
}
```

###for...in...循环

```javascript
for (var key in o) {
    console.log(key); // 'name', 'age', 'city'
}
```

### while循环

```javascript
var x = 0;
var n = 99;
while (n > 0) {
    x = x + n;
    n = n - 2;
}
x; // 2500
```

### do ... while循环

```javascript
var n = 0;
do {
    n = n + 1;
} while (n < 100);
n; // 100
```

##Map和Set

### Map

`Map`是一组键值对的结构，具有极快的查找速度。

```javascript
var m = new Map([['Michael', 95], ['Bob', 75], ['Tracy', 85]]);
m.get('Michael'); // 95
```

#### 内置方法

```javascript
var m = new Map(); // 空Map
m.set('Adam', 67); // 添加新的key-value
m.set('Bob', 59);
m.has('Adam'); // 是否存在key 'Adam': true
m.get('Adam'); // 67
m.delete('Adam'); // 删除key 'Adam'
m.get('Adam'); // undefined
```

一个key只能对应一个value

### Set

Set是一组key的集合，但不存储value

## Iterable

ES6标准引入了新的`iterable`类型，`Array`、`Map`和`Set`都属于`iterable`类型。

具有`iterable`类型的集合可以通过新的`for ... of`循环来遍历。

### forEach

- Array

  ```javascript
  'use strict';
  var a = ['A', 'B', 'C'];
  a.forEach(function (element, index, array) {
      // element: 指向当前元素的值
      // index: 指向当前索引
      // array: 指向Array对象本身
      console.log(element + ', index = ' + index);
  });
  ```

- Set

  ```javascript
  var s = new Set(['A', 'B', 'C']);
  s.forEach(function (element, sameElement, set) {
      console.log(element);
  });
  
  ```

- Map

  ```javascript
  var m = new Map([[1, 'x'], [2, 'y'], [3, 'z']]);
  m.forEach(function (value, key, map) {
      console.log(value);
  });
  ```

  可以只用一部分参数。


## 其他

1. node.js是什么

   Node.js 是一个 JavaScript 运行时环境。JavaScript 原来是只能在浏览器中运行的，当把它扩展成为可以在你的计算机上作为独立的程序运行时，Node.js 就出现了。

2. 