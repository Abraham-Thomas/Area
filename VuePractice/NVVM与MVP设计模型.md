### 传统的MVP设计模型：

![](https://github.com/Abraham-Thomas/Vue-Chapter/blob/master/images/MVP.png)

- Model层：数据层；

- Presenter层：呈现层，业务逻辑相关的控制器

- View层：视图层 

首先，视图层发出一个事件，交给控制器，控制器要么反馈给数据层（Ajax）获取数据，要么直接操作DOM（根据视图层发送的一些事件）。可以看出Presenter层是MVP中最核心的一层，Model层非常边缘化。基于MVP模型，大量代码写在Presenter层，而且大部分代码在进行DOM操作

------



### NVVM模型：

![](https://github.com/Abraham-Thomas/Vue-Chapter/blob/master/images/NVVM.png)

这种设计模型里也有Model层和View层，取代presenter层的是ViewModel层，而这一层并不需要我们来编写，vue框架已经为我们准备好了（感谢尤雨溪大神和他的团队们），所以我们只需要关注其他两层就好。ViewModel层会监听到数据层的数据改变，它能帮助我们实时改变视图层，同时也能监听到视图层一些事件触发，去调用逻辑代码执行。 所以，为了改变View层，我们只需要把精力放到Model层就好。