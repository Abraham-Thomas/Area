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

**行高：**