//拼接

const {join} = require('path');

console.log(join('/user', 'local', 'video'));

console.log(join('/user', '../local', 'video'));