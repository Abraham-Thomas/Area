# Basic concept

#### 严格模式

ECMA5引入了严格模式的概念（strict mode）的概念。严格模式是为Javascript定义了一种不同的解析和执行模型。在严格模式下，ECMAScript3中的一些不确定的行为将得到处理，而且对某些不安全的操作也会抛出错误。若启用该模式，可在顶部添加：

```
"use strict";
```

这行代码看起来像是字符串，而且也没有赋值给任何变量，但其实它是一个编译指示（pragma），用于告诉支持的Javascript引擎切换到严格模式。这是为不破坏ECMAScript3语法而特意选定的语法。在函数内部也可使用：

```
function doSomething() {
	"use strict";
	//函数体
}
```

严格模式下对函数有一些限制：

- ​	不能把函数命名为eval或arguments；
- ​	不能把参数命名为eval或arguments；
- ​	不能出现两个参数同名。

------

#### 数据类型

typeof操作符：检测给定变量的数据类型。

```
var message = "some string";
alert(typeof message);		// "String"
alert(typeof (message));	// "String"		
alert(typeof 95);			// "number"
```

这几个例子说明，typeof操作符的操作数可以是变量或数值字面量。type是操作符不是函数，例子中的圆括号尽管可以使用，但不是必需。

有时候，typeof会返回一些令人迷惑但技术上却正确的值。比如，调用 typeof null 会返回 "object"，因为特殊值null被认为是一个空的对象引用。

从技术角度讲，函数在ECMA中是对象，不是一种数据类型。然而，函数也确实有一些特殊的性质。因此通过typeof操作符来区分函数和其他对象是有必要的。

**Undefined类型：**只有一个值——undefined，声明变量但未初始化，变量值就为undefined。

**Null类型：**同样只有一个值——null。从逻辑的角度看，null值表示一个空对象指针（所以如上所说typeof检测它会是一个”object“）。

如果定义的变量准备在将来用于保存对象，那么最好将该变量初始化为null而不是其他值，这样依赖，只要直接检查null值就可以知道相应的变量是否保存了一个对象的引用。如下：

```
if (car != null) {
	//对car对象执行某些操作
}
```

实际上，undefined值是派生自null值，因此ECMA-262规定对它们的相等性测试要返回true：

```
alert(null == undefined);	//true
```

尽管null和undefined有这样的关系，但它们的用途完全不同，无论在什么情况下都没必要把一个变量的值显式地设置为undefined，但只要意在保存对象的变量还没有真正保存对象，就应该让该变量保存null值，这样做不仅可以体现null作为空指针的惯例，而且有助于进一步区分null和undefined。

**Number类型**：该类型使用IEEE754格式来表示整数和浮点数。

NaN（Not a Number），一个特殊的数值，表示一个本来要返回数值的操作数未返回数值的情况。它有两个特点，任何涉及NaN的操作（如NaN/10）都会返回NaN，NaN和任何值都不相等：

```
alert(NaN == NaN);		// false
```

ECMAScript定义了isNaN()函数，该函数接收一个参数，可以是任意类型。而函数会帮我们确定参数是否“不是数值”，在接收到一个值后，会尝试将这个值转换为数值：

```
alert(isNaN(NaN));			//true
alert(isNaN(10));			//false	(10是一个数值)
alert(isNaN("10"));			//false	(可以被转换成数值10)
alert(isNaN("blue"));		//true	(不能转换成数值)
alert(isNaN(true));			//false	(可以被转换成数值1)
```

数值转换：Number()、parseInt()、parseFloat()

**String类型：**表示零或多个16位Unicode字符组成的字符序列，即字符串。ECMAScript中用单或双引号没什么区别，这点与PHP不同。但一创建，值就不能改变，要改变的话，首先要销毁原来的字符串，然后再用另一个新值字符串填充该变量：

```
var lang = "Java";
lang = lang + "Script";
```

转换位字符串：toString()

**Object类型：**ECMAScript的对象其实就是一组数据和功能的集合。对象可以通过执行new操作符后跟要创建的对象类型的名称来创建。而创建Object类型的实例并为其添加属性和（或）方法，就可以创建自定义对象。

------

#### 全等

全等操作符由3个等号组成，它只在两个操作数未经转换就相等的情况下返回true：

```
var result1 = ("55" == 55);		// true，因为转换后相等
var result1 = ("55" === 55);	// false，因为不同数据类型不相等
return null === undefined;		// false，因为不同数据类型不相等
```

#### with语句

它的作用是将代码的作用域设置到一个特定的对象中。语法如下：

```
with (expression) statement;
```

定义它的目的主要是为了简化多次编写同一个对象的工作：

```
var qs = location.search.substring(1);
var hostName = location.hostname;
var url = location.href;
```

上面几行代码都包含location对象，如果使用with语句：

```
with(location){
	var qs = search.substring(1);
	var hostName = hostname;
	var url = href;
}
```

这样每个代码首先被认为是一个局部变量，而如果在局部环境中找不到该变量定义，就会查询location对象是否有属性名。如果发现了同名属性，ze以location对象属性的值作为变量的值。

严格模式下不允许使用with语句。大量使用with会导致性能下降，同时也给代码调试带来困难，因此开发大型应用程序时，不建议使用。

------

#### 函数

ECMAScript中的函数定义时不必制定是否返回值。实际上，任何函数在任何时候都可以通过return语句实现值得返回。不过位于return后面的代码永远不会执行，return语句也可以不带任何返回值，这种情况下，函数在停止执行后将返回undefined值，这种用法一般用在需要提前停止函数执行而又不需要返回值得情况下。

```
function sayHi(name, message) {
	return;
	alert("Hello " + name + "," + message);		//永远不会调用
}
```

推荐的做法是要么让函数始终都返回一个值，要么永远都不要返回值。否则，如果函数有时候返回值，有时候不返回，会给代码调试带来不便。