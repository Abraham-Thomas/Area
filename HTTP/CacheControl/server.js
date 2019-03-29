const http = require('http')
const fs = require('fs')

http.createServer(function(request, response){
	console.log('request come', request.url)

	//路径判断
	if(request.url === '/'){
		const html = fs.readFileSync('test.html', 'utf8')
		response.writeHead(200, {
			'Content-Type': 'text/html'
		})
		response.end(html)
	}

	else if(request.url === '/script.js'){
		response.writeHead(200, {
			'Content-Type': 'text/javascript',
			'Cache-Control': 'max-age=2000'
		})
		response.end('console.log("script loaded")')
	}

}).listen(8888)

console.log('server listening on 8888')