console.log('This is a module');

const testVal = 100;

function test() {
	console.log(testVal);
}

//对外输出
module.exports.testVal = testVal;
module.exports.testFn = test;