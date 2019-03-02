# 浏览器缓存

主要是针对浏览器的数据持久化存储，用于在本地保存数据并进行快速读取以避免重复资源请求的传输机制的统称。好的缓存可以避免重复的网络资源请求并让浏览器快速地响应用户操作，提高页面速度。

Chrome浏览器的调试模式，Application左侧列举了8种缓存机制： HTTP文件缓存、LocalStorage、SessionStorage、indexDB、WebSQL、Cookie、CacheStorage、Application Cache，（Flash已淘汰，为什么会被淘汰，自己查）。

------

#### HTTP文件缓存

一种基于HTTP协议的浏览器端文件缓存机制。在文件重复请求的情况下，浏览器可以根据HTTP响应的协议头信息判断是从服务器端请求文件还是从本地读取，Chrome控制台Application的Frames可以查看浏览器的HTTP文件资源缓存列表内容。浏览器和服务器判断是否使用浏览器端文件缓存过程：

![HTTP文件缓存判断机制流程](E:\GitHub\Area\前端技术基础\浏览器应用基础\浏览器数据持久化存储技术\HTTP文件缓存判断机制流程.jpg)

#### localStorage

一种H5的本地缓存方案，目前主要用于浏览器端保存体积较大的数据（如AJAX返回结果等），localStorage在不同浏览器中长度限制各有不同，它常用的API较少，核心方法：setItem() 、getItem() 、removeItem() 、clear()。

大小限制指的是单个域名下localStorage的大小，所以localStorage中不宜存放过多的数据，并且使用之后最好移除不再使用的数据。

此外，localStorage只支持简单数据类型的读取，为了方便localStorage读取对象格式的内容，通常需要进行一层安全封装再引入使用。



```
let rkey = /^[0-9A-Za-z@-]*$/;
let store;

//转换对象
function init() {
	if (typeof store === 'undefined') {
		store = window['localStorage'];
	}
	return true;
}

//判断localStorage的key值是否合法
function isValidKey(key) {
	if (typeof key !== 'String') {
		return false;
	}
	return rkey.test(key);
}

exports = {
	//设置localStorage单条记录
	set (key, value) {
		if (isValidKey(key) && init()) {
			try {
				value += '';
				store.setItem(key, value);
				success = true;
			} catch (e) {}
		}
		return success;
	},

​    //读取localStorage单条记录
​    get (key) {
​        if (isValiKey(key) && init()) {
​            try {
​                return store.getItem(key);
​            } catch (e) {}
​        }
​        return null;
​    },

​    //移除localStorage单条记录
​    remove (key) {
​        if (isValiKey(key) && init()) {
​            try {
​                store.removeItem(key);
​                return true;
​            } catch (e) {}
​        }
​        return false;
​    },

​	//清除localStorage所有记录
​    clear () {
​        if (init()) {
​            try {
​                for (let key in store) {
​                    store.removeItem(key);
​                }
​                return true;
​            } catch (e) {}
​        }
​        return false;
​    }

};

module.exports = exports;
```

