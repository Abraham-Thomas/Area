const http = require('http')
const fs = require('fs')

http.createServer(function(request, response){
	console.log('request come', request.url)

	//路径判断
	if(request.url === '/'){
		const html = fs.readFileSync('test.html', 'utf8')
		response.writeHead(200, {
			'Content-Type': 'text/html',
			'Set-Cookie': ['id=123;max-age=20','my=456;HttpOnly','ken=789']
		})
		response.end(html)
	}
}).listen(8888)

console.log('server listening on 8888')