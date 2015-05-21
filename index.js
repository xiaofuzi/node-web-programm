/*
 导入服务器模块,这样就可以通过该文件启动服务器
*/


/*
以非阻塞方式进行请求响应
函数传递.
相对采用将内容传递给服务器的方式，我们这次采用将服务器“传递”给内容的方式。 
从实践角度来说，就是将response对象（从服务器的回调函数onRequest()获取）通过请求路由传递给请求处理程序。 随后，处理程序就可以采用该对象上的函数来对请求作出响应。
*/

var server = require("./server");
var router = require("./router");
var requestHandlers = require("./requestHandlers");

var handle = {};
handle['/'] = requestHandlers.start;
handle['/start'] = requestHandlers.start;
handle['/upload'] = requestHandlers.upload;

server.createServer(router.route, handle);