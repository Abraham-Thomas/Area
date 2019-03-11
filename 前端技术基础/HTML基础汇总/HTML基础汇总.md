# 基础汇总

### HTML常见元素：

- head部分：meta、title、style、link、script、base。

- body部分：div、section、article、aside、header、footer、p、span、em、strong、table、thead、tbody、tr、td、ul、ol、li、dl、dt、dd、a、from、input、select、textarea、button

**Head部分内容解析：**

\<meta charset="utf-8">：表示页面使用什么样的字符集（一般情况用utf-8，囊括所有的英文+中文以及很多国家的文字）

\<meata name="viewport" content="width=device-width, initial-scale=1.0,maximum-scale=1.0, user-scalable=no">：控制页面在设备上的显示，适配移动端的第一步

\<base href="/">：指定一个基础的路径，然后所有路径以这个路径为基准进行计算。

**Body部分内容解析：**

a[href, target]：target表示需要在哪打开链接，默认是self，具体参见w3c。

img[src, alt, title]：alt在图片未显示时所展示的文字解释，title表示图片显示后鼠标移上去所展示的信息。

table td[colspan, rowspan]：占用多行或多列可使用括号内两个属性。

form[target, method, enctype]：target表示表单要提交到哪里，method表示提交的方法，enctype表示用什么编码方式进行提交，主要针对POST方法：Unicode——把文本提交上去，formData把要提交的数据作一个编码，可以上传文件。

select>option[value]：下拉框

label[for]：可以和一个表单项关联，用于单选框和复选框，点击选项后面的文字也可选中按钮，关联的属性为选框的id。

**默认样式分类：**

块级block：默认宽度为父元素的100%。

行内inline：默认宽度由内容宽度决定。

inline-block；

块级元素可以包含行内元素，块级元素不一定能包含块级元素（p中不能包含div，不同浏览器会产生歧义），行内一般情况不能包含块级。

为什么a>div是合法的？

a包含块级元素时，a被视作透明的。

reset.css：将不同浏览器中标签元素的默认样式全部清除，消除不同浏览器默认样式下的差异性。

normalize.css：一般只适用于前端基本设计规范确定且统一的情况下，否则它将失去意义会导致表现层样式不宜维护。