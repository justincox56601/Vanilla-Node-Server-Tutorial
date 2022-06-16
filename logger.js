const EventEmitter = require('events');
const uuid = require('uuid');
const fs = require('fs');
const path = require('path');

class Logger extends EventEmitter{
	log(message){
		//call event
		const data = {id: uuid.v4(), message}
		this.emit('message', "event logged");
		fs.appendFile(
			path.join(__dirname, 'reference', 'test', 'helloWorld.txt'),
			'\n' + JSON.stringify(data),
			(err)=>{
				if(err) throw err;
			})
	}
}

module.exports = Logger;