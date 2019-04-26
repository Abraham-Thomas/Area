# JS运行机制

```javascript
console.log(1);
	setTimeout(function() {
	console.log(3)
},0);
console.log(2);
//1，2，3
```

JS属于单线程，一个时间只能做一件事。从上至下依次执行同步任务队列。

setTimeout，setInteval属于异步任务，被挂起到任务队列。

```
console.log('A');
	while(true){
}
console.log('B');
//A
```



for循环是同步任务，但setTimeout是异步操作，尽管为0秒，但是还有异步队列插入时间和异步队列执行时间，同步执行完，setTimeout开始放入异步队列，然后执行。

```
for(var i=0;i<4;i++){
	setTimeout(function() {
		console.log(i)
	}, 0);
}
//4 4 4 4
```



**开启异步任务：**

setTimeout，setInterval，DOM事件，Promise