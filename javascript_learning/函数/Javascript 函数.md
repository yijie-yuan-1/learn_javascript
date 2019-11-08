#Javascript 函数

## 基础函数

###定义函数

- 方法一

```javascript
function abs(x) {
    if (x >= 0) {
        return x;
    } else {
        return -x;
    }
}
```

- 方法二

```javascript
var abs = function (x) {
    if (x >= 0) {
        return x;
    } else {
        return -x;
    }
};
```

### 调用函数

JavaScript允许传入任意个参数而不影响调用，只有前面的参数会被调用，其他的没有影响。

传入的参数比定义的少相当于传入undifine，返回NaN



- arguments

  它只在函数内部起作用，指向当前函数的调用者传入的所有参数。`arguments`类似`Array`但它不是一个`Array`（调用的时候当成array就好）。

  利用`arguments`，你可以获得调用者传入的所有参数。也就是说，即使函数不定义任何参数，还是可以拿到参数的值。

  `arguments`最常用于判断传入参数的个数。

- rest参数

  rest参数只能写在最后，前面用`...`标识，从运行结果可知，传入的参数先绑定`a`、`b`，多余的参数以数组形式交给变量`rest`，所以，不再需要`arguments`我们就获取了全部参数。

  如果传入的参数连正常定义的参数都没填满，也不要紧，rest参数会接收一个空数组

### 变量作用域

- 变量提升

  JavaScrip会先扫描整个函数体的语句，把所有申明的变量“提升”到函数顶部。

  

### 方法

在一个对象中绑定函数。

- This

  如果以对象的方法形式调用，比如`xiaoming.age()`，该函数的`this`指向被调用的对象，也就是`xiaoming`，这是符合我们预期的。

  如果单独调用函数，比如`getAge()`，此时，该函数的`this`指向全局对象，也就是`window`。

  并且，要保证`this`指向正确，必须用`obj.xxx()`的形式调用！

  

  用`var that = this;`，你就可以放心地在方法内部定义其他函数，而不是把所有语句都堆到一个方法中。

- Apply

  指定函数的this指向哪个对象

  对普通函数调用，我们通常把`this`绑定为`null`。

- Call

  与`apply()`类似的方法，唯一区别是：call()把参数按顺序传入。





## 高阶函数

- map
- reduce

