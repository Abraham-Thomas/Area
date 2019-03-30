const {parse, format} = require('path');

const filePath = '/user/local/video/fn.mp4';

const ret = parse(filePath);
console.log(ret);

//format方法会从一个对象返回一个路径字符串，与parse相反。
console.log(format(ret));