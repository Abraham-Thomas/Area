//打印出正确路径

const {normalize} = require('path');
//等同于const {normalize} = require('path').normalize;

console.log(normalize('/user//local/video'));

console.log(normalize('/user/../local/video'));