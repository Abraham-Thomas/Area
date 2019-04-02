# HTTP头部域信息

**Accept**：告诉Web服务器自己能接收什么媒体类型，\*/*表示能接收任何类型，type/\*表示接收该类型下的所有子类型，一般格式为type/sub-type，多个类型使用q参数分割，q的值代表quality请求质量（权重），反映了用户对这类媒体类型的偏好程度，例如：Accept: text/plain; q=0.5, text/html, text/x-dvi; q=0.8, text/x-c。

**Accept-Charset**：浏览接收内容的字符集，通常是utf-8。

**Accept-Encoding**：浏览接收内容的编码方法，例如指定是否支持压缩，若支持压缩的化支持什么方法，具体如Accept-Encoding:gzip, deflate, sdch。

**Accept-Language**：浏览器接收内容的语言。语言跟字符集是有区别的，例如中文是语言，中文有很多字符集，big5、gb2312、gbk等。该参数也可以设置多个，如Accept-Language: zh-CN,zh;q=0.8。

**Accept-Ranges**：Web服务器表明自己是否接受获取某个实体的一部分（比如文件的一部分）请求，这里主要用于部分文件传输，实际上我们用的比较少。bytes表示接受传输多大长度内容，none表示不接受。

**Cache-Control**：用来声明服务器端缓存控制的指令。包括请求设置指令和响应请求指令。请求控制指令如下：

​	no-cache：不使用缓存实体，依然会缓存，不过要求从Web服务器去请求内容。

​	

​	max-age：只接受Age值小于max-age值的内容，即没有过期的请求对象。

​	max-stale：可以接受过去的对象，但是过期时间必须小于max-stale值。

​	min-fresh：接受生命期大于其当前Age跟min-fresh值之和的缓存对象。

响应指令如下：

​	public：可以用Cache中内容回应任何用户。

​	private：只能用缓存内容回应先请求该内容的具体用户。

​	no-chche：可以设置哪些内容不被缓存。

​	max-age：设置响应中包含对象的过期时间。

请求和响应都有的：

​	no-store：完全不使用缓存。