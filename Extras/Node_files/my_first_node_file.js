
//To include a module, use the require() function with the name of the module
//Node.js has a built-in module called HTTP, which allows Node.js to transfer data over the Hyper Text Transfer Protocol (HTTP).
// var http = require('http');
// http.createServer(function (req, res) {
//     res.writeHead(200, {'Content-Type': 'text/html'});
//     res.end('Hello World!');
// }).listen(8080);

//Create Your Own Modules
//You can create your own modules, and easily include them in your applications.
//Use the exports keyword to make properties and methods available outside the module file.
//This is stored in a separated file as my_first_module.js
// exports.myDateTime = function () {
//     return Date();
// };

// Include Your Own Module
// Now you can include and use the module in any of your Node.js files.
// var http = require('http');
// var dt = require('./my_first_module.js');
// http.createServer(function (req, res) {
//     res.writeHead(200, {'Content-Type': 'text/html'});
//     res.write("The date and time are currently: " + dt.myDateTime());
//     res.end();
// }).listen(8080);

var http = require('http');
var fs = require('fs');
http.createServer(function (req, res) {
    fs.readFile('../index.html', function(err, data) {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        res.end();
    });
}).listen(8080);
