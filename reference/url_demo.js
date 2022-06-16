const url = require('url');

const myURL = new URL('http://mywebsite.com:8000/hello.html/?id=100&status=active');

//serialized url
console.log(myURL.href);
console.log(myURL.toString());

//root domain
console.log(myURL.host);

//hostname - does not include port number
console.log(myURL.hostname);

//pathname
console.log(myURL.pathname);

//serialized query
console.log(myURL.search);

//search params
console.log(myURL.searchParams);

//add params
myURL.searchParams.append('abc', 123);
console.log(myURL.searchParams);

myURL.searchParams.forEach((value, key)=>{
	console.log(`${key} : ${value}`);
})