# CSS基础

浏览器解析CSS是从右往左的。处于性能的考虑

```
.body div .tap{
	width: 100%;
}
```

浏览器会先找到.tap，再去寻找div，最后找到.body。

### 选择器权重：

!import优先级最高，然后依次是内联样式，id，class，标签元素。

相同的权重，	后写的生效。

### 非布局样式：

**字体族：**

serif（衬线字体，如宋体）、 sans-serif（非衬线字体，如黑体）、monos'pace（等宽字体）、cursive（手写体）、fantasy（花体），字体族不能加引号，字体则需要，如

```
font-family: "PingFang SC", "Microsoft Yahei", serif;
```

**多字体fallback、网络字体、自定义字体、iconfont**

```
//自定义字体
@font-face {
	font-family: "IF";
	src: url("./IndieFlower.ttf");
}
```

**背景：**背景颜色、渐变色背景、	多背景叠加、背景图片和属性（雪碧图，优化性能，减少http请求），base64（图片转化为文本，适用场景比较小的图标，虽然可以优化http请求，但是增大了图片体积和解码开销）

渐变：linear-gradient(to right, red, green); linear-gradient(xxdeg, red, green);可以从方向和角度进行设置，颜色可以设置多个，渐变还可以叠加