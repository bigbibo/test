/*var http = require('http');
var server = http.createServer(function(req,res) {
	req.setEncoding('utf-8');
	req.on('data',function(chunk) {
		console.log('parsed',chunk);
	})
	req.on('end',function() {
		console.log("done parsing");
		res.end();
	})
})

server.listen(3000);
*/

/*POST请求字符串缓存*/
var http = require('http');
var url = require('url');
var items = [];

var server = http.createServer(function(req,res) {
	switch(req.method) {
		case 'POST':
		var item = '';
		req.setEncoding('utf-8');
		req.on('data',function(chunk) {
			item += chunk;
		})
		req.on('end',function() {
			items.push(item);
			res.end('oK\n');
		})
		break;
		case 'GET':
		items.forEach(function(item,i) {
			res.write(i + ')' + item + '\n');
		})
		res.end();
		break;

	}
})
server.listen(3000);
