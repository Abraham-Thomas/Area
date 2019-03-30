const {basename, dirname, extname} = require('path');

const filePath = 'user/local/video/f1.mp4';

console.log(basename(filePath));	//文件名+拓展名
console.log(dirname(filePath));		//所在文件夹
console.log(extname(filePath));		//拓展名
