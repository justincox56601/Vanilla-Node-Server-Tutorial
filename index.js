//imports
const http = require('http');
const path = require('path');
const fs = require('fs')

//variables
const htmlHeader = {'Content-Type' : "text/html"}
const JSONHeader = {'Content-Type' : "application/json"}
const PORT = process.env.PORT || 5000;
const server = http.createServer((req,res)=>{
	// if(req.url == '/'){
	// 	fs.readFile(path.join(__dirname, 'public', 'index.html'), 
	// 	(err, content)=>{
	// 		if(err) throw err;
	// 		res.writeHead(200, htmlHeader);
	// 		res.end(content)
	// 	})
		
	// }

	// if(req.url == '/about'){
	// 	fs.readFile(path.join(__dirname, 'public', 'about.html'), 
	// 	(err, content)=>{
	// 		if(err) throw err;
	// 		res.writeHead(200, htmlHeader);
	// 		res.end(content)
	// 	})
		
	// }

	// if(req.url == '/api/users'){
	// 	const users = [
	// 		{name: "Bob Smith", age: 33},
	// 		{name: "Ann Frank", age: 16},
	// 		{name: "Mel Neville", age: 43},
	// 	];
	// 	res.writeHead(200, JSONHeader);
	// 	res.end(JSON.stringify(users));
		
	// }

	//build filepath
	let filepath = path.join(__dirname, 'public', req.url == '/' ? 
	'index.html' : req.url);

	//extension of the file
	let extname = path.extname(filepath);
	let contentType = 'text/html';
	switch(extname){
		case '.js':
			contentType = 'text/javascript';
			break;
		case '.css':
			contentType = 'text/css';
			break;
		case '.json':
			contentType = 'application/json';
			break;
		case '.png':
			contentType = 'img/png';
			break;
		default:
			break;
}

	//readfile
	fs.readFile(filepath, (err, content)=>{
		if(err){
			if(err.code == 'ENOENT'){
				fs.readFile(path.join(__dirname, 'public', '404.html'), (err, content)=>{
					res.writeHead(200, {"Content-Type": "text/html"});
					res.end(content, 'utf8');
				});
			}else{
				//a different server error
				res.writeHead(500);
				res.end(`Server Error: ${err.code}` );
			}
		}else{
			//successful response
			res.writeHead(200, {'Content-Type' : contentType});
			res.end(content, 'utf8');
		}
		
	})
});

server.listen(PORT, ()=>{console.log(`Server running on ${PORT}`)});