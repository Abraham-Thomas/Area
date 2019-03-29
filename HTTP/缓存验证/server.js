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
		
		const Etag = request.headers['if-none-match']
		if(Etag === '456'){
			response.writeHead(304, {
				'Content-Type': 'text/javascript',
				'Cache-Control': 'max-age=200000, no-store',
				'Last-Modified': '123',
				'Etag': '456'
			})
			response.end('')
		} else{
			response.writeHead(200, {
				'Content-Type': 'text/javascript',
				'Cache-Control': 'max-age=200000, no-store',
				'Last-Modified': '123',
				'Etag': '456'
			})

			response.end('console.log("script loaded")')
		}
		
	}

}).listen(8888)

console.log('server listening on 8888')