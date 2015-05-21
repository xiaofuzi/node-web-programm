/*
* 一个完整的基于Node.js的web应用
*
* 用户可以通过浏览器使用我们的应用
* 用户请求 http://domain/start时, 可以看到一个欢迎页面, 页面上有一个文件上传的表单.
* 用户可以选择一个图片并提交表单,随后文件被上传到 http://domain/upload, 该页面完成上传后会把图片显示在页面上.
*
* 1.需要一个HTTP服务器.
* 2.需要一个路由,用于把请求对应到请求处理程序(request handler).
* 3.请求被服务器接收并通过路由后,需要进行相应的处理.
* 4.路由应该可以处理post数据, 并且把数据封装成更友好的格式传递给请求处理程序,因此需要请求数据处理功能.
* 5.视图逻辑处理程序.
* 6.上传处理功能来处理细节.
*/


/* 服务器创建 
var http = require("http");

http.createServer(function(request, response){
	response.writeHead(200, {"Content-Type":"text/plain"});
	response.write("Hello World");
	response.end();
}).listen(8888);
*/

/*
function execute(someFunction, value){
  someFunction(value);
}
execute(function(word){ console.log(word)},"Hello");

将函数作为参数直接传递.
在JavaScript中，一个 函数可以作为另一个函数接收一个参数。我们可以先定义一个函数，然后传递，也可以在传递参数的地方直接定义函数。

上述代码的等同方式:

var http = require("http");

function onRequest(request, response){
  response.writeHead(200,{"Content-Type":"text/plain"});
  response.write("Hello World");
  response.end();
}

http.createServer(onRequest).listen(8888);

为什么要采用如此的调用方式?
这是Node.js 原生的工作方式, 基于事件驱动的回调.

当服务器收到一个请求时, 我们传递给创建服务器函数的函数参数就会被调用.
"我们给某个方法传递了一个函数, 这个方法在有相应事件发生时调用这个函数来进行回调"
*/


/*
 服务端的模块放在哪里?
 在这里导出一个 start 函数,在这里仅仅是启动服务器.
 */

var http = require("http");
var url = require("url");

 function createServer(route, handle){
   function onRequest(request, response){
   	var pathname = url.parse(request.url).pathname;
     	console.log("Request for" + pathname + " received.");

     	route(handle, pathname, response);
   }

   http.createServer(onRequest).listen(8888);
   console.log("Server has started.");
   console.log("The hosts is: http://localhost:8888");
 }

 exports.createServer = createServer;

 /*
行为驱动执行
在index文件中, 我们可以将router对象传递进去, 服务器随后可以调用这个对象的router函数.
我们传递一个动作而不是名词,这是函数式的编程思想.
 */