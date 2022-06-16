const fs = require('fs');
const path = require('path');

// fs.mkdir(path.join(__dirname, 'test'), {}, (err)=>{
// 	if(err) {throw err};
// 	console.log('Folder created');
// });

//create and write to file
// fs.writeFile(path.join(__dirname, 'test', 'hello.txt'), 'Hello world', (err)=>{
// 	if(err) {throw err};
// 	console.log('File written to');

// 	//append to file
// 	fs.appendFile(path.join(__dirname, 'test', 'hello.txt'), '\nI love Node.js', (err)=>{
// 		if(err) {throw err};
// 		console.log('File written to');
// 	});
// });

//read file
//append to file
// fs.readFile(path.join(__dirname, 'test', 'hello.txt'), 'utf8', (err, data)=>{
// 	if(err) {throw err};
// 	console.log(data);
// });

//rename a file
//append to file
fs.rename(
	path.join(__dirname, 'test', 'hello.txt'), 
	path.join(__dirname, 'test', 'helloWorld.txt'), 
	(err)=>{
		if(err) {throw err};
		console.log('File renamed');
});

