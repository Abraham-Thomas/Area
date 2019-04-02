# AJAX（Asynchronous JavaScript and XML）

异步的JS与XML，不是编程语言，而是一种在无需重新加载整个网页的情况下能够更新部分内容的技术。

实例化XHR对象：

```
var request = new XMLHttpRequest();
```

对于曾经的IE5、6，现在基本忽略了。如果相兼容，可以：

```javascript
var request;
if (window.XMLhttpRequest) {
	request = new XMLHttpRequest();
} else {
    request = ActiveXObject("Microsoft.XMLHTTP");	//IE5、6
}
```

### 使用XHR所需要的方法：

**request.open("method", "url", boolean);**

调用open并不会真正发送请求，而是启动一个请求以备发送。boolean一般为**true**，表示异步。

**request.send(null);**

send()接收一个参数，即要作为请求主体发送的数据。如果不需通过请求主体发送数据，则必须传入null。

**setRequestHeader()**方法可以设置自定义请求头部信息：

request.request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

但它一般放在open与send之间。

### 获取响应：

responseText: 获得字符串形式的响应数据。

responseXML：获得XML形式的响应数据。（现在基本不用它，而使用json代替）

status和statusText：以数字和文本形式返回HTTP状态码。（statusText在跨浏览器使用时不太可靠，所以一般使用status）

getResponseHeader()：查询响应中某个字段的值。

getAllResponseHeader()：获取所有的响应报头。

**readyState属性**——表示请求/响应过程中的当前活动状态：0、1、2、3、4。

- 0：请求未初始化、open()未被调用。
- 1、启动。服务器连接建立、open()已被调用。
- 2、发送。send()被调用，但尚未接收到响应。
- 3、接收。接收到部分响应数据。
- 4、完成。接收全部响应数据。

我们主要关注4阶段，通过onreadystatechange事件处理。

```javascript
var request = new XMLHttpRequest();
request.onreadystatechange = function() {
	if(request.readystate == 4) {
        if ((request.status >= 200 && request.status < 300) || request.status == 304){
            alert(request.responseText);
        } else {
            alert("Request was unsuccessful: " + request.status);
        }
	}
}
request.open("post", "example.txt", true);
request.send(null);
```

