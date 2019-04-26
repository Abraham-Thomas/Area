# MVVM框架

### MVC、MVP与MVVM：

### \<https://juejin.im/post/5b3a3a44f265da630e27a7e6>

### MVVM双向绑定的原理：

数据驱动页面。Object.defineProperty，所有的MVVM框架都是用这个ES5的API实现双向数据绑定。

它发挥了哪些作用？

监听data变化，通过回调函数执行view与data的关联关系，而view通过input事件反馈到data。

它的原理？

**Object.defineProperty()** 会直接在一个对象上定义一个新属性，或者修改一个对象的现有属性， 并返回这个对象。configuirable、enumerable、writable、value、

**get** ，一个给属性提供 getter 的方法，如果没有 getter 则为 `undefined`。当访问该属性时，该方法会被执行，方法执行时没有参数传入，但是会传入`this`对象（由于继承关系，这里的`this`并不一定是定义该属性的对象）。

**set** ，一个给属性提供 setter 的方法，如果没有 setter 则为 `undefined`。当属性值修改时，触发执行该方法。该方法将接受唯一参数，即该属性新的参数值。

而MVVM就是通过get和set方法进行双向数据绑定。

**object.defineProperty()与reflect.defineProperty()的区别（后者属于ES6）？** 

后者返回一个布尔值，前者返回一个新的（或修改后的）对象。随着规范的进展，前者的属性和方法会逐渐迁往后者。

要求：熟练掌握该api的使用规则。

### MVVM的设计模式：

观察者模式。Observer（背后其实就是上面那个API，）——监听data变化，通知观察者列表（Dep）。数据的变化会触发该API的set()修改数据，观察者列表（Dep）有一个更新函数（Update），Watcher通过回调它，然后更新View。

### 生命周期：

beforeCreate()，

Create()

mounted()



