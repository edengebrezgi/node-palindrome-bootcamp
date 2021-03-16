const http = require('http');
const fs = require('fs')
const url = require('url');
const querystring = require('querystring');
const server = http.createServer(function(req, res) {
    const page = url.parse(req.url).pathname;
    const params = querystring.parse(url.parse(req.url).query);
    console.log(page);
  if (page == '/') {
    fs.readFile('pan.html', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(data);
      res.end();
    });
  }
  else if (page == '/funStuff') {
    if('input' in params){
      res.writeHead(200, {'Content-Type': 'application/json'});
      let str = params['input']                       
      const splitString = str.split('') 
      const reverseString = splitString.reverse('')
      const joinString = reverseString.join('') 
      let string = null
      if(joinString === str){
        string = "is a Palindrome!"
      } else {
        string = "is not a Palindrome, sorry :("
      }
      const objToJson = {
        isPalindrome: string
      }
      res.end(JSON.stringify(objToJson));
    }
  }
  else if (page == '/pan.css'){
    fs.readFile('pan.css', function(err, data) {
      res.write(data);
      res.end();
    });
  }else if (page == '/pan.js'){
    fs.readFile('pan.js', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/javascript'});
      res.write(data);
      res.end();
    });
  }
});
server.listen(8000);

// Jerry helped me with this code.